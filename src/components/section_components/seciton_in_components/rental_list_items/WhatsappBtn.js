import React from 'react';
import whatsappIcon from 'http://localhost:1337/uploads/wp_svg_d169bff9e1.svg'; // WhatsApp ikonunun dosya yolunu buraya ekleyin
import useFetch from "../../../../hooks/useFetch";
const WhatsAppButton = () => {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/fixed-whatsapp-btn"
      );
      if (isLoading) return <h1>Yükleniyor...</h1>;
      if (error) return <h1>Hata: {error.message}</h1>;
  const handleButtonClick = () => {
    window.location.href = 'https://wa.me/1234567890'; // WhatsApp numarasını buraya ekleyin
  };

  return (
    <div className="whatsapp-button">
      <button onClick={handleButtonClick}>
      <img src={whatsappIcon} alt="WhatsApp" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
