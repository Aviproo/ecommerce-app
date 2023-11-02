import Cart from "../Cart/Cart";
import About from "./About";
import Home from "./Home";
import Store from "./Store";
import classes from "./MainHeader.module.css";
import Generics from "./Generics";
import { useState } from "react";
import CartItem from "../Cart/CartItems";
import { Routes, Route, NavLink } from "react-router-dom";

const MainHeader = () => {
  const [ShowCartItem, setShowCartItem] = useState();
  const showCartHandeler = () => {
    setShowCartItem(!ShowCartItem);
  };
  return (
    <>
      <div className={classes.mainHeader}>
        <div className={classes.header}>
          <NavLink
            to="/Home"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            <Home />
          </NavLink>
          <NavLink
            to="/Store"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            <Store />
          </NavLink>
          <NavLink
            to="/About"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            <About />
          </NavLink>

          <Routes>
            <Route exact path="/" element={<Store />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </div>
        <Cart click={showCartHandeler} />
      </div>
      {ShowCartItem && <CartItem />}
      <Generics />
    </>
  );
};
export default MainHeader;
