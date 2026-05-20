import BreadcumbSix from "~/sections/shared/Contact/BreadcumbSix";
import ContactArea from "~/sections/shared/Contact/ContactArea";
import ContactAreaTwo from "~/sections/shared/Contact/ContactAreaTwo";
import ContactMap from "~/sections/shared/Contact/ContactMap";
import Scroll from "~/sections/shared/Scroll";
export default function ContactPage() {
  return (
    <div style={{overflow: "hidden"}}>
            <BreadcumbSix />
      <ContactArea />
      <ContactAreaTwo />
      <ContactMap />
            <Scroll />
    </div>
  );
}



