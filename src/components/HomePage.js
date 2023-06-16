import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import AboutHome from "../components/section_components/AboutHome";
import Slogan from "../components/section_components/Slogan.js";
import Counter from "../components/section_components/Counter.js";
import FooterTopVideo from "../components/section_components/FooterTopVideo";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";
import ScrollButton from '../components/section_components/seciton_in_components/ScrollButton';
import "swiper/css/navigation";
import { Navigation } from "swiper";

const locabase = "http://localhost:1337";


const HomePage = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/home-page-main-sliders?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
 
  return (
    <div>
    <section className="HomePage"> 
      <Helmet>
        <title>Anasayfa</title>
        <meta name="description" content="Anasayfa description" />
      </Helmet>
      <div className="verticalLine"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 ymRelative">
            <Swiper navigation={true} modules={[Navigation]}
              autoplay={{
                delay: 10500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              className="HomeSlide"
              pagination={{ type: "fraction" }}
              modules={[Pagination, Navigation]}
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
                <SwiperSlide
                  className="d-flex justify-content-center swiper-slide ymHomeslide"
                  key={item.id}
                >
                  <img
                    className="img-fluid myHomeSlideimg"
                    src={item.attributes.mainSlider.data[0].attributes.url}
                  ></img>
                  <h1 className="PictureText">{item.attributes.SlideText}</h1>
                  <div className="Slidelayer"></div>
                </SwiperSlide>
              ))}
            </Swiper>
            <ScrollButton />
          </div>
        </div>
      </div>
      <AboutHome />
      <Slogan />
 
    </section>
    <Counter />

    <FooterTopVideo />            

    </div>
  );
};
console.log(locabase)
export default HomePage;
