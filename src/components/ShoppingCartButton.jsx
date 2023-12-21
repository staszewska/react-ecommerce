import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

function ShoppingCartButton() {
  const ctx = useContext(ShoppingCartContext);

  return (
    <Nav.Link as={Link} to="/s">
      Shopping Cart &nbsp;
      {ctx.length > 0 && <Badge bg="danger">{ctx.length}</Badge>}
    </Nav.Link>
  );
}

export default ShoppingCartButton;
