import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

function ShoppingCartButton() {
  const shoppingCart = useStoreState((state) => state.shoppingCart);

  return (
    <Nav.Link as={Link} to="/s">
      Shopping Cart &nbsp;
      {shoppingCart.length > 0 && <Badge bg="danger">{shoppingCart.length}</Badge>}
    </Nav.Link>
  );
}

export default ShoppingCartButton;
