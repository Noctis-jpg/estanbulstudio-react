import React from "react";
import useFetch from "../../hooks/useFetch";
import VideoPlayer from "../section_components/seciton_in_components/VideoPlayer";
const FooterTopVideo = () => {

  // const { isLoading, error, data } = useFetch(
  //   "http://localhost:1337/api/about-text-heads"
  // );

  // if (isLoading) return <h1>Yükleniyor...</h1>;
  // if (error) return <h1>Hata: {error.message}</h1>;


  return (
    <section className="FooterTop">
      <div className="container-fluid pad-0">
        <VideoPlayer></VideoPlayer>
      </div>
    </section>
  )
}

export default FooterTopVideo