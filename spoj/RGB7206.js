function findSum(n, l) {
  let sum = 0;
  for (let i = 0; i < n; i = i + 1) {
    sum = sum + l;
  }
  console.log(sum);
}
findSum(6, 100);
