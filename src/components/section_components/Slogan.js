import React from 'react'
import useFetch from "../../hooks/useFetch";
const Slogan = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapproject.net/api/slide-alti-slogans"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
  return (
    <div className="container-fluid">
            <div className="verticalLine"></div>
    <div className="row">
      <div className="col-lg-12">
      {data.data.map((item) => (
        <div key={item.id} className="TextSlogan">

            <h6>{item.attributes.Marka}</h6>
            <h2>{item.attributes.Slogan}</h2>
        </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Slogan