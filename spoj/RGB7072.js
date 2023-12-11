function findSum(num) {
  for (let i = 0; i <= 10; i = i + 1) {
    let sum = 0;
    let sums = [];
    if (!num % 2 == 0) {
      sum = sum + 1;
      sums[sum] = i;
      console.log(sums);
    }
  }
}
findSum(9);
