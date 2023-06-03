import React from 'react'
import useFetch from "../../../../hooks/useFetch"
const ThreeRentalListİtems = () => {
    const { isLoading, error, data } = useFetch(
        "http://37.148.211.78:1337/api/three-rental-listitems"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
    <div className='Listİtem'>
        <ul>
        {data.data.map((item) => (
            <li key={item.id} className='ListItems'>{item.attributes.ThreeitemList}</li>
            ))}
        </ul>
    </div>
  )
}

export default ThreeRentalListİtems