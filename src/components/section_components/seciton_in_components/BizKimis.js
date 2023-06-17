import React from 'react'
import useFetch from "../../../hooks/useFetch";
const Bizkimiz = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapproject.net/api/bizkimiz"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
  return (
    <div className='col-lg-12'>
    <div className='SlideAltiText' key={data.id}>
      <h2>{data.data.attributes.BizkimizBaslik}</h2>
      <p>{data.data.attributes.BizkimizYazi}</p>
    </div>
</div>
  )
}

export default Bizkimiz