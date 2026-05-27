import AboutThree from "~/sections/about_page/AboutThree";
import AboutServices from "~/sections/about_page/AboutServices";
import AboutGallery from "~/sections/about_page/AboutGallery";
import Breadcumb from "~/sections/about_page/Breadcumb";
import ClientThree from "~/sections/about_page/ClientThree";
import WhyChooseThree from "~/sections/about_page/WhyChooseThree";
import Scroll from "~/sections/shared/Scroll";

export const metadata = {
  title: "About Us | RAM General Supply",
  description:
    "Proudly delivering premium LED lighting services—expert installation, rebate management, and energy-saving solutions for businesses.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcumb />
      <AboutThree />
      <AboutServices />
      <WhyChooseThree />
      <AboutGallery />
      <ClientThree />
      <Scroll />
    </>
  );
}
