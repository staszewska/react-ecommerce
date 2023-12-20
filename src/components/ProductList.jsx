import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

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

      {products && products.map((product) => <ProductCard product={product} />)}
    </section>
  );
}

export default ProductList;
