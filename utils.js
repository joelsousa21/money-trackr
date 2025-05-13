function rounded(value) {
  return Math.round(value * 100) / 100;
}

function moneyFormat(value) {
  return Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(value);
}
