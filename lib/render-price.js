function renderPrice(priceObj) {
  let price =
    priceObj.currency.toUpperCase() + " " + priceObj.unit_amount / 100;
  if (priceObj.recurring) {
    if (priceObj.recurring.interval_count != 1) {
      price +=
        "each " +
        priceObj.recurring.interval_count +
        " " +
        priceObj.recurring.interval +
        "s";
    } else {
      price += " per " + priceObj.recurring.interval;
    }
  }

  return price;
}

export default renderPrice;
