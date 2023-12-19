import { Routes, Route } from "react-router-dom";
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/products/1" element={<ProductDetails />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
