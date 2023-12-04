function findTriangle(a, b, c) {
  if (a ** 2 + b ** 2 === c ** 2) {
    return "YES";
  } else return "NO";
}
let answer = findTriangle(3, 3, 5);
console.log(answer);
