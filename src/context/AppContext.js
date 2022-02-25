import { useState, useContext, createContext } from "react";

const AppContext = createContext();

// This syntax is to create custom hooks
export const useAppContext = () => useContext(AppContext);

function AppContextProvider(props) {
  const [count, setCount] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [visibility, setVisibility] = useState("hidden");
  const [cartView, setCartView] = useState("hidden");
  const [emptyCartView, setEmptyCartView] = useState("hidden");

  //logics
  const increaseCount = () => {
    setCount(() => count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(() => count - 1);
    }
  };

  const addToCart = () => {
    if (emptyCartView === "visible") {
      setEmptyCartView("hidden");
      setCartView("visible");
      setItemQuantity(count);
    } else {
      setItemQuantity(count);
    }
  };

  const openMenu = () => {
    setVisibility("visible");
  };

  const closeMenu = () => {
    setVisibility("hidden");
  };

  const showCart = () => {
    if (emptyCartView === "hidden" && itemQuantity === 0) {
      setEmptyCartView("visible");
    } else if (cartView === "hidden" && itemQuantity > 0) {
      setCartView("visible");
    } else {
      setCartView("hidden");
      setEmptyCartView("hidden");
    }
  };

  const deleteItems = () => {
    setCartView("hidden");
    setEmptyCartView("visible");
    setItemQuantity(0);
  };

  const value = {
    count,
    itemQuantity,
    visibility,
    cartView,
    emptyCartView,
    deleteItems,
    increaseCount,
    decreaseCount,
    addToCart,
    openMenu,
    closeMenu,
    showCart,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;
