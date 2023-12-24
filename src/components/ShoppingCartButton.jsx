import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

function ShoppingCartButton() {
  const count = useStoreState((state) => state.count);

  return (
    <Nav.Link as={Link} to="/s">
      Shopping Cart &nbsp;
      {count > 0 && <Badge bg="danger">{count}</Badge>}
    </Nav.Link>
  );
}

export default ShoppingCartButton;
