import { useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { Button, Form, Row, Col, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const addToCart = useStoreActions((actions) => actions.addToCart);
  const saveCartToLocalStorage = useStoreActions((actions) => actions.saveCartToLocalStorage);

  function handleQuantityChange(event) {
    const selectedQuantity = +event.target.value;

    setSelectedQuantity(selectedQuantity);
  }

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
    addToCart({ ...product, quantity: selectedQuantity });
    saveCartToLocalStorage();
    setShow(true);
  }

  return (
    <>
      {/* <ToastNotification oc={} /> */}

      <h2>Product Details</h2>

      {product && (
        <div>
          <p>{product.title}</p>
          <p>€{product.price}</p>

          {/* CTA */}
          <Row>
            <Col md={4}>
              <Form.Select value={selectedQuantity} onChange={handleQuantityChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Form.Select>
            </Col>

            <Col md={2}>
              <Button variant="success" onClick={handleAddToCartClick}>
                Add To Cart
              </Button>
            </Col>
          </Row>
        </div>
      )}

      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Added to your Shopping Cart</Toast.Body>
      </Toast>
    </>
  );
}

export default ProductDetails;
