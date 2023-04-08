import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <section className="FooterNew">
      <div className="container">
        <div className="verticalLine"></div>
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center">
             <div className="estanbulimg">
              <img width="40%" className="img-fluid" src="http://localhost:1337/uploads/Estanbul_Studyo_4a55841c70.png?updated_at=2023-03-23T22:14:35.455Z"></img>
            </div> 
          </div>
          <div className="col-lg-4 pad0">
            <div className="FooterMain">
              <h3 className="HeadingFooter">Lorem Ipsum</h3>
              <p className="FooterText">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
                architecto at. A earum architecto at
              </p>
              <h3 className="HeadingFooter">Lorem Ipsum</h3>
              <p className="FooterText"> Lorem ipsum dolor </p>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div className="col-lg-4 pad0">
            <div className="RigthFooter">
              <h3 className="HeadingFooterRight">Bizimle iletişime geçin.</h3>
              <h5 className="CompanyFooter">EstanbulStudyo</h5>
              <p className="FooterIcon">
                <FontAwesomeIcon icon={faLocationDot} />
                Seyrantepe, Nato Cd. No:15 Kat:5, 34418 Kâğıthane/İstanbul
              </p>
              <p className="FooterIcon">
                <FontAwesomeIcon icon={faEnvelope} />
                info@estanbuladworks.com
              </p>
              <p className="FooterIcon">
                <FontAwesomeIcon icon={faPhone} />
                0553 294 61 51
              </p>
              <p className="FooterIcon">
                <FontAwesomeIcon icon={faWhatsapp} />
                +90 555 565 66 72
              </p>
            </div>
          </div>
          </div>
          <div className="Line"></div>
          <div className="row beforeLine">
     
          <div className="col-lg-6 copyLeft">
          <div className="CopyrightLeft">
            <ul>
              <li>KVKK Politikası
</li>
              <li>KVKK Aydınlatma Metni
</li>
              <li>Veri Sahibi Başvurusu
</li>

            </ul>
          </div>
          </div>

          <div className="col-lg-6 copyRight">
          <div className="CopyrightRight">
            <span><b>© 2023 Estanbulstudyo. All rights reserved.</b></span>
          </div>
          </div>
          </div>
    
      </div>
    </section>
  );
};

export default Footer;
