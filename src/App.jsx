import "./App.css";
import LineCharts from "./components/LineCharts";
import NavBar from "./components/NavBar";
import PriceOptions from "./components/PriceOptions";
import Quote from "./components/Quote";
import Cards from "./daisy-components/Cards";
import Hero from "./daisy-components/Hero";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <h1 className="text-center mt-4 text-4xl font-semibold text-violet-400">
        React with tailwind and daisyUI
      </h1>
      <Hero />
      <Cards />
      <PriceOptions />
      <LineCharts />
      <Quote />
    </div>
  );
}

export default App;
