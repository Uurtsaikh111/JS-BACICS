function test(a) {
  if (a > 3) {
    return "pass";
  } else if (a > 5) {
    return "error";
  } else return "unpass";
}
let answer = test(7);
console.log(answer);
