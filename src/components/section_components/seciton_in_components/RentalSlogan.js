import React from 'react'
import useFetch from "../../../hooks/useFetch";
const RentalSlogan = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapproject.net/api/rental-slogan"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
  return (

    <div className="row">
      <div className="col-lg-12 rentalSlogancol">

      <div className='RentalSlogan' key={data.id}>
      <h2>{data.data.attributes.SloganHeader}</h2>
      <p>{data.data.attributes.SloganText}</p>
    </div>
      </div>
    </div>

  )
}

export default RentalSlogan