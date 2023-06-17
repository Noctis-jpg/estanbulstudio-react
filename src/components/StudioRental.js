import React from "react";
import useFetch from "../hooks/useFetch";
import StudyoRentalSlider from "./section_components/seciton_in_components/StudyoRentalSlider";
import OneListHead from "./section_components/seciton_in_components/rental_list_items/OneListHead";
import OneListItem from "./section_components/seciton_in_components/rental_list_items/OneRentalListİtems";

import TwoListHead from "./section_components/seciton_in_components/rental_list_items/TwoListHead";
import TwoListItem from "./section_components/seciton_in_components/rental_list_items/TwoRentalListİtems";

import ThreeListHead from "./section_components/seciton_in_components/rental_list_items/ThreeListHead";
import ThreeListItem from "./section_components/seciton_in_components/rental_list_items/ThreeRentalListİtems";

import FourListHead from "./section_components/seciton_in_components/rental_list_items/FourListHead";
import FourListItem from "./section_components/seciton_in_components/rental_list_items/FourRentalListİtems";

import StudioBox from "../components/section_components/Rentalbox";

import VideoArea from "../components/section_components/StudioRentalVideo";

import SSS from "../components/section_components/seciton_in_components/AccordionItems";

import Form from "../components/section_components/seciton_in_components/RentalForm";

import RentalSlogan from "./section_components/seciton_in_components/RentalSlogan";

import { Helmet } from "react-helmet";
const StudioRental = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/rental-studio"
  );
  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  return (
    <section className="PageStudioRental OtherPage">
      <Helmet>
        <title>Stüdyo Kirala</title>
      </Helmet>
      <div className="container-fluid padrl">
        <div className="row">
          <div className="col-lg-12 pad-0">
            <StudyoRentalSlider></StudyoRentalSlider>
          </div>
        </div>
      </div>
      <div className="container">
        < RentalSlogan/>
        <div className="row d-none" >
          <div className="col-lg-12">
          <div className="Ekipman" key={data.id}>
            <h2>{data.data.attributes.RentalStudioSlideAltiBaslik}</h2>
          </div>
          </div>
          <div className="col-lg-3 col-6 colAft">
            <div className="HeadingRental">
              <h2 className="header">
                <OneListHead />
              </h2>

              <OneListItem />
            </div>
          </div>
          <div className="col-lg-3 col-6 colAft">
              <div className="HeadingRental">
                <h2 className="header">
                  <TwoListHead />
                </h2>
                <TwoListItem />
              </div>
          </div>
          <div className="col-lg-3 col-6 colAft">
              <div className="HeadingRental">
                <h2 className="header">
                  <ThreeListHead />
                </h2>
                <ThreeListItem />
              </div>
          </div>
          <div className="col-lg-3 col-6 colAft">
              <div className="HeadingRental">
                <h2 className="header">
                  <FourListHead />
                </h2>
                <FourListItem />
              </div>
          </div>
        </div>
      </div>
      <div className="container VideoAndFormArea">
        <div className="row">
          <div className="col-lg-6">
<VideoArea />
<SSS />
          </div>
          <div className="col-lg-6 ymFormArea">
            <div className="HeaderArea">
            <div class="FormTitle">
            <h2 class="smalltitle">STÜDYO KİRALAMA</h2>
            <h2>Hızlı İletişim</h2>
            </div>
            </div>
         <Form />
      
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
          <div className="Hizmet" key={data.id}>
            <h2>{data.data.attributes.HizmetBaslik}</h2>
          </div>
          </div>
        <StudioBox />
        </div>
      </div>



    </section>
  );
};

export default StudioRental;
