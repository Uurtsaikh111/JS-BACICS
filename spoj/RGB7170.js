function findDoor(a, b, c) {
  if (c >= 1 && c <= 4) {
    return 1;
  } else if (c >= 5 && c <= 8) {
    return 2;
  } else if (c >= 9 && c <= 12) {
    return 3;
  }
}
let answer = findDoor(5, 4, 10);

console.log(answer);
