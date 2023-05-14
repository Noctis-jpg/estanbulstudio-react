import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="formName">
            <Form.Label>Ad Soyad</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Lütfen adınızı ve soyadınızı girin.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" required />
            <Form.Control.Feedback type="invalid">
              Lütfen geçerli bir e-posta adresi girin.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formPhone">
            <Form.Label>Telefon</Form.Label>
            <Form.Control type="tel" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSelect">
            <Form.Label>Seçim Kutusu</Form.Label>
            <Form.Control as="select">
              <option>Seçenek 1</option>
              <option>Seçenek 2</option>
              <option>Seçenek 3</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formSwitch1">
            <Form.Label>Switch 1 Başlık</Form.Label>
            <Form.Check type="switch" id="switch1" label="Açık/Kapalı" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSwitch2">
            <Form.Label>Switch 2 Başlık</Form.Label>
            <Form.Check type="switch" id="switch2" label="Açık/Kapalı" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formSwitch3">
            <Form.Label>Switch 3 Başlık</Form.Label>
            <Form.Check type="switch" id="switch3" label="Açık/Kapalı" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSwitch4">
            <Form.Label>Switch 4 Başlık</Form.Label>
            <Form.Check type="switch" id="switch4" label="Açık/Kapalı" />
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit">Gönder</Button>
    </Form>
  );
};

export default ContactForm;