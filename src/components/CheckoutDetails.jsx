import { Form, Button } from 'react-bootstrap';

function CheckoutDetails() {
  return (
    <Form>
      <h3>Shipping address</h3>

      <Form.Group className="mb-3" controlId="fullName">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="postalCode">
        <Form.Label>Postal code</Form.Label>
        <Form.Control type="text" placeholder="Enter Postal Code" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <hr />

      <h3>Payment</h3>

      <Form.Select aria-label="Default select example">
        <option>Select payment method</option>
        <option value="1">PayPal</option>
        <option value="2">Credit Card</option>
        <option value="3">Cash</option>
      </Form.Select>

      <Button variant="primary" type="submit">
        Buy Now
      </Button>
    </Form>
  );
}

export default CheckoutDetails;
