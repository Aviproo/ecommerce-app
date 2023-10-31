import "./App.css";
import CartItem from "./Components/Cart/CartItems";
import MainHeader from "./Components/Header/MainHeader";
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <CartItem />
      <Product />
    </div>
  );
}

export default App;
