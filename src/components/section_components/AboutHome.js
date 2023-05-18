import React from 'react'
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HomePageAboutRightOne from  '../section_components/seciton_in_components/HomePageAboutRightOne';
import HomePageAboutRightTwo from  '../section_components/seciton_in_components/HomePageAboutRighTwo';
const locabase = "http://localhost:1337";

const AboutHome = () => {

  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/about-homes?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
  console.log(data);

  return (
    <div id='targetElement' className="AboutHome">
        <div className='container'>
    <div className="row">
      <div className="col-lg-6 pad-0">
        <div className="LeftPicture Global">
        <Swiper 
         autoplay={{
          delay: 10500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
 className="LeftPictureSlide"
 pagination={{          type: "fraction",
 }}
 modules={[Pagination]}
 spaceBetween={30}
 slidesPerView={1}
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
       
       <SwiperSlide className="LeftPictureSlide GlobalPictureSlide" key={item.id}>
        <img className="img-fluid Ust" src={locabase + item.attributes.LeftPicture.data[0].attributes.url}></img>

          <div className='LeftHeading'>
            <h2>{item.attributes.LeftPictureHead}</h2>
            <p>{item.attributes.LeftPictureText}</p>
          </div>
          </SwiperSlide>
             ))}
             </Swiper>
        </div>
      </div>
      <div className="col-lg-6 pad-0">
        <div className="RightTwoPicture Global">
<HomePageAboutRightOne></HomePageAboutRightOne>
        </div>
        <div className='RightTwoPicture2 Global'>
  <HomePageAboutRightTwo></HomePageAboutRightTwo>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}

export default AboutHome