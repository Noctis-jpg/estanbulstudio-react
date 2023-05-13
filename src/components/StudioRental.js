import React from "react";
import useFetch from "../hooks/useFetch";
import StudyoRentalSlider from "./section_components/seciton_in_components/StudyoRentalSlider";
import { Helmet } from "react-helmet";
const StudioRental = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/rental-studios"
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
        <div className="row">
          {data.data.map((item) => (
            <div key={item.id} className="col-lg-3">
              <div className="HeadingRental">
                <h2 className="header">
                  {item.attributes.StudyoEkipmanBaslik}
                </h2>
                <ul>
                  <li>{item.attributes.StudyoEkipmanicerik}</li>
            <li>      {item.attributes.ListItems}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row"></div>
      </div>
    </section>
  );
};

export default StudioRental;
