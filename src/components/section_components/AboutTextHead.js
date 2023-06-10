import React from "react";
import useFetch from "../../hooks/useFetch";
const AboutTextHead = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/about-text-heads"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  return (
    <div>
      {data.data.map((item) => (
        <div key={item.id} className="HeaderAndText">
          <h2 className="Header">{item.attributes.AboutTitle}</h2>
          <p>{item.attributes.AboutText}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutTextHead;
