import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


const RentalForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const formData = new FormData(form);
        const response = await fetch('http://localhost:8000/api/send-email', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('E-posta gönderildi');
          Swal.fire({
            icon: 'success',
            title: 'Başarılı',
            text: 'E-posta gönderildi!',
          });
        } else {
          console.error('E-posta gönderilemedi');
          Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'E-posta gönderilemedi!',
          });
        }
      } catch (error) {
        console.error('E-posta gönderilemedi:', error);
        Swal.fire({
          icon: 'error',
          title: 'Hata',
          text: 'E-posta gönderilemedi!',
        });
      }
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="formrow">
      <Col>
        <Form.Group controlId="formName">
          <Form.Control placeholder="Ad Soyad" type="text" required />
          <Form.Control.Feedback type="invalid">
            Lütfen adınızı ve soyadınızı girin.
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formEmail">
          <Form.Control placeholder="E-mail" type="email" required />
          <Form.Control.Feedback type="invalid">
            Lütfen geçerli bir e-posta adresi girin.
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
    </Row>
    <Row className="formrow">
      <Col>
        <Form.Group controlId="formPhone">
          <Form.Control placeholder="Telefon" type="tel" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formSelect">
          <Form.Control as="select" required>
            <option disabled selected value="">
              Tahmini Kiralama Saati
            </option>
            <option value="1-6">1 ile 6 Saat Arası</option>
            <option value="6-12">6 ile 12 Saat Arası</option>
            <option value="12-14">12 ile 14 Saat Arası</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
    <Row className="formrow">
      <Col className="switchDiv">
        <Form.Group controlId="formSwitch1">
          <Form.Label>Fotoğrafçı/Yönetmen Desteği</Form.Label>
          <Form.Check type="switch" id="switch1" label="Kapalı/Açık" />
        </Form.Group>
      </Col>
      <Col className="switchDiv">
        <Form.Group controlId="formSwitch2">
          <Form.Label>Video Kamera ve Ekipmanları</Form.Label>
          <Form.Check type="switch" id="switch2" label="Kapalı/Açık" />
        </Form.Group>
      </Col>
    </Row>
    <Row className="formrow">
      <Col className="switchDiv">
        <Form.Group controlId="formSwitch3">
          <Form.Label>Fotoğraf Makinası ve Ekipmanları</Form.Label>
          <Form.Check type="switch" id="switch3" label="Kapalı/Açık" />
        </Form.Group>
      </Col>
      <Col className="switchDiv">
        <Form.Group controlId="formSwitch4">
          <Form.Label>Ekipmanlarının Tümü</Form.Label>
          <Form.Check type="switch" id="switch4" label="Kapalı/Açık" />
        </Form.Group>
      </Col>
    </Row>
    <Row className="formrow">
      <Col>
      <Form.Group controlId="formMessage">

          <Form.Control as="textarea" placeholder="Mesajınız" rows={3} />
        </Form.Group>
      </Col>
    </Row>
    <Button type="submit">Gönder</Button>
  </Form>
  );
};

export default RentalForm;
