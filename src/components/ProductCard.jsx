import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

function ProductCard({ product }) {
  return (
    <Card key={product.id}>
      <Link to={`/p/${product.id}`}>
        <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>

          <Card.Text>€{product.price}</Card.Text>

          <Rating initialValue={product.rating.rate} readonly />
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
