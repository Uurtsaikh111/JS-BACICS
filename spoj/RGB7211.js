function findResult(a, l) {
  sum = a;
  if (a >= 1 && a <= 10)
    for (let i = 1; i <= l; i = i + 1) {
      console.log(a + "^" + i + "=" + sum);
      sum = sum * a;
    }
}
findResult(3, 5);
