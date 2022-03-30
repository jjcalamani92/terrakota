import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HeadingTertiary } from "../../layouts/heading/HeadingLayouts";
import { ContactForm } from "./ContactForm"
import { ContactIcons } from './ContactIcons';
import { ContactImage } from "./ContactImage";
import { ContactMap } from "./ContactMap";

export const ContactComponent = () => {
    return (
        <section className="contact">
            <ContactIcons/>
            <HeadingTertiary title="Nuestras sucursales"/>
            <div className="sucursales" >
                <ContactMap/>
                <ContactImage/>
            </div>
        </section>
    )
}