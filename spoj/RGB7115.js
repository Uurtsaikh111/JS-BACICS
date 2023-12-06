function test(a) {
  if (a > 3 && a <= 5) {
    return "pass";
  } else if (a < 4) {
    return "unpass";
  } else return "error";
}
let answer = test(6);
console.log(answer);
