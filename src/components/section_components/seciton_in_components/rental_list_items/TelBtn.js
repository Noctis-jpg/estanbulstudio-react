import React from 'react';
import useFetch from "../../../../hooks/useFetch";

const locabase = "http://localhost:1337";
const TellAppButton = () => {
  const { isLoading, error, data } = useFetch("http://localhost:1337/api/fixed-tel-btn?populate=*");

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  const handleButtonClick = () => {
    if (data && data.data && data.data.attributes && data.data.attributes.TelHref) {
      window.open(data.data.attributes.TelHref, '_blank');
    }
  };

  return (
    <div className="Tel-button" key={data.id}>
      <button onClick={handleButtonClick}>
        <img src={locabase + data.data.attributes.Telimage.data.attributes.url} alt="WhatsApp" />
      </button>
    </div>
  );
};

export default TellAppButton;
