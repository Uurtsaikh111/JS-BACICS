function findNum(num) {
  let a = num % 10;
  let b = (num - a) / 10;
  let answer = a * b;
  return answer;
}
let answer = findNum(27);
console.log(answer);
