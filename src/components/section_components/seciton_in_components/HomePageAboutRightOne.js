import React from "react";
import useFetch from "../../../hooks/useFetch";
import ReactPlayer from "react-player";

const locabase = "https://strapi-app-angd.onrender.com/";

const HomePageAboutRightOne = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/about-homes?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  console.log(data);

  return (
    <div className="RightTwoPicture">
      {data.data.map((item) => (
        <div
          className="RightTwoPictureSlide GlobalPictureSlide"
          key={item.id}
        >
          <ReactPlayer
            className="video-player"
            url={item.attributes.rightPicture.data.attributes.url}
            width="100%"
            height="auto"
            loop={true}
            playing={true}
            controls={true}
          />
          <div className="LeftHeading">
            <h2>{item.attributes.RightPictureHead}</h2>
            <p>{item.attributes.RightPictureText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageAboutRightOne;
