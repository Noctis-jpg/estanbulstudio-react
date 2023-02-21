import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from "../hooks/useFetch";
const HomePage = () => {

  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/home-page-main-sliders"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  console.log(data);
  return (
    <section className='HomePage'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
          <Swiper
      spaceBetween={10}
      slidesPerView={1}

      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.data.map((item) => (
     
      <SwiperSlide key={item.id}><img className='img-fluid' src={item.attributes.Mainsliderlink}></img></SwiperSlide>

      ))}
    </Swiper>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default HomePage