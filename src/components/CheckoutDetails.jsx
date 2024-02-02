import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CheckoutDetails() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      fullName,
      address,
      postalCode,
      city,
      phone,
      email,
      payment,
    };

    console.log('[CheckoutDetails] formData:', formData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Shipping address</h3>

      <Form.Group className="mb-3" controlId="fullName">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" onChange={(event) => setFullName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" onChange={(event) => setAddress(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="postalCode">
        <Form.Label>Postal code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Postal Code"
          onChange={(event) => setPostalCode(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" onChange={(event) => setCity(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone" onChange={(event) => setPhone(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <hr />

      <h3>Payment</h3>

      <Form.Select aria-label="Default select example" onChange={(event) => setPayment(event.target.value)}>
        <option>Select payment method</option>
        <option value="paypal">PayPal</option>
        <option value="creditCard">Credit Card</option>
        <option value="cash">Cash</option>
      </Form.Select>

      <Button variant="primary" type="submit">
        Buy Now
      </Button>
    </Form>
  );
}

export default CheckoutDetails;
