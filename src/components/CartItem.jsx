import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function CartItem({ product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity);

  function handleQuantityChange(event) {
    const selectedQuantity = +event.target.value;

    setSelectedQuantity(selectedQuantity);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>€{product.price}</Card.Text>

        <select name="quantity" value={selectedQuantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <Button variant="primary">Update</Button>
        <Button variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
