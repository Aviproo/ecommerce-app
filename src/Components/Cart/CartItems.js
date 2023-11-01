import { Button } from "react-bootstrap";
import classes from "./CartItem.module.css";
import { useContext } from "react";
import Context from "../../store/Context";

const CartItem = () => {
  const ctx = useContext(Context);
  console.log(ctx.items);

  const itemsOfCart = (
    <div>
      <div className={classes.cartItem}>
        <div className={classes.cart}>Cart</div>
        <div className={classes.itemPriceQuantity}>
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>
        {ctx.items.map((item) => (
          <div key={item.quantity}>
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
        <div>Total Price:0</div>
      </div>
    </div>
  );
  return <div>{itemsOfCart}</div>;
};
export default CartItem;
