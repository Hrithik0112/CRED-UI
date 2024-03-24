import Banner from "./components/Banner";
import Experience from "./components/Experience";
import FeelSpecial from "./components/FeelSpecial";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Product from "./components/Product";
import Security from "./components/Security";

const App = () => {
  return (
    <div className="font-Questrial min-h-screen max-w-screen-2xl bg-[#0f0f0f] ">
      <Hero />
      <Product />
      <FeelSpecial />
      <Banner />
      <Experience />
      <Parallax />
      <Security />
    </div>
  );
};

export default App;
