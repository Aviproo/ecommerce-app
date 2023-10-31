import { Button } from "react-bootstrap";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes.items}>
      <h5>{props.title}</h5>

      <img src={props.imageUrl} />

      <div className={classes.priceButton}>
        <div className={classes.price}>{props.price} </div>
        <Button>ADD TO CART</Button>
      </div>
    </div>
  );
};
export default Item;
