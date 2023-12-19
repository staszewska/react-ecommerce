import { useEffect, useState } from 'react';
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
          <div key={product.id}>
            <p>
              <b>{product.title}</b>
            </p>
            <p>€{product.price}</p>
            {/* <img src={product.image} /> */}

            <Link to="/products/1">View Details</Link>
            <button>Add To Cart</button>
          </div>
        ))}
    </section>
  );
}

export default ProductList;
