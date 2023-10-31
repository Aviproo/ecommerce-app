import Cart from "../Cart/Cart";
import About from "./About";
import Home from "./Home";
import Store from "./Store";
import classes from "./MainHeader.module.css";
import Generics from "./Generics";

const MainHeader = () => {
  return (
    <>
      <div className={classes.mainHeader}>
        <div className={classes.header}>
          <Home />
          <Store />
          <About />
        </div>

        <Cart />
      </div>
      <Generics />
    </>
  );
};
export default MainHeader;
