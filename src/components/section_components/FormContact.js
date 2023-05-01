import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FormGroup, FormCheck } from 'react-bootstrap';

function FormContact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [kvkkChecked, setKvkkChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting ${firstName} ${lastName} ${email} ${phoneNumber} ${company} ${message} ${kvkkChecked}`);
    // burada formun gönderilmesi işlemini gerçekleştirin
  };
  return (
    <Container>
    <Row>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Row className='FormAllClass'>
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>Ad</Form.Label>
                <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row className='FormAllClass'>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>E-posta</Form.Label>
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Telefon Numarası</Form.Label>
                <Form.Control type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className='FormAllClass' controlId="formCompany">
            <Form.Label>Şirket</Form.Label>
            <Form.Control type="text" value={company} onChange={e => setCompany(e.target.value)} />
          </Form.Group>
          <Form.Group className='FormAllClass' controlId="formMessage">
            <Form.Label>Mesaj</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={e => setMessage(e.target.value)} />
          </Form.Group>
          <FormGroup>
            <FormCheck
              required
              label="KVKK onayı veriyorum."
              feedback="KVKK onayı gerekli."
              checked={kvkkChecked}
              onChange={e => setKvkkChecked(e.target.checked)}
              id="kvkkCheck"
            />
          </FormGroup>
          <Button type="submit">Gönder</Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default FormContact