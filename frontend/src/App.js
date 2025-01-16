import './App.css';
import Footer from './components/FooterPart/Footer';
import Header from './components/HeaderPart/Header';
import ImageSlider from './components/ImageSliderPart/ImageSlider';
import ShopByCategory from './components/ShopByCategory/ShopByCategory';
import Top from './components/TopPart/Top';

function App() {
  return (
    <div>
      <Header/>
      <Top />
      <ImageSlider/>
      <ShopByCategory/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
