import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faMap, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const FooterContact = () => {
  return (
    <div className="box">
        <h3>Información de Contacto</h3>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faPhone} />
          +591 
        </a>
        <a className="links" href="#">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          info@regalosterrakota.com
        </a>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faMap} />
          La Paz, BOLIVIA
        </a>
        
        <div className="share">
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faFacebookF} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faTwitter} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faLinkedin} />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon className="iconS" icon={faWhatsapp} />{" "}
          </a>
        </div>

      </div>
  )
}
