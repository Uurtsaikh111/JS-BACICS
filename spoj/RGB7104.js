function findNum(a, b, c, d) {
  if (a > b && a > c && a > d) {
    console.log(a);
  } else if (b > a && b > c && b > d) {
    console.log(b);
  } else if (c > b && c > a && c > d) {
    console.log(c);
  } else if (d > b && d > c && d > a) {
    console.log(d);
  }
}
findNum(1, 2, 1, 4);
