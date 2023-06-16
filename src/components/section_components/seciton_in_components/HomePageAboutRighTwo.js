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
    <div className="RightThreePicture">
      {data.data.map((item) => (
        <div
          className="RightThreePictureSlide GlobalPictureSlide"
          key={item.id}
        >
          <ReactPlayer
            className="video-player"
            url={item.attributes.RightPicture2.data.attributes.url}
            controls={true}
            width="100%"
            height="auto"
          />
          <div className="LeftHeading">
            <h2>{item.attributes.RightPictureHead2}</h2>
            <p>{item.attributes.RightPictureText2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageAboutRightOne;
