import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";

const locabase = "http://localhost:1337";

const StudyoRentalSlider = () => {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/studyo-rental-carousels?populate=*"
        
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
      SwiperCore.use([Autoplay]);
  return (
    <div className="HeroRental">
                    <Swiper
              autoplay={{
                delay: 10500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              className="OtherPageSlide"
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
                  slidesPerView: 1,
                },
                1500: {
                  slidesPerView: 3,
                },
              }}

              
            >
              {data.data.map((item) => (
                
                <SwiperSlide
                  className="d-flex justify-content-center swiper-slide ymOtherPageSlide"
                  key={item.id}
                >
                  <img
                    className="img-fluid RentalSlide"
                    src={locabase + item.attributes.RentalCarousel.data[0].attributes.url}
                    
                    
                  ></img>
             
                </SwiperSlide>
              ))}
            </Swiper>
    </div>
  )

}

export default StudyoRentalSlider