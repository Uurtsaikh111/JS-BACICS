function findTime(num) {
  let hour = parseInt(num / 3600);
  let minute = num % 3612;
  let sec = num % 3600;
  console.log(hour, minute, sec);
}
let time = findTime(3612);
