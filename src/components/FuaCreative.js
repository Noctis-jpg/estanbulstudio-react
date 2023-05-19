import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";
import TabsHeader from "../components/section_components/tabsHeader";
import "react-tabs/style/react-tabs.css";
import ReactPlayer from "react-player";
import { Modal, Button } from "react-bootstrap";
import ModalImage from "react-modal-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
const locabase = "http://localhost:1337";

const FuaCreative = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/tabs-estanbuls?populate=*"
  );

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (data && data.data && data.data[selectedTabIndex]) {
      setImagesLoaded(true);
    }
  }, [data, selectedTabIndex]);

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  const openModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setCurrentVideoUrl("");
    setShowModal(false);
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setLightboxOpen(false);
  };

  const images = data.data[selectedTabIndex].attributes.myTabsContentimg.data.map(
    (img) => {
      if (img.attributes.url) {
        return {
          original: locabase + img.attributes.url,
          thumbnail: locabase + img.attributes.url,
          alt: data.data[selectedTabIndex].attributes.Baslik,
        };
      }
      return null;
    }
  ).filter((img) => img !== null);


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
            {item.attributes.myTabsContentimg.data.map((img, imgIndex) => (
            <div
            className="col-lg-3 col-6 my-class"
            key={img.id}
            onClick={() => openLightbox(imgIndex)}
            >
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
      <div className="col-lg-3 col-6 my-class" key={video.id} onClick={() => openModal(videoUrl)}>
        <div className="player-wrapper">
          <div className="play-button" onClick={() => openModal(videoUrl)}>
          <FontAwesomeIcon icon={faPlayCircle} className="play-icon" /> {/* Play butonu */}
          </div>
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
            <Modal show={showModal} onHide={closeModal} size="lg">
            <Modal.Body>
            <ReactPlayer
                       className="react-player"
                       url={currentVideoUrl}
                       width="100%"
                       height="100%"
                       loop={false}
          
                       playing={true}
                       controls={true}
                     />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
            Kapat
            </Button>
            </Modal.Footer>
            </Modal>
            {lightboxOpen && selectedImageIndex !== null && (
  <div className="lightbox-container" onClick={closeLightbox}>
    <ModalImage
      className="lightbox-image"
      hideDownload={true}
      showRotate={false}
      small={images[selectedImageIndex].thumbnail}
      large={images[selectedImageIndex].original}
      alt={images[selectedImageIndex].alt}
      onClose={closeLightbox}
      withZoom={true} // Zoom özelliğini modal içinde etkinleştirir
      imageBackgroundColor="#fff" // Görüntü arkaplan rengini belirler
    />
  </div>
)}
            </div>
            </section>
            );
            };
            
            export default FuaCreative;
