function findNum(a, b, c, d) {
  if (a < b && a < c && a < d) {
    console.log(a);
  } else if (b < c && b < d) {
    console.log(b);
  } else if (c < d) {
    console.log(c);
  } else if (d) {
    console.log(d);
  }
}
findNum(3, 2, 1, 4);
