import React from "react";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";
import TabsHeader from "../components/section_components/tabsHeader";
import { Tab, Tabs, TabPanel } from "react-tabs";
const FuaCreative = () => {
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

      <TabsHeader />
    
      <Tabs>
 
   <TabPanel >
            <h2>asdasda</h2>
            <img src="" alt="" />
    </TabPanel>
      
      </Tabs>
    
    </section>
  );
};

export default FuaCreative;
