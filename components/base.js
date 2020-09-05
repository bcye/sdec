import { getCart } from "../utils/cart";
import Link from "next/link";
import { CartContext } from "../providers/CartProvider";
import { useContext } from "react";

function Base({ children }) {
  let { cart } = useContext(CartContext);

  return (
    <div className={"container"}>
      <header className={"header nav"}>
        <div>
          <div>
            <h2>
              <Link href={"/"}>
                <a>Demo Shop</a>
              </Link>
            </h2>
          </div>
          <div>
            <Link href={"/cart"}>
              <a>Your Cart ({cart.length})</a>
            </Link>
          </div>
        </div>
      </header>
      <main className={"main"}>{children}</main>

      <footer className={"footer nav"}>
        <div>
          <div>
            <a href="https://roettgers.co">Developed by Bruce Röttgers</a>
          </div>
          <div>
            <a href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href={process.env.NEXT_PUBLIC_TERMS_OF_SERVICE_URL}>
              Terms Of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Base;
