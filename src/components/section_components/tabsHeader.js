import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";



const TabsHeader = ({setSelectedTabIndex, selectedTabIndex }) => {

  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/tabs-categories?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  return (
    <React.Fragment>
      {data.data.map((item, index) => (
        <button
          className={`allTabs-ym tabsbutton-${index} ${selectedTabIndex === index ? "selected" : index === 0 && selectedTabIndex === null ? "selected" : ""}`}
          key={item.id}
          onClick={() => setSelectedTabIndex(index)}
        >
          {item.attributes.Category}
        </button>
      ))}
    </React.Fragment>
  );
};

export default TabsHeader;