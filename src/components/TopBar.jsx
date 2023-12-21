import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';

function TopBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React E-Commerce App
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>

            <Nav.Link href="#">Categories</Nav.Link>

            <Nav.Link href="#">Login</Nav.Link>

            <ShoppingCartButton />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
