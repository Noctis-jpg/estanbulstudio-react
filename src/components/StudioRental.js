import React from "react";
import useFetch from "../hooks/useFetch";
import StudyoRentalSlider from "./section_components/seciton_in_components/StudyoRentalSlider";
import { Helmet } from "react-helmet";
const StudioRental = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/studyo-rental-ekipmen"
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
          <div className="col-lg-12">
            <div key={data.id} className="OtherPageSloganArea">
              <h1>{data.data.attributes.RentalHeading}</h1>
            </div>
          </div>
          {data.data.map((item) => (
          <div key={item.id} className="col-lg-3" ddsdasd >
          
              <h2 >{item.attributes.HeadingEkipman}</h2>
              <p >{item.attributes.EkipmanListItem}</p>
            </div>
     
        ))}
        </div>
      </div>
      <div className="container">
        <div className="row">

    </div>
    </div>
    </section>
  );
};

export default StudioRental;
