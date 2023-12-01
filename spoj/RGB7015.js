function findDay(num) {
  let day = parseInt(num / 24);
  let hour = num % 24;
  console.log(day, hour);
}
let answer = findDay(44);
