import React from 'react'
import useFetch from "../../../../hooks/useFetch";
const OneListHead = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapi-app-angd.onrender.com/api/one-list-head"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    



  return (
    <React.Fragment key={data.id}>
        
        {data.data.attributes.Head}
    </React.Fragment>
  )
}

export default OneListHead