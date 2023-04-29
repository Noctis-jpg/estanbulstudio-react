import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";
import TabsHeader from "../components/section_components/tabsHeader";
import 'react-tabs/style/react-tabs.css';
const locabase = "http://localhost:1337";
const FuaCreative = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/tabs-estanbuls?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;


  return (
    
    <section className="PageCreative ">
            <Helmet>
        <title>Backstage</title>
      </Helmet>
            <section className="headerGorseli">  
  <div className="headerBaslik">
     <div className="container">
     <h1>BACKSTAGE</h1>
     </div>
  </div>
</section>
    <div className="container">
      <div className="TabsButtonContent" >
    <TabsHeader setSelectedTabIndex={setSelectedTabIndex}  selectedTabIndex={selectedTabIndex} />
    </div>
    {data.data.map((item, index) => (
  <div className="row" style={{ display: selectedTabIndex === index ? "flex" : "none" }}>
    {item.attributes.myTabsContentimg.data.map((img) => (
      <div className="col-lg-3 col-6 my-class">
        <img className="img-fluid myHomeSlideimg" src={locabase + img.attributes.url} />
        <h2>{item.attributes.Baslik}</h2>
      </div>
    ))}
  </div>
))}
      
      </div>
    </section>
  );
};

export default FuaCreative;
