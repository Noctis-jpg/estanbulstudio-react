import React from "react";
import useFetch from "../../../hooks/useFetch";
import Button from "../../globamcomponents/Button";

const VideoPlayerText = () => {
  const { isLoading, error, data } = useFetch(
    "http://37.148.211.78:1337/api/footer-top-video?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  const handleClick = () => {
    // Handle button click logic here
    // For example, you can navigate to the URL using window.location.href
    window.location.href = data.data.attributes.ButtonUrl;
  };

  return (
    <div className="Contact">
      <div className="Text" key={data.id}>
        <h1>{data.data.attributes.VideoText}</h1>
      </div>
      <div className="ButtonDiv">
        <Button
          onClick={handleClick}
          text={data.data.attributes.ButtonText}
          className="ymButton"
        />
      </div>
    </div>
  );
};

export default VideoPlayerText;
