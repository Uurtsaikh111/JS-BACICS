function findNum(a) {
  let sum = 1;
  for (let i = 1; i <= a; i = i + 1) {
    sum = sum * i;
  }
  console.log(sum);
}
findNum(5);
