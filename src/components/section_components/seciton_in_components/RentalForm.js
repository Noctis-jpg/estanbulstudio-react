import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Ad Soyad:", form.formName.value);
      console.log("E-mail:", form.formEmail.value);
      console.log("Telefon:", form.formPhone.value);
      console.log("Tahmini Kiralama Saati:", form.formSelect.value);
      console.log("Fotoğrafçı/Yönetmen Desteği:", form.formSwitch1.checked);
      console.log("Video Kamera ve Ekipmanları:", form.formSwitch2.checked);
      console.log("Fotoğraf Makinası ve Ekipmanları:", form.formSwitch3.checked);
      console.log("Ekipmanlarının Tümü:", form.formSwitch4.checked);
      console.log("Mesajınız:", form.formMessage.value);
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

export default ContactForm;

