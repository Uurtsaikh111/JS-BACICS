function product(a, b, c, d) {
  let result = 1;
  if (a < 5) result = result * a;
  if (b < 5) result = result * b;
  if (c < 5) result = result * c;
  if (d < 5) result = result * d;
  return result;
}
let answer = product(3, 6, 2, 4);
console.log(answer);
