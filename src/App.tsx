import Banner from "./components/Banner";
import Experience from "./components/Experience";
import FeelSpecial from "./components/FeelSpecial";
import Hero from "./components/Hero";
import MobileScroll from "./components/MobileScroll";
import Parallax from "./components/Parallax";
import Product from "./components/Product";
import Rating from "./components/Rating";
import Security from "./components/Security";
import Trust from "./components/Trust";

const App = () => {
  return (
    <div className="font-Questrial box-border bg-[#0f0f0f]">
      <Hero />
      <Product />
      <FeelSpecial />
      <Banner />
      <Experience />
      <MobileScroll />
      <Parallax />
      <Security />
      <Trust />
      <Rating />
    </div>
  );
};

export default App;
