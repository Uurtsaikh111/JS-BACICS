function findResult(n) {
  if (n == 5) {
    return "better";
  } else if (n == 4) {
    return "good";
  } else if (n == 3) {
    return "not bad";
  } else if (n == 2) {
    return "bad";
  } else return "error";
}
let answer = findResult(1);
console.log(answer);
