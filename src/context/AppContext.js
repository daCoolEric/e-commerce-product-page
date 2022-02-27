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
  const [imageId, setImageId] = useState(0);

  //logics

  const nextImage = () => {
    if (imageId >= 0 && imageId <= 2) {
      setImageId(() => imageId + 1);
    }
  };

  const prevImage = () => {
    if (imageId <= 3 && imageId >= 1) {
      setImageId(() => imageId - 1);
    }
  };

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

  const firstImage = () => {
    setImageId(0);
  };
  const secondImage = () => {
    setImageId(1);
  };
  const thirdImage = () => {
    setImageId(2);
  };
  const fourthImage = () => {
    setImageId(3);
  };

  const value = {
    count,
    itemQuantity,
    visibility,
    cartView,
    emptyCartView,
    imageId,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    nextImage,
    prevImage,
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
