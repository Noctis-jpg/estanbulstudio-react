import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const locabase = "https://strapi-app-angd.onrender.com/";

const AboutPageSlider = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapproject.net/api/about-page-carousels?populate=*"
        
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
      SwiperCore.use([Autoplay]);
  return (
    <div>
                    <Swiper navigation={true} modules={[Navigation]}
              autoplay={{
                delay: 10500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              className="OtherPageSlide"
              pagination={{ type: "fraction" }}
              modules={[Pagination, Navigation]}
              spaceBetween={10}
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
                1500: {
                  slidesPerView: 1,
                },
              }}

              
            >
              {data.data.map((item) => (
                
                <SwiperSlide
                  className="d-flex justify-content-center swiper-slide ymOtherPageSlide"
                  key={item.id}
                >
                  <img
                    className="img-fluid myHomeSlideimg"
                    src={item.attributes.AboutCarousel.data[0].attributes.url}
                    
                    
                  ></img>
             
                </SwiperSlide>
              ))}
            </Swiper>
    </div>
  )

}

export default AboutPageSlider