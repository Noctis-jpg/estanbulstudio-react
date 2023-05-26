import React from 'react'
import useFetch from "../../../../hooks/useFetch";
const TwoListHead = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapi-app-angd.onrender.com/api/two-list-head"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
    <React.Fragment key={data.id}>
        
        {data.data.attributes.HeadTwo}
    </React.Fragment>
  )
}

export default TwoListHead