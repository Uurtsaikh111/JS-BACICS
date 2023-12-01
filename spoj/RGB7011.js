function findTime(num) {
  let minute = parseInt(num / 60);
  let sec = num % 60;
  console.log(minute, sec);
}
findTime(320);
