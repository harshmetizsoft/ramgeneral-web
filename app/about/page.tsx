import AboutThree from "~/sections/about_page/AboutThree";
import Breadcumb from "~/sections/about_page/Breadcumb";
import ClientThree from "~/sections/about_page/ClientThree";
import ProcessThree from "~/sections/about_page/ProcessThree";
import TeamThree from "~/sections/about_page/TeamThree/TeamThree";
import WhyChooseThree from "~/sections/about_page/WhyChooseThree";
import CounterThree from "~/sections/shared/Counter/CounterThree";
import TestimonialThree from "~/sections/shared/Testimonial/TestimonialThree";
import Scroll from "~/sections/shared/Scroll";
import Portfolio from "~/sections/home/Portfolio-Home-1";
export default function AboutPage() {
  return (
    <>
            <Breadcumb />
      <AboutThree />
      <WhyChooseThree />
      <ProcessThree />
      <Portfolio />
      <CounterThree />
      <TestimonialThree />
      <TeamThree />
      <ClientThree />
            <Scroll />
    </>
  );
}



