import { useStoreState } from 'easy-peasy';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import CartItem from './CartItem';

function ShoppingCart() {
  const shoppingCart = useStoreState((state) => state.shoppingCart);
  const getSumOfCart = useStoreState((state) => state.getSumOfCart);

  return (
    <section>
      <h2>My Shopping Cart</h2>

      <Container>
        <Row>
          {/* CONTENT (LEFT) */}
          <Col md={8}>
            {shoppingCart.map((item) => {
              return <CartItem product={item} />;
            })}
          </Col>

          {/* CONTENT (RIGHT) */}
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Summary</Card.Title>

                <Card.Text>Total (VAT included) {getSumOfCart} €</Card.Text>
                <Card.Text>Shipping Free</Card.Text>

                <div>
                  <Button variant="success">Go Checkout</Button>
                </div>
                <div>
                  <Button variant="outline-primary">Continue Shopping</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ShoppingCart;
