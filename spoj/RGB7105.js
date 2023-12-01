function product(a, b, c, d) {
  let result = 0;
  if (a > 80) result = result + a;
  if (b > 80) result = result + b;
  if (c > 80) result = result + c;
  if (d > 80) result = result + d;

  return result;
}
let answer = product(85, 75, 96, 69);
console.log(answer);
