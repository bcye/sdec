import Base from "../components/base";
import Card from "../components/card";
import checkout from "../utils/checkout";
import { CartContext } from "../providers/CartProvider";
import { useContext } from "react";

function Cart() {
  let { cart } = useContext(CartContext);

  return (
    <Base>
      <h2 className={"text-center"}>Your Cart</h2>
      {cart.length != 0 && (
        <div className={"button-group"}>
          <button onClick={(e) => checkout(cart)}>Checkout</button>
        </div>
      )}

      <div className={"grid"}>
        {cart.length != 0 ? (
          cart.map((item) => (
            <Card key={item.priceId} product={item} cartActions />
          ))
        ) : (
          <p className={"text-center"}>
            Your cart is empty. Please add items to your cart.
          </p>
        )}
      </div>
    </Base>
  );
}

export default Cart;
