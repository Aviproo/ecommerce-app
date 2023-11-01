import { Button } from "react-bootstrap";
import classes from "./Item.module.css";
import { useContext } from "react";
import Context from "../store/Context";

const Item = (props) => {
  const ctx = useContext(Context);
  const itemHandeler = () => {
    const collectedData = {
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
    };
    ctx.addItem(collectedData);
  };
  return (
    <div className={classes.items} key={props.id}>
      <h5>{props.title}</h5>
      <img src={props.imageUrl} />

      <div className={classes.priceButton}>
        <div className={classes.price}>{props.price} </div>
        <Button onClick={itemHandeler}>ADD TO CART</Button>
      </div>
    </div>
  );
};
export default Item;
