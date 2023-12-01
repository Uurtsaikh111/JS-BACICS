function findFive(a, b, c) {
  let result = 0;
  if (a == 5) result = result + 1;
  if (b == 5) result = result + 1;
  if (c == 5) result = result + 1;
  return result;
}
let answer = findFive(2, 3, 5);
console.log(answer);
