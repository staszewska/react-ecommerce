import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

function ProductCard({ product }) {
  return (
    <Card key={product.id} style={{ width: '10rem' }}>
      <Link to={`/p/${product.id}`}>
        <Card.Img variant="top" src={product.image} />

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
