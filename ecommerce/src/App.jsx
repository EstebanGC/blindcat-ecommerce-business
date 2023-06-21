import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { ProductFormPage } from './pages/ProductFormPage';
import { BuyPage } from './pages/BuyPage';
import { BuyFormPage } from './pages/BuyFormPage';

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products-create" element={<ProductFormPage />} />        
            <Route path="/buys" element={<BuyPage />} />
            <Route path="/buys-create" element={<BuyFormPage />} />
          </Routes>
    
    </BrowserRouter>
  );
}

export default App;