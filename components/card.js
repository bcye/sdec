import checkout from "../utils/checkout";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

function Card({ product, instantActions, cartActions }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className={"card"}>
      <img src={product.image} />

      <h3>
        <Link href={"/p/" + product.priceId}>
          <a>
            {" "}
            {product.title} ({product.priceDescription}) &rarr;
          </a>
        </Link>
      </h3>
      <p>{product.description}</p>
      {instantActions && (
        <div className={"button-group"}>
          <button onClick={async (e) => await checkout([product])}>
            Buy Now
          </button>
          <button onClick={(e) => addToCart(product)}>Add To Cart</button>
        </div>
      )}
      {cartActions && (
        <div className={"button-group"}>
          <button onClick={(e) => removeFromCart(product.priceId)}>
            Remove From Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
