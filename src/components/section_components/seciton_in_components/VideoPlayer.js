import React from "react";
import ReactPlayer from "react-player";
import useFetch from "../../../hooks/useFetch";
import VideoPlayerText from "./VideoPlayerText";
const locabase = "http://localhost:1337";
const VideoPlayer = () => {
  const { isLoading, error, data } = useFetch(
    "http://37.148.211.78:1337/api/footer-top-video?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  return (
    <div>
      <div className="player-wrapper" key={data.id}>
        <ReactPlayer
          className="react-player"
          url={data.data.attributes.VideoorPhoto.data.attributes.url}
          width="100%"
          height="100%"
          loop={true}
          muted={true}
          playing={true}
        />
        <div className="LayerVideo"></div>
        <VideoPlayerText />
      </div>
    </div>
  );
};

export default VideoPlayer;
