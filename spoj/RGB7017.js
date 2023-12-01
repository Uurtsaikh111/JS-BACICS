function findYear(num) {
  let year = parseInt(num / 12);
  let mounth = num % 12;
  console.log(year, mounth);
}
let answer = findYear(27);
