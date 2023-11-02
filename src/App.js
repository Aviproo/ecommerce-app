import "./App.css";
import { BrowserRouter } from "react-router-dom";

import MainHeader from "./Components/Header/MainHeader";
import Product from "./Components/Product";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <MainHeader />
          <Product />
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
