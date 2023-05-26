import React from 'react'
import useFetch from "../../../../hooks/useFetch";
const FourListHead = () => {

    const { isLoading, error, data } = useFetch(
        "https://strapi-app-angd.onrender.com/api/four-list-head"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
    <React.Fragment key={data.id}>
        
        {data.data.attributes.FourHead}
    </React.Fragment>
  )
}

export default FourListHead