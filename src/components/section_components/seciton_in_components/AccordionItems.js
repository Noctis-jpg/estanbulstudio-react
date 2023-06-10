import React, { useState } from 'react';
import useFetch from "../../../hooks/useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import FAQtitle from "../../section_components/FAQTitle";

const AccordionComponent = () => {
  const { isLoading, error, data } = useFetch(
    "https://strapproject.net/api/accordions"
  );

  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionToggle = (itemID) => {
    setActiveKey(itemID === activeKey ? null : itemID);
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
                className={`btn btn-link ${activeKey === item.id.toString() ? 'active' : ''}`}
                type="button"
                data-toggle="collapse"
                data-target={`#collapse${item.id}`}
                aria-expanded={activeKey === item.id.toString()}
                aria-controls={`collapse${item.id}`}
                onClick={() => handleAccordionToggle(item.id.toString())}
              >
                {item.attributes.title}
                {activeKey === item.id.toString() ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </button>
            </h5>
          </div>

          <div
            id={`collapse${item.id}`}
            className={`collapse ${activeKey === item.id.toString() ? 'show' : ''}`}
            aria-labelledby={`heading${item.id}`}
            data-parent="#accordion"
          >
            <div className="card-body" dangerouslySetInnerHTML={{ __html: item.attributes.content.replace(/"/g, '') }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
