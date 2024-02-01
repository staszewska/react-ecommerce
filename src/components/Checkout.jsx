import { Form, Button, Row, Col } from 'react-bootstrap';
import CheckoutDetails from './CheckoutDetails';

function Checkout() {
  return (
    <section>
      <Row>
        <Col md={8}>
          <CheckoutDetails />
        </Col>

        <Col md={4}>
          <h1>Checkout</h1>
        </Col>
      </Row>
    </section>
  );
}

export default Checkout;
