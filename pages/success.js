import Base from "../components/base";
import Link from "next/link";
import { useEffect, useContext } from "react";
import { CartContext } from "../providers/CartProvider";

function Success() {
  let { emptyCart } = useContext(CartContext);

  return (
    <Base>
      <h2>Your Purchase Was Successful.</h2>
      <Link href={"/"}>
        <a onClick={emptyCart}>Clear cart and return to /</a>
      </Link>
    </Base>
  );
}

export default Success;
