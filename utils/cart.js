var storage = null;
if (typeof window != "undefined") {
  storage = window.localStorage;
}

export function getCart() {
  if (typeof window != "undefined") {
    if (storage.getItem("cart")) {
      return JSON.parse(storage.getItem("cart")).cart;
    } else {
      return [];
    }
  } else {
    return [];
  }
}

export function updateCart(cart) {
  if (typeof window != "undefined") {
    storage.setItem("cart", JSON.stringify({ cart: cart }));
  }
}
