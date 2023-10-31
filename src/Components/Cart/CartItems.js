import { Button } from "react-bootstrap";
import classes from "./CartItem.module.css";
import { useState } from "react";
const CartItem = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow ",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const [showCart, setShowCart] = useState(false);

  const itemsOfCart = (
    <div className={classes.cartItem}>
      <div className={classes.cart}>Cart</div>
      <div className={classes.itemPriceQuantity}>
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
      {cartElements.map((item) => (
        <div>
          <div className={classes.cartOneItem}>
            <img src={item.imageUrl} className={classes.image} />
            <div className={classes.title}>{item.title}</div>
            <div className={classes.title}>{item.price}</div>
            <div className={classes.title}>{item.quantity}</div>
            <Button variant="danger" className={classes.button}>
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
  return <div>{itemsOfCart}</div>;
};
export default CartItem;
