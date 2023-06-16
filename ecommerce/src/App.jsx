import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { ProductFormPage } from './pages/ProductFormPage';
import { Navigation } from './components/Navigation';
import { BuyPage } from './pages/BuyPage';
import { BuyNavigation } from './components/BuyNavigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigation to="/products" />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products-create" element={<ProductFormPage />} />ç
        <Route path="/" element={<BuyNavigation to="buys"/>}/>
        <Route path="/buys" element={<BuyPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
