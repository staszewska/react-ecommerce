import { Row, Col, Card } from 'react-bootstrap';
import CheckoutDetails from './CheckoutDetails';
import { useStoreState } from 'easy-peasy';

function Checkout() {
  const getSumOfCart = useStoreState((state) => state.getSumOfCart);

  return (
    <section>
      <h1>Checkout</h1>

      <Row>
        <Col md={8}>
          <CheckoutDetails />
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Summary</Card.Title>
              <Card.Text>
                Total (VAT included) <strong>{getSumOfCart.toFixed(2)} €</strong>
              </Card.Text>
              <Card.Text>
                Shipping <strong>Free</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Checkout;
