import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const PRODUCTS_URI = 'https://fakestoreapi.com/products/';

    fetch(PRODUCTS_URI)
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, []);

  return (
    <section>
      <h1>PRODUCTS</h1>

      {products &&
        products.map((product) => (
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />

            <Card.Body>
              <Card.Title>{product.title}</Card.Title>

              <Card.Text>€{product.price}</Card.Text>

              <Button variant="outline-primary" as={Link} to={`/p/${product.id}`}>
                View Details
              </Button>
              <Button variant="success">Add To Cart</Button>
            </Card.Body>
          </Card>
        ))}
    </section>
  );
}

export default ProductList;
