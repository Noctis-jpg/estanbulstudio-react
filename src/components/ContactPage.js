import React from 'react'
import  { Helmet } from "react-helmet";
import FormContact from "../components/section_components/FormContact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Maps from "../components/section_components/seciton_in_components/GoogleMap"
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const ContactPage = () => {
  return (
    <section className='PageContact'>
                  <Helmet>
        <title>İletişim</title>

      </Helmet>
      <section className="headerGorseli">  
  <div className="headerBaslik">
     <div className="container">
     </div>
  </div>
</section>
  <div className='container contactContainer'>
    <div className='row'>
      <div className='col-lg-12 pad-15'>
        <div className='HeadingPage'>
          <h1>İLETİŞİM</h1>
          <span>DAHA FAZLA BİLGİYE Mİ İHTİYACINIZ VAR? BİZE SOR!</span>
        </div>
      </div>
      <div className='col-lg-7 FormCapsul'>
        <FormContact />
      </div>
      <div className='col-lg-5 bgimage'>
        <div className='ContactRightMainCapsul'>
          <div className='Heading'>
            <h3>ESTANBUL STUDYO</h3>
            <span>TÜRKİYE</span>
          </div>
          <div className='Location'>
          <p className="FooterIcon">
                <FontAwesomeIcon icon={faLocationDot} />
                Seyrantepe, Nato Cd. No:15 Kat:5, 34418 Kâğıthane/İstanbul
              </p>
              <div className='Mail'>
              <p className="FooterIcon">
                <FontAwesomeIcon icon={faEnvelope} />
                info@estanbuladworks.com
              </p>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <div className='container-fluid'>
    <div className='Maps'>
<Maps />
    </div>
  </div>
  </section>

  )
}

export default ContactPage