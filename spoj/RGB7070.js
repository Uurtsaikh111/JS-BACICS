function findSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i = i + 1) {
    sum = sum + i;
  }
  console.log(sum);
}
findSum(10);
