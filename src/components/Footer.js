import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from '../hooks/useFetch';
import Whatsapp from '../components/section_components/seciton_in_components/rental_list_items/WhatsappBtn';
import Tel from '../components/section_components/seciton_in_components/rental_list_items/TelBtn';
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
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/footer"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
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
              <h3 className="HeadingFooter" key={data.id}>{data.data.attributes.SolUstBaslik}</h3>
              <p className="FooterText" key={data.id}>
              {data.data.attributes.SolUstYazi}
              </p>
              <h3 className="HeadingFooter" key={data.id}>  {data.data.attributes.SolAltBaslik}</h3>
              <p className="FooterText" key={data.id}> {data.data.attributes.SolAltYazi} </p>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div className="col-lg-4 pad0">
            <div className="RigthFooter">
              <h3 className="HeadingFooterRight" key={data.id}>{data.data.attributes.SagUstBaslik}</h3>
              <h5 className="CompanyFooter" key={data.id}>{data.data.attributes.SagUstBaslikiki}</h5>
              <p className="FooterIcon" key={data.id}>
                <FontAwesomeIcon icon={faLocationDot} />
                {data.data.attributes.Konum}
              </p>
              <p className="FooterIcon" key={data.id}>
                <FontAwesomeIcon icon={faEnvelope} />
                {data.data.attributes.Mail}
              </p>
              <p className="FooterIcon" key={data.id}>
                <FontAwesomeIcon icon={faPhone} />
                {data.data.attributes.Tel}
              </p>
              <p className="FooterIcon" key={data.id}>
                <FontAwesomeIcon icon={faWhatsapp} />
                {data.data.attributes.Whatsapp}
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
      <Whatsapp />
      <Tel />
    </section>
  );
};

export default Footer;
