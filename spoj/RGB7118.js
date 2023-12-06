function findDay(n) {
  if (1 == n) {
    return "Monday";
  } else if (2 == n) {
    return "Tuesday";
  } else if (3 == n) {
    return "Wednesday";
  } else if (4 == n) {
    return "Thursday";
  } else if (5 == n) {
    return "Friday";
  } else if (6 == n) {
    return "Saturday";
  } else if (7 == n) {
    return "Sunday";
  } else return "error";
}
let answer = findDay(8);
console.log(answer);
