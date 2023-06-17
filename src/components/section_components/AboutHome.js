import React from 'react';
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import Bizkimiz from './seciton_in_components/BizKimis';
import HomePageAboutRightOne from '../section_components/seciton_in_components/HomePageAboutRightOne';
import HomePageAboutRightTwo from '../section_components/seciton_in_components/HomePageAboutRighTwo';
import ReactPlayer from "react-player";

const locabase = "https://strapi-app-angd.onrender.com/";

const AboutHome = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/about-homes?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  SwiperCore.use([Autoplay]);

  return (
    <div id='targetElement' className="AboutHome">
      <div className='container'>
        <div className="row">
        < Bizkimiz/>
          <div className="col-lg-6 pad-0">
          {data.data.map((item) => (
            <div className="LeftPicture Global"  key={item.id}>
     
                <div
                  className="LeftPictureSlide GlobalPictureSlide"
                 
                >
                  {/* <Link to={item.attributes.LeftPictureLink}> */}
                  <ReactPlayer
                    className="react-player"
                    url={item.attributes.LeftPicture.data.attributes.url}
                    width="100%"
                    height="100%"
                    loop={true}
                    playing={true}
                    controls={true}
                  />
                  {/* </Link> */}

                </div>
                                  <div className="LeftHeading">
                                  <h2>{item.attributes.LeftPictureHead}</h2>
                                  <p>{item.attributes.LeftPictureText}</p>
                                </div>
       
            </div>
                   ))}
          </div>
          <div className="col-lg-6 pad-0">
            <div className="RightTwoPicture Global">
              <HomePageAboutRightOne />
            </div>
            <div className="RightTwoPicture2 Global">
              <HomePageAboutRightTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
