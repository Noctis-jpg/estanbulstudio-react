import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import Slogan from "../components/section_components/Slogan.js";
import Counter from "../components/section_components/Counter.js";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";
 

const HomePage = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/home-page-main-sliders?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
 
  return (
    <section className="HomePage">
      <Helmet>
        <title>Anasayfa</title>
        <meta name="description" content="Anasayfa description" />
      </Helmet>
      <div className="verticalLine"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              autoplay={{
                delay: 10500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              className="HomeSlide"
              pagination={{ type: "fraction" }}
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
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
                <SwiperSlide
                  className="d-flex justify-content-center swiper-slide ymHomeslide"
                  key={item.id}
                >
                  <img
                    className="img-fluid myHomeSlideimg"
                    src={item.attributes.mainSlider.data[0].attributes.formats.large.url}
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
      <Counter />
    </section>
  );
};

export default HomePage;