import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import Slogan from "../components/section_components/Slogan.js";
import Services from "../components/section_components/ServicesSection.js";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css/pagination";
const HomePage = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/home-page-main-sliders",
    "http://localhost:1337/api/slide-alti-slogans"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
  console.log(data);
  return (
    <section className="HomePage">
    <div className="verticalLine"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Swiper 
                     autoplay={{
                       delay: 10500,
                       pauseOnMouseEnter: true,
                       disableOnInteraction: false
                     }}
              className="HomeSlide"
              pagination={{          type: "fraction",
              }}
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              grabCursor ={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 640px
                640: {
    
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
   
                  slidesPerView: 2,
                },
                1500: {

                  slidesPerView: 3,
                },

              }}
            
            >
              {data.data.map((item) => (
                <SwiperSlide className="d-flex justify-content-center swiper-slide ymHomeslide" key={item.id}>
                  <img
                    className="img-fluid myHomeSlideimg"
                    src={item.attributes.Mainsliderlink}
                  ></img>
                                <h1 className="PictureText">{item.attributes.SlideText}</h1>
                                <div className="Slidelayer"></div>
                </SwiperSlide>
                
              ))}



            </Swiper>
          </div>
        </div>
      </div>
      <Slogan />
      <Services />
    </section>
  );
};

export default HomePage;
