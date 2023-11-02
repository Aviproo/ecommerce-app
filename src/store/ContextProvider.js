import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [addedItem, setAddedItem] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  const addItem = (item) => {
    setAddedItem([...addedItem, item]);
    setCartNum(data.items.length + 1);
  };
  const removeItem = (id) => {};

  const data = {
    cartNum: cartNum,
    items: addedItem,
    addItem: addItem,
    removeItem: removeItem,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default ContextProvider;
