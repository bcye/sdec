import Base from "../components/base";
import Card from "../components/card";
import getAllProducts from "../lib/get-products";

export default function Home({ products }) {
  return (
    <Base>
      <div className={"grid"}>
        {products.map((product) => (
          <Card key={product.priceId} product={product} instantActions />
        ))}
      </div>
    </Base>
  );
}

export async function getStaticProps(context) {
  let products = await getAllProducts();

  return {
    props: { products: products },
  };
}
