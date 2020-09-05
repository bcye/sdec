const stripe = require("stripe")(process.env.STRIPE_SK);

export default async (req, res) => {
  const products = req.body;

  const isSubscription =
    products.filter((product) => product.isRecurring).length > 0;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: products.map((product) => ({
      price: product.priceId,
      quantity: Number(product.quantity),
    })),
    mode: isSubscription ? "subscription" : "payment",
    success_url: `https://${process.env.DOMAIN}/success`,
    cancel_url: `https://${process.env.DOMAIN}/cancel`,
  });

  res.status(200).json({ id: session.id });
};
