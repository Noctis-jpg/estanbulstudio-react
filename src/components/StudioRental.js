import React from "react";
import useFetch from "../hooks/useFetch";
import StudyoRentalSlider from "./section_components/seciton_in_components/StudyoRentalSlider";
import { Helmet } from "react-helmet";
const StudioRental = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/studyo-kiralama"
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
          <div className="col-lg-12">
            <div key={data.id} className="OtherPageSloganArea">
              <h1>{data.data.attributes.RentalHeading}</h1>
            </div>
          </div>

          <div className="col-lg-12">
            <StudyoRentalSlider></StudyoRentalSlider>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default StudioRental;
