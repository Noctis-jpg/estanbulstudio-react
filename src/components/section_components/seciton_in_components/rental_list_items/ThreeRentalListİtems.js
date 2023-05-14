import React from 'react'
import useFetch from "../../../../hooks/useFetch"
const ThreeRentalListİtems = () => {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/three-rental-listitems"
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