import Link from "next/link";
import { notFound } from "next/navigation";

interface ApplicationData {
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  bgGradient: string;
  accentColor: string;
  statNumber?: string;
  statLabel?: string;
  industryFact?: string;
  overviewTitle?: string;
  overviewParagraphs?: string[];
  benefitsTitle?: string;
  benefitsParagraph?: string;
  contactAddress?: string;
  contactPhone?: string;
  contactEmail?: string;
  images?: { src: string; alt: string }[];
  expertCard?: { name: string; title: string; imageSrc: string };
}

// Comprehensive applications dataset
const applicationsData: Record<string, ApplicationData> = {
  "airports-transport-hubs": {
    title: "Airports & Transport Hubs",
    slug: "airports-transport-hubs",
    icon: "ri-plane-line",
    shortDesc:
      "High-quality LED lighting for airports and transport hubs—terminals, parking lots, and walkways—with precision illumination for safety, security, and passenger experience.",
    overviewTitle:
      "Airport and Transport Hubs Lighting Solutions for Unmatched Performance",
    overviewParagraphs: [
      "Lighting plays a crucial role in airports and transport hubs, impacting safety, security, and the overall passenger experience. High-quality LED lighting ensures terminals, parking lots, and walkways are illuminated with precision, enhancing visibility and improving the flow of people and vehicles. Well-designed lighting not only boosts safety but also creates a welcoming atmosphere, helping travelers navigate busy spaces with ease.",
      "Our LED solutions are tailored to meet the unique demands of airports and transport hubs, offering exceptional energy efficiency and long-lasting durability. By upgrading to cutting-edge lighting, you'll reduce operational costs while maintaining a well-lit and secure facility. With lower maintenance needs and energy savings, our systems enhance both performance and sustainability, empowering your facility to thrive.",
    ],
    benefitsTitle: "Cut Maintenance Costs by 75% with LED Solutions",
    benefitsParagraph:
      "Upgrading to LED lighting in airports and transport hubs not only slashes energy costs by up to 50%, but also cuts maintenance costs by 75% due to the longer lifespan of LEDs, which last up to five times longer than traditional lighting. Additionally, enhanced lighting improves safety by reducing accidents by up to 40% and boosts security by enhancing visibility in key areas. With improved visual clarity and reduced downtime, our lighting solutions create a more efficient, secure, and cost-effective environment for both staff and travellers.",
    challenges: [],
    solutions: [],
    features: [
      "Safer walkways and terminals",
      "Long-lasting performance",
      "Energy-efficient lighting",
      "Low-maintenance solutions",
    ],
    bgGradient: "linear-gradient(135deg, #023e8a 0%, #0077b6 100%)",
    accentColor: "#0077b6",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/airports-transport-hubs/airports-transport-hubs.webp",
        alt: "Airports & Transport Hubs",
      },
      {
        src: "/main-assets/img/applications/airports-transport-hubs/airports-transport-hubs-2.webp",
        alt: "Airports & Transport Hubs",
      },
    ],
    expertCard: undefined,
  },
  "convenience-stores": {
    title: "Convenience Stores",
    slug: "convenience-stores",
    icon: "ri-store-2-line",
    shortDesc:
      "Tailored LED lighting for convenience stores—welcoming, efficient spaces that highlight products, improve safety, and support stronger sales.",
    overviewTitle: "Bright Spaces, Better Business: LED Lighting for Retail Excellence",
    overviewParagraphs: [
      "The right lighting can transform a convenience store into a welcoming, efficient, and profitable space. With tailored LED lighting solutions, every corner of your store shines with clarity and precision, making products more appealing and enhancing the overall shopping experience. Bright, uniform lighting not only draws customers in but also creates a safer, more inviting atmosphere that encourages them to linger—and buy more.",
      "Our energy-efficient LED fixtures are designed to reduce operational costs while providing consistent, high-quality illumination. From highlighting your best-selling items to ensuring compliance with safety standards, our lighting solutions are engineered to meet the unique demands of convenience stores. By upgrading to modern lighting, you'll not only save on energy bills but also elevate your store's appearance, turning first-time visitors into loyal customers.",
    ],
    benefitsTitle: "Boost Sales by 20% with Strategic Convenience Store Lighting",
    benefitsParagraph:
      "Studies show that well-designed lighting can increase sales by up to 20% in retail environments. Our LED lighting solutions are crafted to spotlight your best-selling items, create inviting pathways, and enhance overall store visibility. With energy-efficient fixtures that lower costs and maximize brightness, you'll not only improve your store's ambiance but also encourage customers to shop longer and buy more.",
    challenges: [],
    solutions: [],
    features: [
      "LEDs built for retail",
      "Cost-saving illumination",
      "Highlight what matters",
      "Lighting that sells",
    ],
    bgGradient: "linear-gradient(135deg, #ee6c4d 0%, #f25c54 100%)",
    accentColor: "#ee6c4d",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/convenience-stores/convenience-stores.webp",
        alt: "Convenience Stores",
      },
      {
        src: "/main-assets/img/applications/convenience-stores/convenience-stores-2.webp",
        alt: "Convenience Stores",
      },
    ],
    expertCard: undefined,
  },
  "educational-institutions": {
    title: "Educational Institutions",
    slug: "educational-institutions",
    icon: "ri-book-open-line",
    shortDesc:
      "LED lighting for schools, colleges, and universities—classrooms, auditoriums, libraries, and campuses—with improved focus, safety, and lower operating costs.",
    overviewTitle: "Brighten Minds and Campuses with LED Lighting",
    overviewParagraphs: [
      "Lighting is a cornerstone of effective learning environments, influencing everything from student focus to safety on campus. Our cutting-edge LED lighting solutions are designed to enhance visibility, reduce glare, and create an atmosphere conducive to learning. By replacing outdated lighting with energy-efficient LEDs, schools, colleges, and universities can significantly improve the learning experience while reducing operational costs.",
      "Our solutions cater to diverse needs across classrooms, auditoriums, libraries, hallways, and outdoor spaces like sports fields and parking lots. Whether it's ensuring consistent brightness in lecture halls or well-lit pathways for safer navigation, our lighting systems provide unmatched efficiency and durability, empowering educational institutions to thrive sustainably while prioritizing student and staff well-being.",
    ],
    benefitsTitle: "Save Big on Energy and Brighten Classrooms",
    benefitsParagraph:
      "Upgrading to LED lighting in educational institutions can reduce energy costs by up to 29.5%, significantly cutting electricity bills and lowering carbon footprint. LEDs also last up to six times longer than traditional bulbs, reducing maintenance costs and disruptions. With improved illumination and consistent light quality, LED lighting enhances focus and productivity in classrooms, labs, and auditoriums. The ability to dim lights and adapt to different environments further optimizes the learning experience. Transitioning to LED lighting not only saves on energy but also creates a brighter, safer, and more conducive environment for both students and teachers.",
    challenges: [],
    solutions: [],
    features: [
      "Brighten classrooms effectively",
      "Safer outdoor spaces",
      "Lower lighting costs",
      "Uniform light distribution",
    ],
    bgGradient: "linear-gradient(135deg, #7209b7 0%, #480ca8 100%)",
    accentColor: "#7209b7",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/educational-institutions/educational-institutions.webp",
        alt: "Educational Institutions",
      },
      {
        src: "/main-assets/img/applications/educational-institutions/educational-institutions-2.webp",
        alt: "Educational Institutions",
      },
    ],
    expertCard: undefined,
  },
  "healthcare-facilities": {
    title: "Healthcare Facilities",
    slug: "healthcare-facilities",
    icon: "ri-heart-pulse-line",
    shortDesc:
      "LED lighting for healthcare facilities—balancing clinical precision and patient comfort with consistent brightness, minimal glare, and energy efficiency.",
    overviewTitle: "Lighting the path to better patient care with LED",
    overviewParagraphs: [
      "Effective lighting can transform healthcare environments by balancing clinical precision and patient comfort. Our state-of-the-art LED lighting systems offer consistent brightness to support complex medical procedures while creating a serene ambiance for recovery. Designed for minimal glare and energy efficiency, they enhance visibility and reduce stress for both patients and staff.",
      "From operating theaters to waiting areas, our solutions adapt to every healthcare need. LEDs reduce energy consumption, lower heat emissions, and extend lifespans, providing healthcare facilities with cost-effective and reliable illumination that meets industry standards. Upgrade to smarter lighting and make every moment count.",
    ],
    benefitsTitle: "Power Up Your Healthcare Facility with LED Savings",
    benefitsParagraph:
      "Upgrading to energy-efficient LED lighting in healthcare facilities can reduce operational costs by up to 25%, providing immediate savings on electricity bills. With an extended lifespan—lasting up to five times longer than conventional bulbs—LEDs drastically reduce maintenance and replacement costs. Furthermore, the improved illumination enhances the visibility and precision needed in medical settings, boosting operational efficiency. By adopting LED lighting, healthcare facilities can achieve a high-quality, cost-effective lighting solution that supports both the well-being of patients and the operational needs of staff.",
    challenges: [],
    solutions: [],
    features: [
      "Lighting built for critical care",
      "Safer, brighter medical spaces",
      "Lower costs, higher performance",
      "Comfort and precision combined",
    ],
    bgGradient: "linear-gradient(135deg, #06d6a0 0%, #00b4d8 100%)",
    accentColor: "#06d6a0",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/healthcare-facilities/healthcare-facilities.webp",
        alt: "Healthcare Facilities",
      },
      {
        src: "/main-assets/img/applications/healthcare-facilities/healthcare-facilities-2.webp",
        alt: "Healthcare Facilities",
      },
    ],
    expertCard: undefined,
  },
  "hotels-hospitality": {
    title: "Hotels & Hospitality",
    slug: "hotels-hospitality",
    icon: "ri-hotel-line",
    shortDesc:
      "LED hospitality lighting for lobbies, guest rooms, event halls, and spas—captivating ambiance, energy efficiency, and reliable performance for memorable guest experiences.",
    overviewTitle: "Set the Perfect Mood with LED Hospitality Lighting",
    overviewParagraphs: [
      "Creating an unforgettable guest experience begins with lighting that captivates. LED lighting transforms lobbies into grand, inviting spaces and guest rooms into serene, relaxing retreats. The flexibility of LED solutions lets you craft tailored atmospheres—from vibrant, dynamic event halls to soothing spas—enhancing comfort, style, and sophistication at every turn. Lighting isn't just functional; it's a defining part of the ambiance your guests will remember.",
      "Beyond aesthetics, LED lighting delivers operational excellence with energy-efficient performance that significantly lowers costs while providing exceptional brightness and reliability. Designed for longevity and minimal maintenance, these solutions reduce disruptions, allowing your team to focus on creating remarkable guest experiences. By upgrading to LEDs, you enhance the beauty and efficiency of your property, redefining luxury for a modern, eco-conscious world.",
    ],
    benefitsTitle: "Achieve 3x Longer Lifespan with LED Hospitality Lighting",
    benefitsParagraph:
      "Upgrading to LED lighting in hospitality venues offers an unbeatable advantage with a lifespan up to three times longer than traditional bulbs. This longevity translates into fewer replacements and lower maintenance costs, saving you both time and money. With LEDs, you won't just enjoy extended durability; you'll also enhance your guests' experience by providing consistent, high-quality lighting throughout your property. From lobby chandeliers to guest room lighting, LED fixtures ensure brilliant illumination, reduce the need for frequent upkeep, and contribute to a more sustainable, cost-efficient hotel operation. Choose LED lighting to create an inviting atmosphere and maximize long-term savings.",
    challenges: [],
    solutions: [],
    features: [
      "Perfect lighting for perfect stays",
      "Maximize hotel energy savings",
      "Lighting that enhances comfort",
      "Durable, stylish hotel lighting",
    ],
    bgGradient: "linear-gradient(135deg, #ffb703 0%, #fb8500 100%)",
    accentColor: "#fb8500",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/hotels-hospitality/hotels-hospitality-1.webp",
        alt: "Hotels & Hospitality",
      },
      {
        src: "/main-assets/img/applications/hotels-hospitality/hotels-hospitality-2.webp",
        alt: "Hotels & Hospitality",
      },
    ],
    expertCard: undefined,
  },
  "manufacturing-facilities": {
    title: "Manufacturing Facilities",
    slug: "manufacturing-facilities",
    icon: "ri-factory-line",
    shortDesc:
      "Advanced LED lighting for manufacturing facilities—clear, consistent illumination for assembly lines, storage areas, and high-traffic work zones.",
    overviewTitle: "LED Lighting Built for Tough Work Environments",
    overviewParagraphs: [
      "Lighting plays a pivotal role in ensuring safety, efficiency, and precision in manufacturing facilities. Our advanced LED lighting solutions are crafted to meet the unique demands of industrial environments, providing clear, consistent illumination that enhances focus and reduces errors. Whether it's lighting up assembly lines, storage areas, or high-traffic work zones, our LEDs create an environment optimized for productivity and performance.",
      "Built to withstand challenging conditions, our LED systems are durable, reliable, and designed for seamless operation in even the harshest settings. They minimize glare and eliminate flicker, ensuring a safer and more comfortable workspace for employees. By transitioning to modern LED lighting, manufacturing facilities can foster a brighter, more efficient, and highly functional environment tailored to the needs of today's industries.",
    ],
    benefitsTitle: "Cut Lighting Maintenance in Half with Advanced LED Technology",
    benefitsParagraph:
      "LED lighting in manufacturing facilities offers unmatched durability, reducing maintenance costs by up to 50%. With a significantly longer lifespan than traditional bulbs, LEDs minimize replacements and operational downtime, ensuring uninterrupted productivity. Built for tough industrial conditions, they provide consistent, high-quality illumination that enhances safety, precision, and energy efficiency on the floor. Transitioning to LED lighting is a smart, cost-effective move that supports long-term savings and seamless operations.",
    challenges: [],
    solutions: [],
    features: [
      "Engineered for industrial precision",
      "Long-lasting brightness guaranteed",
      "Energy savings for every shift",
      "Durable lighting for heavy use",
    ],
    bgGradient: "linear-gradient(135deg, #e63946 0%, #d62246 100%)",
    accentColor: "#e63946",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/manufacturing-facilities/manufacturing-facilities-1.webp",
        alt: "Manufacturing Facilities",
      },
      {
        src: "/main-assets/img/applications/manufacturing-facilities/manufacturing-facilities-2.webp",
        alt: "Manufacturing Facilities",
      },
    ],
    expertCard: undefined,
  },
  "municipal-infrastructure": {
    title: "Municipal & Infrastructure",
    slug: "municipal-infrastructure",
    icon: "ri-government-line",
    shortDesc:
      "LED lighting for municipal and infrastructure projects—streets, parks, and public spaces—with efficiency, reliability, and sustainability for safer, smarter cities.",
    overviewTitle: "Building Brighter Cities with Smarter Lighting",
    overviewParagraphs: [
      "LED lighting is transforming municipal and infrastructure projects by combining efficiency, reliability, and sustainability. Modern cities thrive on well-lit streets, parks, and public spaces that foster safety and connectivity. Our advanced LED solutions deliver consistent, high-quality illumination that reduces energy consumption while enhancing visibility across urban environments. From traffic lights to pedestrian pathways, smart lighting ensures every corner of your city is inviting and secure, meeting the needs of both residents and visitors.",
      "With unmatched durability and low maintenance requirements, our LED systems are built to handle the demands of public infrastructure. They significantly cut operational costs while supporting environmental initiatives through reduced energy use and lower carbon emissions. By choosing smarter lighting, municipalities can focus on what matters—building vibrant, future-ready communities where people can live, work, and thrive.",
    ],
    benefitsTitle: "Achieve Up to 35% Savings with Smarter Citywide LED Solutions",
    benefitsParagraph:
      "Switching to LED lighting for municipal and infrastructure projects can reduce energy consumption by up to 35%, offering significant savings for city budgets. These innovative solutions are designed for durability and efficiency, lasting up to five times longer than traditional lighting systems. With reduced maintenance needs and consistent brightness, LEDs enhance safety on streets, parks, and public spaces. Additionally, their superior energy efficiency helps cities lower their carbon footprint, contributing to a greener, more sustainable urban future. Invest in LED lighting to illuminate your city more efficiently while optimizing operational costs and environmental impact.",
    challenges: [],
    solutions: [],
    features: [
      "Smarter lighting for smarter cities",
      "Building greener cities with LEDs",
      "Lighting that powers communities",
      "Energy-efficient solutions for towns",
    ],
    bgGradient: "linear-gradient(135deg, #1d3557 0%, #457b9d 100%)",
    accentColor: "#1d3557",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/municipal-infrastructure/municipal-infrastructure-1.webp",
        alt: "Municipal & Infrastructure",
      },
      {
        src: "/main-assets/img/applications/municipal-infrastructure/municipal-infrastructure-2.webp",
        alt: "Municipal & Infrastructure",
      },
    ],
    expertCard: undefined,
  },
  "offices-corporate": {
    title: "Offices & Corporate",
    slug: "offices-corporate",
    icon: "ri-building-line",
    shortDesc:
      "LED lighting for offices and corporate spaces—bright, comfortable environments with consistent illumination, minimal glare, and energy efficiency.",
    overviewTitle: "Optimized Lighting for Productive Workspaces",
    overviewParagraphs: [
      "Effective lighting is a cornerstone of productivity and employee satisfaction in modern workplaces. Our state-of-the-art LED lighting solutions are designed to create bright, comfortable, and efficient office environments that inspire creativity and reduce fatigue. From boardrooms to open-plan spaces, our LED fixtures provide consistent illumination with minimal glare, ensuring clarity and focus for every task.",
      "Tailored to the needs of corporate settings, our energy-efficient solutions reduce electricity bills, extend lifespan, and support sustainability goals. Whether it's highlighting architectural features or ensuring ergonomic lighting for desks, we help transform offices into spaces that empower employees and leave a lasting impression on clients.",
    ],
    benefitsTitle: "Transform Workspaces with 50,000+ Hours LED Lifespan",
    benefitsParagraph:
      "Investing in LED lighting solutions for offices and corporate spaces ensures a dramatic upgrade in both efficiency and longevity. With an impressive lifespan exceeding 50,000 hours, LEDs eliminate frequent replacements, reducing maintenance disruptions and costs. This reliability creates a consistently well-lit environment, boosting employee productivity and enhancing focus. Whether it's illuminating conference rooms, open workspaces, or executive offices, LED fixtures provide optimal brightness with reduced energy consumption. Make the switch to LEDs and experience a workspace that thrives under cost-effective, sustainable, and high-quality lighting solutions built to last.",
    challenges: [],
    solutions: [],
    features: [
      "Brighter offices, smarter solutions",
      "Energy efficiency meets workplace design",
      "Glare-free illumination for focused work",
      "Sleek designs, superior performance",
    ],
    bgGradient: "linear-gradient(135deg, #4a4e69 0%, #22223b 100%)",
    accentColor: "#4a4e69",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/offices-corporate/offices-corporate.webp",
        alt: "Offices & Corporate",
      },
      {
        src: "/main-assets/img/applications/offices-corporate/offices-corporate-2.webp",
        alt: "Offices & Corporate",
      },
    ],
    expertCard: undefined,
  },
  "parking-lots-garages": {
    title: "Parking Lots & Garages",
    slug: "parking-lots-garages",
    icon: "ri-roadster-line",
    shortDesc:
      "LED lighting for parking lots and garages—bright, uniform illumination for safety, security, and a welcoming atmosphere day or night.",
    overviewTitle: "Power Up Parking Areas with Long-Lasting LED Lighting",
    overviewParagraphs: [
      "A well-lit parking lot or garage is essential for ensuring safety, security, and a welcoming atmosphere. LED lighting provides bright, uniform illumination that enhances visibility, reduces the risk of accidents, and helps deter crime. Designed for outdoor and high-demand environments, LEDs deliver reliable performance in all conditions, keeping your spaces accessible and secure at any time of day or night.",
      "In addition to enhancing safety, LED lighting offers long-lasting durability and consistent performance, significantly reducing the need for frequent replacements or maintenance. Their energy-efficient design makes them an environmentally friendly choice, providing dependable illumination that supports both operational efficiency and sustainability. Upgrade your parking facilities with LEDs for a brighter, safer, and more inviting experience.",
    ],
    benefitsTitle: "Achieve Five Times the Lifespan with LED Technology",
    benefitsParagraph:
      "LED lighting lasts up to five times longer than traditional fixtures, making it the perfect solution for parking lots and garages. This extended lifespan reduces the frequency and cost of bulb replacements, minimizing maintenance efforts and ensuring uninterrupted lighting performance. With LEDs, you get brighter, more reliable lighting that enhances visibility, security, and user experience in outdoor environments. The long-lasting nature of LEDs also helps lower overall maintenance costs, providing a sustainable and cost-effective solution that improves both safety and energy efficiency.",
    challenges: [],
    solutions: [],
    features: [
      "Lighting built for all weather",
      "Energy savings you can see",
      "Bright lights for secure nights",
      "Eco-friendly illumination",
    ],
    bgGradient: "linear-gradient(135deg, #2b2d42 0%, #8d99ae 100%)",
    accentColor: "#2b2d42",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/parking-lots-garages/parking-lots-garages.webp",
        alt: "Parking Lots & Garages",
      },
      {
        src: "/main-assets/img/applications/parking-lots-garages/parking-lots-garages-2.webp",
        alt: "Parking Lots & Garages",
      },
    ],
    expertCard: undefined,
  },
  "retail-stores": {
    title: "Retail Stores",
    slug: "retail-stores",
    icon: "ri-shopping-bag-line",
    shortDesc:
      "LED retail lighting—energy-efficient, vibrant illumination for product displays, checkout areas, and inviting shopping experiences that drive sales.",
    overviewTitle: "Illuminate Every Aisle with LED Retail Lighting",
    overviewParagraphs: [
      "LED lighting is revolutionizing retail spaces by blending energy efficiency, exceptional illumination, and modern aesthetics. Every aspect of a retail environment—from product displays to checkout counters—thrives under the vibrant, uniform light provided by LEDs. With optimized visibility and an inviting ambiance, shoppers are drawn to explore more, creating an engaging and enjoyable experience.",
      "Designed for long-term performance, LED lighting reduces energy consumption and maintenance costs, empowering retailers to focus on enhancing customer satisfaction. Whether lighting up bold window displays or creating a warm glow in fitting rooms, our solutions are tailored to meet the unique needs of retail stores. Elevate your space with sustainable, high-quality illumination that leaves a lasting impression on every customer.",
    ],
    benefitsTitle: "Boost Visibility and Sales with 25% Brighter LEDs",
    benefitsParagraph:
      "Studies show that brighter, high-quality lighting can increase customer dwell time and improve sales by spotlighting products more effectively. LED lights deliver up to 25% better illumination compared to traditional systems, ensuring your store stands out. Whether it's creating inviting displays or enhancing safety in parking areas, LEDs provide superior performance while consuming significantly less energy. Choose LEDs for brighter spaces that drive business growth.",
    challenges: [],
    solutions: [],
    features: [
      "Brighter stores, better sales",
      "Energy-efficient lighting that lasts",
      "Smart lighting for smarter stores",
      "LED lighting built for retail success",
    ],
    bgGradient: "linear-gradient(135deg, #ff007f 0%, #ea5501 100%)",
    accentColor: "#ea5501",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/retail-stores/retail-stores.webp",
        alt: "Retail Stores",
      },
      {
        src: "/main-assets/img/applications/retail-stores/retail-stores-2.webp",
        alt: "Retail Stores",
      },
    ],
    expertCard: undefined,
  },
  "sports-venues": {
    title: "Sports Venues",
    slug: "sports-venues",
    icon: "ri-football-line",
    shortDesc:
      "LED lighting for sports venues—stadiums and complexes—with exceptional brightness, uniform coverage, and reduced glare for athletes, fans, and broadcasts.",
    overviewTitle: "Game-Changing Lighting for Sports Facilities",
    overviewParagraphs: [
      "In sports, visibility can define victory. Our cutting-edge LED lighting solutions deliver exceptional brightness, uniform coverage, and reduced glare, ensuring every moment is clear for athletes and fans alike. Whether it's a massive stadium hosting thousands or a local sports complex, our energy-efficient LEDs outperform traditional lighting with superior illumination, lower power consumption, and extended lifespans. This means fewer interruptions, reduced maintenance, and a more reliable lighting experience that enhances the action on the field and in the stands.",
      "Designed for durability, reliability, and precision, our LEDs provide flicker-free performance essential for televised events and high-intensity games where every detail matters. By upgrading your sports venue with LED lighting, you're investing in advanced technology that guarantees safety, efficiency, and unforgettable experiences. Whether it's the roar of the crowd or the intensity of the game, our lighting solutions ensure that every moment shines brighter.",
    ],
    benefitsTitle: "Cut Energy Costs by Up to 45% with Advanced LED Sports Lighting",
    benefitsParagraph:
      "Switching to LED lighting in sports venues can slash energy usage by up to 45%, delivering significant savings without compromising performance. These energy-efficient systems last up to five times longer than traditional lighting, reducing the need for frequent maintenance and replacements. With vibrant, uniform illumination, LEDs ensure athletes, officials, and fans experience optimal visibility from every angle. Whether for high-stakes competitions or community events, LED lighting enhances the venue's ambiance while supporting sustainability with lower energy consumption and reduced carbon emissions.",
    challenges: [],
    solutions: [],
    features: [
      "Stadium brilliance redefined",
      "Energy savings for grand events",
      "Clear, consistent illumination",
      "Lights designed for every sport",
    ],
    bgGradient: "linear-gradient(135deg, #38b000 0%, #007200 100%)",
    accentColor: "#38b000",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/sports-venues/sports-venues.webp",
        alt: "Sports Venues",
      },
      {
        src: "/main-assets/img/applications/sports-venues/sports-venues-2.webp",
        alt: "Sports Venues",
      },
    ],
    expertCard: undefined,
  },
  "warehouses": {
    title: "Warehouses",
    slug: "warehouses",
    icon: "ri-stack-line",
    shortDesc:
      "LED warehouse lighting—precise aisle and workspace illumination for safety, productivity, energy savings, and long-lasting performance.",
    overviewTitle: "Lighting Designed for Peak Warehouse Performance",
    overviewParagraphs: [
      "Lighting plays a pivotal role in warehouse operations, influencing everything from employee productivity to operational safety. High-quality, strategically designed LED lighting ensures every aisle, rack, and workspace is illuminated with precision, minimizing errors and enhancing workflow efficiency. Bright, uniform lighting not only reduces accidents but also fosters a more organized and productive environment, critical for meeting the demands of modern warehousing.",
      "Our state-of-the-art LED solutions are tailored to the unique challenges of warehouses, offering superior energy efficiency, long-lasting performance, and significant cost savings. By upgrading to cutting-edge lighting, you'll not only optimize your facility's functionality but also reduce maintenance downtime and energy bills—empowering your business to achieve greater success while supporting sustainability initiatives.",
    ],
    benefitsTitle: "Cut Energy Costs by Up to 50% with Efficient Warehouse Lighting",
    benefitsParagraph:
      "Well-designed warehouse lighting can enhance productivity by up to 30%, creating a brighter, safer, and more efficient workspace. Our cutting-edge LED solutions ensure optimal visibility across every corner, reducing errors and streamlining operations. With energy-efficient fixtures that lower operating costs while providing unmatched brightness, your warehouse becomes a hub of precision and performance, driving both employee satisfaction and operational success.",
    challenges: [],
    solutions: [],
    features: [
      "Engineered for efficiency",
      "Enhance warehouse visibility",
      "Maximize energy savings",
      "Optimized for operations",
    ],
    bgGradient: "linear-gradient(135deg, #293241 0%, #3d5a80 100%)",
    accentColor: "#293241",
    statNumber: undefined,
    statLabel: undefined,
    industryFact: undefined,
    contactAddress: "245 East 17th Street, Paterson, NJ 07524",
    contactPhone: "+1 844-324-5726",
    contactEmail: "info@ramgeneralsupply.com",
    images: [
      {
        src: "/main-assets/img/applications/warehouses/warehouses.webp",
        alt: "Warehouses",
      },
      {
        src: "/main-assets/img/applications/warehouses/warehouses-2.webp",
        alt: "Warehouses",
      },
    ],
    expertCard: undefined,
  },
};

// Statically compile all 12 paths at build-time in Next.js
export async function generateStaticParams() {
  return Object.keys(applicationsData).map((slug) => ({
    slug: slug,
  }));
}

// Statically compile page meta description and titles
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = applicationsData[slug];
  if (!app) return {};
  return {
    title: `${app.title} | Commercial & Industrial LED Solutions`,
    description: app.shortDesc,
  };
}

export default async function ApplicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = applicationsData[slug];

  if (!app) {
    notFound();
  }

  return (
    <div style={{ overflow: "hidden" }} className="bg-white">
      {/* Breadcrumb section */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(234,85,1,0.55) 0%, rgba(21,22,28,0.75) 100%), url('/main-assets/img/bg/client-bg1-1.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">{app.title}</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">
                      <i className="ri-home-4-fill"></i> HOME
                    </Link>
                  </li>
                  <li>
                    <Link href="/applications">
                      APPLICATIONS
                    </Link>
                  </li>
                  <li className="active">{app.title.toUpperCase()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="space-top space-bottom">
        <div className="container">
          <div className="row gx-40">
            {/* Left Column: Overview or Challenges & Solutions */}
            <div className="col-xl-8 col-12">
              <div className="mb-40">
                {!app.overviewTitle && (
                <div 
                  className="w-20 h-20 flex items-center justify-center rounded-3xl mb-6 text-white text-4xl shadow-lg"
                  style={{ background: app.bgGradient }}
                >
                  <i className={app.icon}></i>
                </div>
                )}

                {app.overviewTitle ? (
                  <>
                    <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                      {app.overviewTitle}
                    </h2>
                    {app.overviewParagraphs?.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="font-body text-gray-600 text-lg leading-relaxed mb-6"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {app.images && app.images.length > 0 && (
                      <div className="row g-4 mb-40">
                        {app.images.map((image, idx) => (
                          <div
                            className={app.images!.length === 1 ? "col-12" : "col-md-6 col-12"}
                            key={idx}
                          >
                            <div
                              className="overflow-hidden rounded-3xl shadow-md h-100"
                              style={{ borderRadius: "16px" }}
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-100 h-100 object-cover"
                                style={{ minHeight: "220px", objectFit: "cover" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {app.benefitsTitle && (
                      <div className="mb-40">
                        <h3 className="font-title text-2xl font-bold text-gray-900 mb-4">
                          {app.benefitsTitle}
                        </h3>
                        {app.benefitsParagraph && (
                          <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                            {app.benefitsParagraph}
                          </p>
                        )}
                        <ul className="space-y-3 pl-0 list-none m-0">
                          {app.features.map((feature, idx) => (
                            <li className="flex items-start gap-3" key={idx}>
                              <i className="ri-checkbox-circle-fill text-emerald-500 text-xl shrink-0 mt-0.5"></i>
                              <span className="text-gray-700 font-body text-base leading-relaxed font-medium">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                <h2 className="font-title text-4xl font-bold text-gray-900 mb-4">
                  Lighting Challenges in {app.title}
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  {app.shortDesc}
                </p>

                <div className="mb-40">
                  <h3 className="font-title text-2xl font-bold text-red-600 mb-20 flex items-center gap-2">
                    <i className="ri-error-warning-line"></i> Industry Challenges
                  </h3>
                  <div className="space-y-4">
                    {app.challenges.map((challenge, idx) => (
                      <div className="p-4 bg-red-50/40 border border-red-100 rounded-2xl flex gap-3" style={{ borderRadius: "16px" }} key={idx}>
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                          !
                        </div>
                        <p className="text-gray-600 font-body text-sm leading-relaxed m-0">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-40">
                  <h3 className="font-title text-2xl font-bold text-emerald-600 mb-20 flex items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Our Custom LED Solutions
                  </h3>
                  <div className="space-y-4">
                    {app.solutions.map((solution, idx) => (
                      <div className="p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl flex gap-3" style={{ borderRadius: "16px" }} key={idx}>
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shrink-0 mt-0.5">
                          <i className="ri-check-line font-bold"></i>
                        </div>
                        <p className="text-gray-600 font-body text-sm leading-relaxed m-0 font-semibold">
                          {solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Sidebar, Checklist, Stats */}
            <div className="col-xl-4 col-12">
              <div className="space-y-6">
                {app.expertCard && (
                  <div
                    className="p-4 bg-white border rounded-3xl text-center"
                    style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}
                  >
                    <div
                      className="overflow-hidden rounded-2xl mb-4 mx-auto"
                      style={{ maxWidth: "200px", borderRadius: "12px" }}
                    >
                      <img
                        src={app.expertCard.imageSrc}
                        alt={app.expertCard.name}
                        className="w-100"
                        style={{ objectFit: "cover", aspectRatio: "1 / 1" }}
                      />
                    </div>
                    <h4 className="font-title text-lg font-bold text-gray-900 mb-1">
                      {app.expertCard.name}
                    </h4>
                    <p className="text-gray-500 font-body text-xs leading-relaxed m-0">
                      {app.expertCard.title}
                    </p>
                  </div>
                )}

                {/* Stat Display Box */}
                {app.statNumber && app.statLabel && (
                <div 
                  className="p-6 rounded-3xl text-white shadow-xl text-center flex flex-col justify-center items-center"
                  style={{ background: app.bgGradient, borderRadius: "24px" }}
                >
                  <span className="text-5xl font-extrabold font-title tracking-tight mb-2">
                    {app.statNumber}
                  </span>
                  <p className="text-sm font-medium opacity-90 m-0">
                    {app.statLabel}
                  </p>
                </div>
                )}

                {/* Industry Fact Card */}
                {app.industryFact && (
                <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-3xl" style={{ borderRadius: "24px" }}>
                  <h4 className="font-title text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-orange-500 text-xl"></i> Engineering Fact
                  </h4>
                  <p className="text-gray-600 font-body text-xs leading-relaxed m-0">
                    {app.industryFact}
                  </p>
                </div>
                )}

                {/* Key benefits / features (sidebar; hidden when listed in main column) */}
                {!app.overviewTitle && (
                <div className="p-6 bg-gray-50 border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i className="ri-equalizer-line text-orange-600"></i> Tech Specifications
                  </h4>
                  <ul className="space-y-3 pl-0 list-none m-0">
                    {app.features.map((feature, idx) => (
                      <li className="flex items-start gap-2" key={idx}>
                        <i className="ri-check-line text-emerald-500 text-lg shrink-0 mt-0.5"></i>
                        <span className="text-gray-600 font-body text-xs leading-relaxed font-semibold">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                )}

                {/* Sidebar Navigation */}
                <div className="p-6 bg-white border rounded-3xl" style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.05)" }}>
                  <h4 className="font-title text-xl font-bold text-gray-900 mb-4">
                    Other Sectors
                  </h4>
                  <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto pr-1">
                    {Object.values(applicationsData).map((a) => (
                      <Link 
                        key={a.slug} 
                        href={`/applications/${a.slug}`}
                        className={`p-3 rounded-xl flex items-center justify-between border transition-all duration-200 ${
                          a.slug === app.slug 
                            ? "bg-orange-50 border-orange-500 text-orange-600 font-bold" 
                            : "bg-white hover:bg-gray-50 border-gray-100 text-gray-700"
                        }`}
                        style={{ borderRadius: "12px" }}
                      >
                        <span className="flex items-center gap-3 text-xs">
                          <i className={`${a.icon} ${a.slug === app.slug ? "text-orange-600" : "text-gray-400"}`}></i>
                          {a.title}
                        </span>
                        <i className="ri-arrow-right-s-line text-lg"></i>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact / CTA card */}
                <div className="p-6 bg-gray-900 text-white rounded-3xl relative overflow-hidden" style={{ borderRadius: "24px" }}>
                  <div className="relative z-10">
                    <h4 className="font-title text-2xl font-bold mb-4">
                      {app.contactAddress ? "Contact With Us" : "Custom Mapping"}
                    </h4>
                    {app.contactAddress ? (
                      <ul className="space-y-4 pl-0 list-none m-0 mb-5 text-start">
                        <li>
                          <h5 className="text-sm font-bold text-white mb-1">Our Address</h5>
                          <p className="text-gray-300 text-xs m-0 leading-relaxed">{app.contactAddress}</p>
                        </li>
                        {app.contactPhone && (
                          <li>
                            <h5 className="text-sm font-bold text-white mb-1">Phone Number</h5>
                            <Link href={`tel:${app.contactPhone.replace(/\s/g, "")}`} className="text-gray-300 text-xs hover:text-white">
                              {app.contactPhone}
                            </Link>
                          </li>
                        )}
                        {app.contactEmail && (
                          <li>
                            <h5 className="text-sm font-bold text-white mb-1">Email Address</h5>
                            <Link href={`mailto:${app.contactEmail}`} className="text-gray-300 text-xs hover:text-white">
                              {app.contactEmail}
                            </Link>
                          </li>
                        )}
                      </ul>
                    ) : (
                    <p className="text-gray-300 text-xs mb-4">
                      Request custom photometric layout planning or structural mapping for your facilities today.
                    </p>
                    )}
                    <Link 
                      href="/contact" 
                      className="btn w-100 style3 text-center py-3 block text-white font-bold"
                      style={{ background: "var(--color-theme)", border: "none" }}
                    >
                      GET FREE QUOTE <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
