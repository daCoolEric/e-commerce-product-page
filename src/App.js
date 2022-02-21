import "./App.css";
import NavBar from "./components/NavBar";
import ProductInfo from "./components/ProductInfo";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SlideBar />
      <ProductInfo />
    </div>
  );
}

export default App;
