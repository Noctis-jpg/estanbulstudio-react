import React from "react";
import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
const ServicesSection = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/card-serviss"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  SwiperCore.use([Autoplay]);
  console.log(data);
  return (
    <div className="container-fluid servicesSection">
      {/* <div className='verticalLine'></div> */}
      <div className="row">
      <div className="col-lg-12">
      <Swiper 
                     autoplay={{
                       delay: 10500,
                       pauseOnMouseEnter: true,
                       disableOnInteraction: false
                     }}
              className="ServisSlide"
              pagination={{          type: "fraction",
              }}
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={4}
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
   
                  slidesPerView: 2,
                },
                1200: {
   
                  slidesPerView: 3,
                },
                1500: {

                  slidesPerView: 3,
                },

                1600: {

                  slidesPerView: 4,
                },

              }}
            
            >
              {data.data.map((item) => (
       
                <SwiperSlide className="d-flex justify-content-center swiper-slide " key={item.id}>
                           <Link to ={item.attributes.CardUrl}>
                   <Card>
            <Card.Img
              className="ymServicesimg1"
              variant="top"
              src={item.attributes.imageUrl}
            />
            <Card.Body>
              <Card.Title>{item.attributes.CardHead}</Card.Title>
              <Card.Text>
              {item.attributes.CardText}
              </Card.Text>

            </Card.Body>
          </Card>
          </Link>
                </SwiperSlide>
       
                
              ))}



            </Swiper>
      </div>
      </div>
    </div>
  );
};

export default ServicesSection;
