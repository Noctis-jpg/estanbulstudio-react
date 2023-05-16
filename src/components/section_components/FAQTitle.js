import React from 'react'
import useFetch from "../../hooks/useFetch"
const FAQTitle = () => {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/rental-studio-sss-header"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
  return (
    <div className='FAQtitle' key={data.id}>
        <h4 className='smalltitle'>{data.data.attributes.smalltitle}</h4>
        <h2>{data.data.attributes.Bigtitle}</h2>
    </div>
  )
}

export default FAQTitle