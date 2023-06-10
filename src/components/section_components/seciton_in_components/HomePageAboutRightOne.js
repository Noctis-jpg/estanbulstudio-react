import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

const locabase = "https://strapi-app-angd.onrender.com/";
const HomePageAboutRightOne = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/about-homes?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
  console.log(data);

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 10500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="RightTwoPicture"
        pagination={{ type: "fraction" }}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={2}
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
          <SwiperSlide className="RightTwoPictureSlide GlobalPictureSlide" key={item.id}>
            <img
              className="img-fluid Ust"
              src={
                item.attributes.rightPicture.data[0].attributes.url
              }
            ></img>
            <div className="LeftHeading">
              <h2>{item.attributes.RightPictureHead}</h2>
              <p>{item.attributes.RightPictureText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageAboutRightOne;
