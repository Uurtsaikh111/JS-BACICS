function findResult(n) {
  if (n < 60) {
    return "F";
  } else if (n < 70) {
    return "D";
  } else if (n < 80) {
    return "C";
  } else if (n < 90) {
    return "B";
  } else if (n <= 100) {
    return "A";
  } else return "error";
}
let answer = findResult(101);
console.log(answer);
