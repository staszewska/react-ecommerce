import { useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';

function ShoppingCart() {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const getSumOfCart = useStoreState((state) => state.getSumOfCart);

  function handleQuantityChange(event) {
    const selectedQuantity = +event.target.value;

    setSelectedQuantity(selectedQuantity);
  }

  return (
    <section>
      <h2>My Shopping Cart</h2>

      <Container>
        <Row>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Product Title</Card.Title>
                <Card.Text>99 €</Card.Text>

                <select name="quantity" value={selectedQuantity} onChange={handleQuantityChange}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>

                <Button variant="primary">Update</Button>
              </Card.Body>
            </Card>
          </Col>

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
