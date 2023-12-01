function findNum(num) {
  let a = (num - (num % 100)) / 100;
  let b = ((num % 100) - ((num % 100) % 10)) / 10;
  let c = (num % 100) % 10;
  let answer = a + b + c;
  return answer;
}
let answer = findNum(123);
console.log(answer);
