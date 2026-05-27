import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const publicDir = path.join(repoRoot, "public");

const ASSET_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".gif",
  ".ico",
]);

const CONTENT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".css",
  ".md",
  ".json",
]);

const CONTENT_DIRS = ["app", "sections", "components", "assets", "public"];

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function walkFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") {
        continue;
      }
      out.push(...walkFiles(abs));
      continue;
    }
    out.push(abs);
  }
  return out;
}

function readAllContentFiles() {
  const files = [];
  for (const rel of CONTENT_DIRS) {
    const abs = path.join(repoRoot, rel);
    files.push(...walkFiles(abs));
  }

  const contentFiles = files.filter((f) => CONTENT_EXTENSIONS.has(path.extname(f).toLowerCase()));

  return contentFiles
    .map((filePath) => {
      try {
        return fs.readFileSync(filePath, "utf8");
      } catch {
        return "";
      }
    })
    .join("\n");
}

function listPublicAssets() {
  const files = walkFiles(publicDir);
  return files.filter((f) => ASSET_EXTENSIONS.has(path.extname(f).toLowerCase()));
}

function isProtectedPublicAsset(publicFileAbsPath) {
  const rel = path.relative(publicDir, publicFileAbsPath);
  const relPosix = toPosix(rel).toLowerCase();

  // Keep font-related SVGs and similar assets; deleting these often breaks icon fonts.
  if (relPosix.includes("/webfonts/") || relPosix.includes("/fonts/")) return true;

  // Keep favicon / apple icons.
  if (relPosix.includes("favicon")) return true;

  return false;
}

function main() {
  if (!fs.existsSync(publicDir)) {
    console.error("No public/ directory found.");
    process.exit(1);
  }

  const shouldDelete = process.argv.includes("--delete");

  const corpus = readAllContentFiles();
  const publicAssets = listPublicAssets();

  const used = [];
  const unused = [];

  for (const absPath of publicAssets) {
    const rel = path.relative(publicDir, absPath);
    const webPath = "/" + toPosix(rel);

    if (isProtectedPublicAsset(absPath)) {
      used.push(webPath);
      continue;
    }

    // Match either "/main-assets/img/..." or "main-assets/img/..." usage.
    const relPosix = toPosix(rel);
    const isReferenced =
      corpus.includes(webPath) ||
      corpus.includes(relPosix) ||
      corpus.includes(relPosix.replaceAll("/", "\\")); // defensive for windows-style strings

    if (isReferenced) {
      used.push(webPath);
    } else {
      unused.push({ webPath, absPath });
    }
  }

  const result = {
    totalPublicAssets: publicAssets.length,
    usedCount: used.length,
    unusedCount: unused.length,
    unused: unused.map((u) => u.webPath).sort(),
  };

  if (shouldDelete) {
    for (const { absPath } of unused) {
      try {
        fs.unlinkSync(absPath);
      } catch (error) {
        console.error(`Failed to delete: ${absPath}`);
        console.error(error);
        process.exitCode = 1;
      }
    }
  }

  console.log(JSON.stringify({ ...result, deleted: shouldDelete }, null, 2));
}

main();

