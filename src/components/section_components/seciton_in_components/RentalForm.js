import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const RentalForm = () => {
  const [validated, setValidated] = useState(false);
  const baseUrl = "http://localhost:4000";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [select, setSelect] = useState('');
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const dataSend = {
          name: name,
          email: email,
          phone: phone,
          select: select,
          switch1: switch1,
          switch2: switch2,
          switch3: switch3,
          switch4: switch4,
          message: message,
        };

        const response = await fetch(`${baseUrl}/api/send-email`, {
          method: 'POST',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataSend),
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
            <Form.Control
              placeholder="Ad Soyad"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Lütfen adınızı ve soyadınızı girin.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmail">
            <Form.Control
              placeholder="E-mail"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Lütfen geçerli bir e-posta adresi girin.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="formrow">
        <Col>
          <Form.Group controlId="formPhone">
            <Form.Control
              placeholder="Telefon"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSelect">
            <Form.Control
              as="select"
              required
              value={select}
              onChange={(event) => setSelect(event.target.value)}
            >
              <option disabled value="">
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
            <Form.Check
              type="switch"
              id="switch1"
              label="Kapalı/Açık"
              checked={switch1}
              onChange={(event) => setSwitch1(event.target.checked)}
            />
          </Form.Group>
        </Col>
        <Col className="switchDiv">
          <Form.Group controlId="formSwitch2">
            <Form.Label>Video Kamera ve Ekipmanları</Form.Label>
            <Form.Check
              type="switch"
              id="switch2"
              label="Kapalı/Açık"
              checked={switch2}
              onChange={(event) => setSwitch2(event.target.checked)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="formrow">
        <Col className="switchDiv">
          <Form.Group controlId="formSwitch3">
            <Form.Label>Fotoğraf Makinası ve Ekipmanları</Form.Label>
            <Form.Check
              type="switch"
              id="switch3"
              label="Kapalı/Açık"
              checked={switch3}
              onChange={(event) => setSwitch3(event.target.checked)}
            />
          </Form.Group>
        </Col>
        <Col className="switchDiv">
          <Form.Group controlId="formSwitch4">
            <Form.Label>Ekipmanlarının Tümü</Form.Label>
<Form.Check
type="switch"
id="switch4"
label="Kapalı/Açık"
checked={switch4}
onChange={(event) => setSwitch4(event.target.checked)}
/>
</Form.Group>
</Col>
</Row>
<Row className="formrow">
<Col>
<Form.Group controlId="formMessage">
<Form.Control
as="textarea"
placeholder="Mesajınız"
rows={3}
value={message}
onChange={(event) => setMessage(event.target.value)}
/>
</Form.Group>
</Col>
</Row>
<Button type="submit">Gönder</Button>
</Form>
);
};

export default RentalForm;
