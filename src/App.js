import "./App.css";
import MenuModalContainer from "./components/MenuModalContainer";
import NavBar from "./components/NavBar";
import ProductInfo from "./components/ProductInfo";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <div className="App">
      <MenuModalContainer />
      <NavBar />
      <SlideBar />
      <ProductInfo />
    </div>
  );
}

export default App;
