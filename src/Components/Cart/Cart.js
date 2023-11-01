import { useContext } from "react";
import { Button } from "react-bootstrap";
import Context from "../../store/Context";
const Cart = (props) => {
  const ctx = useContext(Context);
  return (
    <Button onClick={props.click}>
      Cart<sup>{ctx.cartNum}</sup>
    </Button>
  );
};
export default Cart;
