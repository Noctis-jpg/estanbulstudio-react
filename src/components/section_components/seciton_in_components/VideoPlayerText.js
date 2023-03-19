import React from "react";
import useFetch from "../../../hooks/useFetch";
import Button from "../../globamcomponents/Button"

const VideoPlayerText = () => {

    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/footer-top-video?populate=*"
      );

      const GoContactClick = '${data.data.attributes.ButtonUrl}';
const Click = `{data.data.attributes.ButtonUrl}`;
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
    <div className="Contact">
        <div className="Text" key={data.id}>
            <h1>{data.data.attributes.VideoText}</h1>            
        </div>
        <div className="ButtonDiv">
            <Button 
                onClick={GoContactClick}
                text={data.data.attributes.ButtonText}
                className="ymButton"
                Click={Click}
            />
        </div>
    </div>
  )
}

export default VideoPlayerText