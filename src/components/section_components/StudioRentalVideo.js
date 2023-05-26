import React from 'react'
import ReactPlayer from "react-player";
import useFetch from "../../hooks/useFetch"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation  } from "swiper";
import "swiper/css/pagination";
const locabase = "http://localhost:1337";

const StudioRentalVideo = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapi-app-angd.onrender.com/api/rental-page-video-areas?populate=*"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
    <React.Fragment>
      <Swiper
            autoplay={{
                delay: 20500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              className="RentalPageVideoSlide"
              modules={[Pagination,Navigation]}
              navigation={true} // Navigation özelliğini true olarak ayarlayın
              spaceBetween={30}
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
<SwiperSlide className="d-flex justify-content-center swiper-slide ymHomeslide"
                  key={item.id}>             
<div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={item.attributes.videoarea.data.attributes.url}
          width="100%"
          height="100%"
          controls
        />
        <div className="LayerVideo"></div>

      </div>
      </SwiperSlide>
       ))}
      </Swiper>
    </React.Fragment>
  )
}

export default StudioRentalVideo