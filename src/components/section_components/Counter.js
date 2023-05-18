import React from "react";
import useFetch from "../../hooks/useFetch";
import AboutTextHead from "../../components/section_components/AboutTextHead";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import CounterHook from "../../hooks/CounterHook"
const Counter = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/abouts"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
  console.log(data);
  return (
    <div className="container-fluid ymBefore">
      <div className="row CounterHome">
        <div className="col-lg-12 col-12">
          <AboutTextHead></AboutTextHead>
        </div>
        <Swiper
          autoplay={{
            delay: 10500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="AboutSlide"
          pagination={{ type: "fraction" }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={4}
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
            1200: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 3,
            },

            1600: {
              slidesPerView: 3,
            },
          }}
        >
          {data.data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mt-4 col-12">
                <div className="IconBox">
                  <div className="IconImg">
                    <img
                      className="img-fluid"
                      src={item.attributes.IconLink}
                    ></img>
                  </div>
                  <div className="Number">
                  <CounterHook targetNumber={item.attributes.Number} />
                   
                  </div>
                  <div className="NumberText">
            
                     {/* <p>{item.attributes.NumberText}</p>  */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Counter;
