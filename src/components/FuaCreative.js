import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";
import TabsHeader from "../components/section_components/tabsHeader";
import 'react-tabs/style/react-tabs.css';
import ReactPlayer from "react-player";
import ModalVideo from "react-modal-video";
import 'react-modal-video/scss/modal-video.scss';

const locabase = "http://localhost:1337";

const FuaCreative = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/tabs-estanbuls?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  const openModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideoUrl("");
    setModalOpen(false);
  };

  return (
    <section className="PageCreative">
      <Helmet>
        <title>Backstage</title>
      </Helmet>
      <section className="headerGorseli">
        <div className="headerBaslik">
          <div className="container">
            <h1>BACKSTAGE</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="TabsButtonContent">
          <TabsHeader
            setSelectedTabIndex={setSelectedTabIndex}
            selectedTabIndex={selectedTabIndex}
          />
        </div>
        {data.data.map((item, index) => (
          <div
            className="row"
            style={{
              display: selectedTabIndex === index ? "flex" : "none",
            }}
            key={item.id}
          >
            {item.attributes.myTabsContentimg.data.map((img) => (
              <div className="col-lg-3 col-6 my-class" key={img.id}>
                <img
                  className="img-fluid myHomeSlideimg"
                  src={locabase + img.attributes.url}
                  alt={item.attributes.Baslik}
                />
                <h2>{item.attributes.Baslik}</h2>
              </div>
            ))}
            {item.attributes.VideoAreaTabs &&
              item.attributes.VideoAreaTabs.data &&
              item.attributes.VideoAreaTabs.data.map((video) => {
                const videoUrl = locabase + video.attributes.url;
                return (
                  <div
                    className="col-lg-3 col-6 my-class"
                    key={video.id}
                    onClick={() => openModal(videoUrl)}
                  >
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url={videoUrl}
                        width="100%"
                        height="100%"
                        loop={false}
                        muted={false}
                        playing={false}
                      />
                      <div className="LayerVideo"></div>
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
        <ModalVideo
          channel="custom"
          isOpen={modalOpen}
          url={currentVideoUrl}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default FuaCreative;