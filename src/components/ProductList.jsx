import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

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

      <Container>
        <Row>
          {products &&
            products.map((product) => (
              <Col md="3">
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductList;
