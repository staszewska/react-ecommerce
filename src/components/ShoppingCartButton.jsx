import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShoppingCartButton() {
  return (
    <Nav.Link as={Link} to="/s">
      Shopping Cart &nbsp;
      <Badge bg="danger">1</Badge>
    </Nav.Link>
  );
}

export default ShoppingCartButton;
