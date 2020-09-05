import renderPrice from "./render-price";

const stripe = require("stripe")(process.env.STRIPE_SK);

async function getProduct(priceId) {
  let price = await stripe.prices.retrieve(priceId);
  let product = await stripe.products.retrieve(price.product);

  return {
    title: product.name,
    description: product.description,
    image: product.images[0],
    currency: price.currency,
    amount: price.unit_amount,
    priceId: priceId,
    quantity: 1,
    priceDescription: renderPrice(price),
    isRecurring: price.recurring != null,
  };
}

export default getProduct;
