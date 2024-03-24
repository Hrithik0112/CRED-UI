import FeelSpecial from "./components/FeelSpecial";
import Hero from "./components/Hero";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="font-Questrial min-h-screen w-screen bg-[#0f0f0f] ">
      <Hero />
      <Product />
      <FeelSpecial />
    </div>
  );
};

export default App;
