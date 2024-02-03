import { useStoreState } from 'easy-peasy';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const shoppingCart = useStoreState((state) => state.shoppingCart);
  const getSumOfCart = useStoreState((state) => state.getSumOfCart);
  const getNumberOfCartItems = useStoreState((state) => state.getNumberOfCartItems);

  return (
    <section>
      <h2>Shopping Cart</h2>

      <Container>
        <Row>
          {/* CONTENT (LEFT) */}
          <Col md={8}>
            {shoppingCart.map((item) => {
              return <CartItem key={item.id} product={item} />;
            })}
          </Col>

          {/* CONTENT (RIGHT) */}
          {getNumberOfCartItems > 0 ? (
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Summary</Card.Title>

                  <Card.Text>Total (VAT included) {getSumOfCart.toFixed(2)} €</Card.Text>
                  <Card.Text>Shipping Free</Card.Text>

                  <div>
                    <Button as={Link} to={'/c'} variant="success">
                      Go Checkout
                    </Button>
                  </div>

                  <div>
                    <Button as={Link} to={'/'} variant="outline-primary">
                      Continue Shopping
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <Card>
              <Card.Body>
                <Card.Title>Shopping Cart is Empty!</Card.Title>

                <div>
                  <Button as={Link} to={'/'} variant="primary">
                    View Awesome Products
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default ShoppingCart;
