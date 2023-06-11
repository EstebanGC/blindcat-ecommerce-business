import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { ProductFormPage } from './pages/ProductFormPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigation to="/products" />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products-create" element={<ProductFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
