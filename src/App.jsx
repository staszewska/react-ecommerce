import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/p/:id" element={<ProductDetails />} />
        <Route path="/s" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}

export default App;