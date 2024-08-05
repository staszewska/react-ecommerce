import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import HeroCarousel from './HeroCarousel';

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
      <HeroCarousel />

      <hr />

      <h1>PRODUCTS</h1>

      <Container>
        <Row>
          {products &&
            products.map((product) => (
              <Col md="4" key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductList;
