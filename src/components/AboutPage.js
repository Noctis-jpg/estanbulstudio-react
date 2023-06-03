import React from "react";
import useFetch from "../hooks/useFetch";
import AboutPageSlider from "./section_components/seciton_in_components/AboutPageSlider";
import { Helmet } from "react-helmet";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";

const AboutPage = () => {
  const { isLoading, error, data } = useFetch(
    "http://37.148.211.78:1337/api/about-page-slogan-area"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  return (
    <section className="PageContact OtherPage O_sH">
      <Helmet>
        <title>Hakkımızda</title>
      </Helmet>
      <div className="container-fluid padrl">
        <div className="row">
          <div className="col-lg-12">
            <div key={data.id} className="OtherPageSloganArea">
              <h1>{data.data.attributes.AboutPageSlogan}</h1>
            </div>
          </div>

          <div className="col-lg-12">
            <AboutPageSlider></AboutPageSlider>
          </div>

        </div>
      </div>
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
            <div key={data.id} className="TextArea">
            <p dangerouslySetInnerHTML={{ __html: data.data.attributes.AboutPageTextArea.replace(/"/g, '') }}></p>
       
            </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default AboutPage;
