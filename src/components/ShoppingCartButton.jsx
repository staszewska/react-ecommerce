import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

function ShoppingCartButton() {
  const numberOfCartItems = useStoreState((state) => state.getNumberOfCartItems);

  return (
    <Nav.Link as={Link} to="/s">
      Shopping Cart &nbsp;
      {numberOfCartItems > 0 && <Badge bg="danger">{numberOfCartItems}</Badge>}
    </Nav.Link>
  );
}

export default ShoppingCartButton;
