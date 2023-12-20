import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

function ProductCard({ product }) {
  return (
    <Card key={product.id} style={{ width: '10rem' }}>
      <Card.Img variant="top" src={product.image} />

      <Card.Body>
        <Card.Title>{product.title}</Card.Title>

        <Card.Text>€{product.price}</Card.Text>

        <Rating initialValue={product.rating.rate} readonly />

        <Button variant="outline-primary" as={Link} to={`/p/${product.id}`}>
          View Details
        </Button>
        <Button variant="success">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
