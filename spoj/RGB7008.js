function findNum(a) {
  let number = ((a % 100) - ((a % 100) % 10)) / 10;
  return number;
}
let secondNum = findNum(423);
console.log(secondNum);
