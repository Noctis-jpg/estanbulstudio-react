import React, { useState } from 'react';
import useFetch from "../../../hooks/useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import FAQtitle from "../../section_components/FAQTitle";
const AccordionComponent = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/accordions"
  );

  const [activeKey, setActiveKey] = useState(null); // Aktif olan açılır menü öğesini tutmak için state kullanın

  const handleAccordionToggle = (itemID) => {
    setActiveKey(itemID === activeKey ? null : itemID); // Açılır menü öğesinin durumunu toggle etmek için kullanılır
  };

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  return (

    <div id="accordion">
      
      <FAQtitle />
      {data.data.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-header" id={`heading${item.id}`}>
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={`#collapse${item.id}`}
                aria-expanded={activeKey === item.id.toString()} // Açılır menü öğesi aktifse true, değilse false
                aria-controls={`collapse${item.id}`}
                onClick={() => handleAccordionToggle(item.id.toString())} // Açılır menüyü toggle etmek için handleClick fonksiyonunu çağırın
              >
                {item.attributes.title}
              </button>
            </h5>
          </div>

          <div
            id={`collapse${item.id}`}
            className={`collapse ${activeKey === item.id.toString() ? 'show' : ''}`} // Açılır menü öğesi aktifse "show" sınıfını ekle
            aria-labelledby={`heading${item.id}`}
            data-parent="#accordion"
          >
            <div className="card-body"dangerouslySetInnerHTML={{ __html: item.attributes.content.replace(/"/g, '') }}></div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default AccordionComponent;