function findProduct(n, b) {
  let product = 1;
  for (let i = 1; i <= n; i = i + 1) {
    product = product * b;
  }
  console.log(product);
}
findProduct(4, 3);
