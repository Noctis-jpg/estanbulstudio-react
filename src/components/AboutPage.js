import React from "react";
import useFetch from "../hooks/useFetch";
import AboutPageSlider from "./section_components/seciton_in_components/AboutPageSlider";
import { Helmet } from "react-helmet";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import Button from "./globamcomponents/Button";

const AboutPage = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/about-page-slogan-area?populate=*"
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
            <AboutPageSlider></AboutPageSlider>
          </div>

        </div>
      </div>
      <div className="container">
      <div className="row rowym">
      <div className="col-lg-6 col-12">
        <div className="AboutPageimg" key={data.id}>
            <img className="img-fluid" src={data.data.attributes.Aboutpageimg.data.attributes.url}></img>
        </div>
      </div>
      <div className="col-lg-6 col-12 middle">
      <div key={data.id} className="OtherPageSloganArea">
              <h1>{data.data.attributes.AboutPageSlogan}</h1>
            </div>
            <div key={data.id} className="TextArea">
            <p dangerouslySetInnerHTML={{ __html: data.data.attributes.AboutPageTextArea.replace(/"/g, '') }}></p>
       
            </div>
            <Button
        onClick={() => {
          // onClick işlemini burada tanımlayabilirsiniz
          // İletişim sayfasına yönlendirmek için uygun kodu buraya ekleyin
          window.location.href = '/iletisim';
        }}
        className="colorYellowbtn text-white font-bold py-2 px-4 rounded"
        text="Hızlı İletişim"
      />
          </div>
      </div>
      </div>
    </section>
  );
};

export default AboutPage;
