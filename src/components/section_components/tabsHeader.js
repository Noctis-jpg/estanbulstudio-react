import React from "react";
import useFetch from "../../hooks/useFetch";
import { Tab, TabList } from "react-tabs";
const TabsHeader = () => {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/tabs-categories?populate=*"
      );
    
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
    
  return (
  
    <TabList>
          {data.data.map((item) => (
    <Tab key={item.id}>{item.attributes.Category}</Tab>
    ))}
</TabList>

  )
}

export default TabsHeader