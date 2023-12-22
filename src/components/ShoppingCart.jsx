import { useState } from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';

function ShoppingCart() {
  const shoppingCart = useState([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
  ]);

  const [selectedQuantity, setSelectedQuantity] = useState(1);

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

                <Card.Text>Total (VAT included) 99 €</Card.Text>
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
