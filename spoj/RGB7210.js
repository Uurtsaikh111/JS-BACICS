function findProduct(n) {
  if (n >= 1 && n <= 10)
    for (let i = 1; i <= 10; i = i + 1) {
      console.log(n + "*" + i + "=" + n * i);
    }
}
findProduct(4);
