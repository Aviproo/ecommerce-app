import { Button } from "react-bootstrap";
const Cart = () => {
  const clickHandeler = () => {
    console.log("click");
  };
  return (
    <Button onClick={clickHandeler}>
      Cart<sup>0</sup>
    </Button>
  );
};
export default Cart;
