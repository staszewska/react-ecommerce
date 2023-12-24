import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useStoreActions((actions) => actions.addToCart);

  useEffect(() => {
    console.log('[ProductDetails] useEffect: render');

    const PRODUCT_URI = `https://fakestoreapi.com/products/${id}`;

    fetch(PRODUCT_URI)
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, [id]);

  function handleAddToCartClick() {
    addToCart({
      ...product,
      quantity: 1,
    });
  }

  return (
    <>
      <h2>Product Details</h2>

      {product && (
        <div>
          <p>{product.title}</p>
          <p>€{product.price}</p>

          <Button variant="success" onClick={handleAddToCartClick}>
            Add To Cart
          </Button>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
