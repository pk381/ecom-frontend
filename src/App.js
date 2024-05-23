import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Products from "./Components/Products/Products";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";
import one from './Components/Assets/1.png'
import two from './Components/Assets/2.png'
import three from './Components/Assets/3.png'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductPage/>
      <Carousel>
        <img src={three} alt="placeholder" />
        <img src={two} alt="placeholder" />
        <img src={one} alt="placeholder" />
      </Carousel>

     <Products></Products>

     <Footer></Footer>
    </div>
  );
}

export default App;
