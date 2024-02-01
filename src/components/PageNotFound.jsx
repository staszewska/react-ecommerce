import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/PageNotFound.css';

function PageNotFound() {
  return (
    <section className="PageNotFound">
      <h1>Page Not Found</h1>
      <Button as={Link} to="/">
        Back To Home
      </Button>
    </section>
  );
}

export default PageNotFound;
