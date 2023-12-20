import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/p/:id" element={<ProductDetails />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
