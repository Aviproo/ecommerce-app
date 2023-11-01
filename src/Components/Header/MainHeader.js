import Cart from "../Cart/Cart";
import About from "./About";
import Home from "./Home";
import Store from "./Store";
import classes from "./MainHeader.module.css";
import Generics from "./Generics";
import { useState } from "react";
import CartItem from "../Cart/CartItems";

const MainHeader = () => {
  const [ShowCartItem, setShowCartItem] = useState();
  const showCartHandeler = () => {
    setShowCartItem(!ShowCartItem);
  };
  return (
    <>
      <div className={classes.mainHeader}>
        <div className={classes.header}>
          <Home />
          <Store />
          <About />
        </div>
        <Cart click={showCartHandeler} />
      </div>
      {ShowCartItem && <CartItem />}
      <Generics />
    </>
  );
};
export default MainHeader;
