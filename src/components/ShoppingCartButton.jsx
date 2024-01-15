import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

function ShoppingCartButton() {
  const amountOfCartItems = useStoreState((state) => state.getAmountOfCartItems);

  return (
    <Nav.Link as={Link} to="/s">
      Shopping Cart &nbsp;
      {amountOfCartItems > 0 && <Badge bg="danger">{amountOfCartItems}</Badge>}
    </Nav.Link>
  );
}

export default ShoppingCartButton;
