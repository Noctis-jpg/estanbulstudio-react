import React from 'react';
import useFetch from "../../../../hooks/useFetch";

const locabase = "http://localhost:1337";
const WhatsAppButton = () => {
  const { isLoading, error, data } = useFetch("https://strapi-app-angd.onrender.com/api/fixed-whatsapp-btn?populate=*");

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  const handleButtonClick = () => {
    if (data && data.data && data.data.attributes && data.data.attributes.Whatsapphref) {
      window.open(data.data.attributes.Whatsapphref, '_blank');
    }
  };

  return (
    <div className="whatsapp-button" key={data.id}>
      <button onClick={handleButtonClick}>
        <img src={data.data.attributes.WhatsappIcon.data.attributes.url} alt="WhatsApp" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
