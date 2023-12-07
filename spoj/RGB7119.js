function findSeason(n) {
  if (n <= 2) {
    return "Winter";
  } else if (n >= 3 && n <= 5) {
    return "Spring";
  } else if (n >= 6 && n <= 8) {
    return "Summer";
  } else if (n >= 9 && n <= 11) {
    return "Fall";
  } else if (n == 12) {
    return "Winter";
  } else return "error";
}
let answer = findSeason(8);
console.log(answer);
