let randomNumb = (document.getElementById("rando").innerText = Math.floor(
  Math.random() * 100 + 1
));

function search() {
  let inpNum = Number(document.getElementById("num").value);
  if (inpNum > randomNumb) {
    document.getElementById("result").innerText = "Number is greater";
  } else if (inpNum < randomNumb) {
    document.getElementById("result").innerText = "Number is lesser";
  } else {
    document.getElementById("result").innerText = "Congrats";
  }
}
function newNum() {
  randomNumb =
    randomNumb =
    document.getElementById("rando").innerText =
      Math.floor(Math.random() * 100 + 1);
  document.getElementById("result").innerText = "";
  document.getElementById("num").value = "";
}
