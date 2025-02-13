import './App.css';
import Footer from './components/FooterPart/Footer';
import Header from './components/HeaderPart/Header';
import ImageSlider from './components/ImageSliderPart/ImageSlider';
import CartPage from './components/Pages/CartPage';
import LoginPage from './components/Pages/LoginPage';
import ProductDetailPage from './components/Pages/ProductDetailPage';
import SignupPage from './components/Pages/SignupPage';
import WishListPage from './components/Pages/WishListPage';
import ShopByCategory from './components/ShopByCategory/ShopByCategory';
import Top from './components/TopPart/Top';
import { Routes, Route, useLocation } from 'react-router-dom'; 

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Top />
              <ImageSlider />
              <ShopByCategory />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path='/wishlist' element={<WishListPage/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/category/:categoryID' element={<ProductDetailPage/>} />
      </Routes>
      {location.pathname !== "/cart" && location.pathname!=="/wishlist" && location.pathname!=="/login" && location.pathname!=="/signup" && location.pathname !== "/product-detail" && <Footer/>}
    </div>
  );
}

export default App;
