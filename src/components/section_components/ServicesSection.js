import React from 'react'
import useFetch from "../../hooks/useFetch";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const ServicesSection = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/card-serviss"
  );

  if (isLoading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;
  return (
    <div className='container servicesSection'>
      {/* <div className='verticalLine'></div> */}
    <div className='row'>
      <div className='col-lg-6'>
      <Card>
      <Card.Img className='ymServicesimg1' variant="top" src="http://localhost:1337/uploads/portrait_of_an_asia_girl_NCDLHZE_8108fe01af.jpg?updated_at=2023-02-26T11:29:12.208Z" />
      <Card.Body>
        <Card.Title>Kameralar</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-6'>
      <Card>
      <Card.Img className='ymServicesimg' variant="top" src="http://localhost:1337/uploads/portrait_of_an_asia_girl_6_CCZHG_6_819x1024_71c93a1fcb.jpg?updated_at=2023-02-26T12:43:25.197Z" />
      <Card.Body>
        <Card.Title>Lensler</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-6'>
      <Card>
      <Card.Img className='ymServicesimg1' variant="top" src="http://localhost:1337/uploads/portrait_of_an_asia_girl_6_KUHQXZ_819x1024_659638cc8d.jpg?updated_at=2023-02-26T12:54:19.648Z" />
      <Card.Body>
        <Card.Title>Işıklar</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-6'>
      <Card>
      <Card.Img className='ymServicesimg2' variant="top" src="http://localhost:1337/uploads/portrait_of_an_asia_beautiful_girl_A3_EB_9_AP_f079f61133.jpg?updated_at=2023-02-26T12:54:49.112Z" />
      <Card.Body>
        <Card.Title>Teknik Ekipmanlar</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
    </div>
    </div>
  )
}

export default ServicesSection