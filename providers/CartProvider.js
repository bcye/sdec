import { getCart, updateCart } from "../utils/cart";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  refreshCart: () => {},
  addToCart: (productObj) => {},
  removeFromCart: (productObj) => {},
  emptyCart: () => {},
});

function CartProvider({ children }) {
  let [cart, setCart] = useState([]);
  let [isInitialised, setIsInitialised] = useState(false);

  useEffect(() => {
    !isInitialised && initialiseCart();
    setIsInitialised(true);

    syncWithStorage();
  }, [cart]);

  function initialiseCart() {
    setCart(getCart());
    syncWithStorage();
  }
  function syncWithStorage() {
    updateCart(cart);
  }

  function addToCart(productObj) {
    setCart([...cart, productObj]);
  }

  function removeFromCart(priceId) {
    setCart(cart.filter((item) => item.priceId !== priceId));
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        refreshCart: updateCart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        emptyCart: emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
