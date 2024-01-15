import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

function CartItem({ product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity);
  const removeProduct = useStoreActions((actions) => actions.removeProduct);
  const saveCartToLocalStorage = useStoreActions((actions) => actions.saveCartToLocalStorage);
  const updateCartItem = useStoreActions((actions) => actions.updateCartItem);

  function handleQuantityChange(event) {
    const selectedQuantity = +event.target.value;

    setSelectedQuantity(selectedQuantity);
  }

  function handleUpdateQuantityClick() {
    const payload = { ...product, quantity: selectedQuantity };

    updateCartItem(payload);
    saveCartToLocalStorage();
  }

  function handleRemoveProductClick() {
    removeProduct(product);
    saveCartToLocalStorage();
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>€{product.price}</Card.Text>

        <Row>
          <Col md={4}>
            <Form.Select value={selectedQuantity} onChange={handleQuantityChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </Form.Select>
          </Col>

          <Col md={2}>
            <Button variant="primary" size="lg" onClick={handleUpdateQuantityClick}>
              Update
            </Button>
          </Col>

          <Col md={2}>
            <Button variant="danger" size="lg" onClick={handleRemoveProductClick}>
              Remove
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
