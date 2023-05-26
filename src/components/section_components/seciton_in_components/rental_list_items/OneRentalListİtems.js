import React from 'react'
import useFetch from "../../../../hooks/useFetch"

const OneRentalListİtems = () => {
    const { isLoading, error, data } = useFetch(
        "https://strapi-app-angd.onrender.com/api/one-rental-listitems"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
    <div className='Listİtem'>
        <ul>
        {data.data.map((item) => (
            <li key={item.id} className='ListItems'>{item.attributes.OneitemList}</li>
            ))}
        </ul>
    </div>
  )
}

export default OneRentalListİtems