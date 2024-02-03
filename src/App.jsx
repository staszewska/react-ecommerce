import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import ProductCategoryList from './components/ProductCategoryList';
import PageNotFound from './components/PageNotFound';
import OrderCreated from './components/OrderCreated';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/p/:id" element={<ProductDetails />} />
        <Route path="/s" element={<ShoppingCart />} />
        <Route path="/c" element={<Checkout />} />
        <Route path="/ok" element={<OrderCreated />} />
        <Route path="/categories" element={<ProductCategoryList />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
