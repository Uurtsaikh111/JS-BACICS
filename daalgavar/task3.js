function findResult(a) {
  for (let i = a; i >= 0; i = i - 3) {
    console.log(i);
  }
}
findResult(10);

function findAnswer(a, b) {
  if (a > b) {
    max = a;
    min = b;
  } else max = b;
  min = a;
  console.log(min, max);

  for (let i = b; i <= a; i = i + 1) {
    console.log(i);
  }
}
findAnswer(15, 9);
