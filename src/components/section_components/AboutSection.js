import React from "react";
import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";


const AboutSection = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapi-app-angd.onrender.com/api/abouts"
  );
  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
  console.log(data);
  return (
    <div className="container-fluid AboutSection">
      <div className="row">
        <div className="col-lg-6">
          <Swiper
            autoplay={{
              delay: 10500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            className="AboutSlide"
            pagination={{ type: "fraction" }}
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
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
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
              1500: {
                slidesPerView: 1,
              },

              1600: {
                slidesPerView: 1,
              },
            }}
          >
            {data.data.map((item) => ( 
              <SwiperSlide key={item.id}>
<img src={item.attributes.AboutSlide} />

              </SwiperSlide>
             ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
