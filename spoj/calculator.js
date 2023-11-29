function calculate(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  } else if (operation == "-") {
    answer = num1 - num2;
  } else if (operation == "/") {
    answer = num1 / num2;
  } else if (operation == "*") {
    answer = num1 * num2;
  } else if (operation == "%") {
    answer = num1 % num2;
  }
  return answer;
}
let Answer = calculate(30, 20, "%");
console.log(Answer);
