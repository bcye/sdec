import { loadStripe } from "@stripe/stripe-js";

async function checkout(products) {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

  const response = await fetch("/api/checkout", {
    method: "POST",
    body: JSON.stringify(products),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const session = await response.json();

  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    alert(result.error.message);
  }
}

export default checkout;
