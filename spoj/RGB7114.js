function findNum(a, b, c) {
  function checkNum(num) {
    if (num % 2 == 0) {
      return "YES";
    } else return "NO";
  }
  let result = checkNum(a);
  console.log(result);
  let result1 = checkNum(b);
  console.log(result1);
  let result2 = checkNum(c);
  console.log(result2);
}
findNum(3, 4, 5);
