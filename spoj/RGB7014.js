function findTime(hour, minute, sec) {
  let second = hour * 3600 + minute * 60 + sec;
  console.log(second);
}
let time = findTime(1, 2, 3);
