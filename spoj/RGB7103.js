function findNum(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c);
  }
}
let numbers = findNum(1, 3, 2);
