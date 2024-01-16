import { Form, Button } from 'react-bootstrap';

function Checkout() {
  return (
    <section>
      <h1>Checkout</h1>

      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter City" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter Postal Code" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Buy Now
        </Button>
      </Form>
    </section>
  );
}

export default Checkout;
