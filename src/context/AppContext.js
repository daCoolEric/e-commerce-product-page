import { useState, useContext, createContext } from "react";

const AppContext = createContext();

// This syntax is to create custom hooks
export const useAppContext = () => useContext(AppContext);

function AppContextProvider(props) {
  const [count, setCount] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

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
    setItemQuantity(count);
  };

  const value = {
    count,
    itemQuantity,
    increaseCount,
    decreaseCount,
    addToCart,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;
