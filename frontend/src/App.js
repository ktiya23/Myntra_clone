import './App.css';
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
    </div>
  );
}

export default App;
