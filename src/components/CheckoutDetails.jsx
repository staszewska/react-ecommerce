import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/CheckoutDetails.css';
import { useStoreActions } from 'easy-peasy';

function CheckoutDetails() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('');
  const clearCart = useStoreActions((actions) => actions.clearCart);

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

    clearCart();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Body>
          <Card.Title>Shipping address</Card.Title>

          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Address"
              onChange={(event) => setAddress(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal code</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>

      <hr />

      <Card>
        <Card.Body>
          <Card.Title>Payment</Card.Title>

          <Form.Control
            required
            as="select"
            aria-label="Default select example"
            value={payment}
            onChange={(event) => setPayment(event.target.value)}
          >
            <option value="">Select payment method</option>
            <option value="paypal">PayPal</option>
            <option value="creditCard">Credit Card</option>
            <option value="cash">Cash</option>
          </Form.Control>
        </Card.Body>
      </Card>

      <hr />

      <div className="CheckoutDetails__CTA">
        <Button variant="success" type="submit">
          Buy Now
        </Button>

        <Button as={Link} to="/s" variant="danger">
          Back to Shopping Cart
        </Button>
      </div>
    </Form>
  );
}

export default CheckoutDetails;
