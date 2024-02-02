import { Row, Col, Card } from 'react-bootstrap';
import CheckoutDetails from './CheckoutDetails';
import { useStoreState } from 'easy-peasy';
import '../styles/Checkout.css';

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
              <Card.Text className="Summary__Row">
                <span>Total (VAT included)</span>
                <span>
                  <strong>{getSumOfCart.toFixed(2)} €</strong>
                </span>
              </Card.Text>

              <Card.Text className="Summary__Row">
                <span>Shipping</span>
                <span>
                  <strong>Free</strong>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Checkout;
