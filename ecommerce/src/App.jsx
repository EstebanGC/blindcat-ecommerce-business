import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { ProductFormPage } from './pages/ProductFormPage';
import { BuyPage } from './pages/BuyPage';
import { BuyFormPage } from './pages/BuyFormPage';
import { Navigation } from './components/Navigation';
import { BuyNavigation } from './components/BuyNavigation';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
          <Routes>
            <Route path="/products/*" element={<Navigation />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products-create" element={<ProductFormPage />} />        
           </Routes>
      </div>
      <div>
        <BuyNavigation/>
          <Routes>
            <Route path="/buys/*" element={<BuyNavigation />} />
            <Route path="/buys" element={<BuyPage />} />
            <Route path="/buys-create" element={<BuyFormPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;