import renderPrice from "./render-price";
const stripe = require("stripe")(process.env.STRIPE_SK);

async function getAllProducts() {
  let products = (await stripe.products.list()).data;
  products = await Promise.all(
    products.map(async (product) => {
      let price = (
        await stripe.prices.list({
          limit: 1,
          product: product.id,
        })
      ).data[0];
      return {
        title: product.name,
        description: product.description,
        image: product.images[0],
        currency: price.currency,
        amount: price.unit_amount,
        priceId: price.id,
        quantity: 1,
        priceDescription: renderPrice(price),
        isRecurring: price.recurring != null,
      };
    })
  );

  return products;
}

export default getAllProducts;
