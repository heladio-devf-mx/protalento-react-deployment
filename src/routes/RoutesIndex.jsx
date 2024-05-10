import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Tyc from '../pages/Tyc';
import Login from '../pages/Login';
import CategoryPage from '../pages/CategoryPage';
import Category from '../components/Category';

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/terminos' element={<Tyc />} />
      <Route path='/login' element={<Login />} />
      <Route path='/categories/' element={<CategoryPage />} />
      <Route path='/category/:categoryId' element={<Category />} />
    </Routes>
  );
}
