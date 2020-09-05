import Base from "../../components/base";
import getProduct from "../../lib/get-product";
import getAllProducts from "../../lib/get-products";
import checkout from "../../utils/checkout";
import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";

function Product({ product }) {
  let { addToCart } = useContext(CartContext);

  return (
    <Base>
      <div className={"product-detail"}>
        <div>
          <img src={product.image} alt={"Product Image"} />
        </div>
        <div>
          <h2>
            {product.title} ({product.priceDescription})
          </h2>
          <p>{product.description}</p>
          <div className={"button-group"}>
            <button onClick={(e) => checkout([product.priceId])}>
              Buy Now
            </button>
            <button onClick={(e) => addToCart(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </Base>
  );
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.id);

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllProducts();

  return {
    paths: allProducts.map((product) => "/p/" + product.priceId),
    fallback: false,
  };
}

export default Product;
