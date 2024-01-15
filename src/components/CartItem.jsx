import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

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

        <select name="quantity" value={selectedQuantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <Button variant="primary" onClick={handleUpdateQuantityClick}>
          Update
        </Button>
        <Button variant="danger" onClick={handleRemoveProductClick}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
