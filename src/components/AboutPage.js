import React from "react";
import AboutSection from "./section_components/AboutSection";
import { Helmet } from "react-helmet";
const AboutPage = () => {
  return (
    <section className="PageContact">
      <Helmet>
        <title>Hakkımızda</title>
      </Helmet>
      <section className="headerGorseli">  
  <div className="headerBaslik">
     <div className="container">
     <h1>HAKKINDA</h1>
     </div>
  </div>
</section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
    <AboutSection></AboutSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
