function doSomething(input) {
  return input * input;
}

function findDay(num) {
  if (num == 1) {
    return "Monday";
  }
}
let dayInText = findDay(1);
console.log(dayInText);

function findMounth(num) {
  if (num <= 31) {
    return "January";
  } else if (num < 31 + 28) {
    return "February";
  } else if (num < 31 + 28 + 30) {
    return "March:";
  } else if (num < 31 + 28 + 61) {
    return "April";
  } else if (num < 31 + 28 + 91) {
    return "May";
  } else if (num < 31 + 28 + 122) {
    return "June";
  } else if (num < 31 + 28 + 152) {
    return "July";
  } else if (num < 31 + 28 + 183) {
    return "August";
  } else if (num < 31 + 28 + 213) {
    return "September";
  } else if (num < 31 + 28 + 244) {
    return "October";
  } else if (num < 31 + 28 + 274) {
    return "November";
  }
}
let mounthInText = findMounth(70);
console.log(mounthInText);

function avg(num) {
  if (num < 60) return "F";
}

let midterm11 = 90;
let midterm22 = 50;
let finel1 = 50;

let division = (midterm11 + midterm22 + finel1 + finel1) / 4;
let result = avg(division);
console.log(result);
