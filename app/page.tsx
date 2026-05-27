import About from "~/sections/home/About";
import CTA from "~/sections/home/CTA";
import Client from "~/sections/home/Client";
import Contact from "~/sections/home/Contact";
import Counter from "~/sections/home/Counter";
import Hero from "~/sections/home/Hero";
import Portfolio from "~/sections/home/Portfolio";
import Process from "~/sections/home/Process";
import Testimonial from "~/sections/home/Testimonial";
import WhyChoose from "~/sections/home/WhyChoose";
import Scroll from "~/sections/shared/Scroll";

export default function HomePage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Hero />
            <About />
            <WhyChoose />
            <Process />
            <Portfolio />
            <Counter />
            <Contact />
            <Testimonial />
            <Client />
            <CTA />
            <Scroll />
        </div>
    );
}
