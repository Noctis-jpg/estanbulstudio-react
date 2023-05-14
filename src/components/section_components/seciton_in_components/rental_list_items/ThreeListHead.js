import React from 'react'
import useFetch from "../../../../hooks/useFetch";
const ThreeListHead = () => {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/three-list-head"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
    <React.Fragment key={data.id}>
        
        {data.data.attributes.ThreeHead}
    </React.Fragment>
  )
}

export default ThreeListHead