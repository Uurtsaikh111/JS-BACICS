function findProduct(n, b) {
  let product = 0;
  for (let i = 0; i < n; i = i + 1) {
    product = product + b;
  }
  console.log(product);
}
findProduct(6, 50);
