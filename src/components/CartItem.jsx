import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function CartItem({ product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  function handleQuantityChange(event) {
    const selectedQuantity = +event.target.value;

    setSelectedQuantity(selectedQuantity);
  }

  return (
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
  );
}

export default CartItem;
