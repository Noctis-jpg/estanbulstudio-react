import React from "react";
import useFetch from "../../hooks/useFetch";

const locabase = "http://localhost:1337";

const Rentalbox = () => {
  const { isLoading, error, data } = useFetch(
    "http://37.148.211.78:1337/api/kiralama-boxes?populate=*"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  return (
    <React.Fragment>
      {data.data.map((item) => (
        <div key={item.id} className="col-lg-3 col-12 marEsta">
          <div className="MainBox">
            <div className="text">
              <h4>{item.attributes.Boxheader}</h4>
              <p dangerouslySetInnerHTML={{ __html: item.attributes.BoxItems.replace(/"/g, '') }}></p>
            </div>
            <div className="Imgmy">
              <img
                className="img-fluid"
                src={item.attributes.Boximage.data.attributes.url}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Rentalbox;
