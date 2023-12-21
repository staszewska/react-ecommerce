import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { DispatchShoppingCartContext } from '../contexts/ShoppingCartContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const dispatch = useContext(DispatchShoppingCartContext);

  useEffect(() => {
    const PRODUCT_URI = `https://fakestoreapi.com/products/${id}`;

    fetch(PRODUCT_URI)
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, []);

  function handleQuantityChange(event) {
    const selectedQuantity = +event.target.value;

    setSelectedQuantity(selectedQuantity);
  }

  function handleAddToCartClick() {
    dispatch({
      type: 'ADD_PRODUCT',
      ...product,
      quantity: selectedQuantity,
    });
  }

  return (
    <>
      <h2>Product Details</h2>

      {product && (
        <div>
          <p>{product.title}</p>
          <p>€{product.price}</p>

          <select name="quantity" value={selectedQuantity} onChange={handleQuantityChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>

          <Button variant="success" onClick={handleAddToCartClick}>
            Add To Cart
          </Button>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
