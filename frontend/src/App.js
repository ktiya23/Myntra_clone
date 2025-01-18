import './App.css';
import Header from './components/HeaderPart/Header';
import ImageSlider from './components/ImageSliderPart/ImageSlider';
import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import WishListPage from './components/Pages/WishListPage';
import ShopByCategory from './components/ShopByCategory/ShopByCategory';
import Top from './components/TopPart/Top';
import { Routes, Route } from 'react-router-dom'; // Correct imports for Routes and Route

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
