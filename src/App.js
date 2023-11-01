import "./App.css";

import MainHeader from "./Components/Header/MainHeader";
import Product from "./Components/Product";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <MainHeader />
        <Product />
      </div>
    </ContextProvider>
  );
}

export default App;
