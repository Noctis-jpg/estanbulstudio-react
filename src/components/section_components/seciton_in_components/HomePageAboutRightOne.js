import React from "react";
import useFetch from "../../../hooks/useFetch";

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
          <img
            className="image"
            src={item.attributes.rightPicture.data.attributes.url}
            alt=""
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
