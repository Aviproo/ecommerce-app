import { Button } from "react-bootstrap";
import classes from "./CartItem.module.css";
import { useContext, useState } from "react";
import Context from "../../store/Context";

const CartItem = () => {
  const ctx = useContext(Context);
  const [showCart, setShowCart] = useState(true);

  const showCartHandeler = () => {
    setShowCart(false);
  };

  const removehandeler = (a) => {
    ctx.removeItem(a);
  };

  let price = 0;
  for (let i = 0; i < ctx.items.length; i++) {
    price += ctx.items[i].price;
  }

  const itemsOfCart = (
    <div>
      <div className={classes.cartItem}>
        <div className={classes.cart}>
          Cart
          <button className={classes.closeBtn} onClick={showCartHandeler}>
            X
          </button>
        </div>

        <div className={classes.itemPriceQuantity}>
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>
        {ctx.items.map((item, i) => (
          <div key={i}>
            <div className={classes.cartOneItem}>
              <img src={item.imageUrl} className={classes.image} />
              <div className={classes.title}>{item.title}</div>
              <div className={classes.title}>{item.price}</div>
              <div className={classes.title}>{item.quantity}</div>
              <Button
                variant="danger"
                className={classes.button}
                onClick={() => removehandeler(i)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
        <div>
          <h4>Total Price:₹{price}</h4>
        </div>
      </div>
    </div>
  );
  return <div>{showCart && itemsOfCart}</div>;
};
export default CartItem;
