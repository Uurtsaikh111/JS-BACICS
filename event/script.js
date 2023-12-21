const root = document.getElementById("root");

const header = document.createElement("div");
header.setAttribute("class", "head");
root.appendChild(header);
const startButton = document.createElement("button");
startButton.innerText = "Start";
const resetButton = document.createElement("button");
resetButton.innerText = "New game";
const score = document.createElement("span");
let chanceNum = 3;
let scoreNum = 0;
score.innerText = "Score:" + scoreNum;
const chance = document.createElement("span");
// const chanceNum = document.createElement("span");
// chanceNum.innerText = 3;
chance.innerText = "Chance:" + chanceNum;
// chance.appendChild(chanceNum);

header.appendChild(startButton);
header.appendChild(resetButton);
header.appendChild(score);
header.appendChild(chance);

const innerBody = document.createElement("div");
innerBody.setAttribute("class", "innerBody");
root.appendChild(innerBody);
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", reset);

function reset() {
  innerBody.innerHTML = "";
  //innerBody.appendChild(box);
}

function startGame() {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const diffColor = Math.floor(Math.random() * 8);
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red - 50},${green},${blue})`;

  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `cardId${i}`);

    if (i == diffColor) {
      card.style.backgroundColor = randomColor;
    } else card.style.backgroundColor = differentColor;
    box.appendChild(card);
  }
  innerBody.innerHTML = "";
  innerBody.appendChild(box);
  const correctBox = document.getElementById(`cardId${diffColor}`);
  correctBox.addEventListener("click", startGame);
  correctBox.addEventListener("click", scoreAdd);

  const incorrectBox = document.getElementById(`cardId${i}`);
  incorrectBox.addEventListener("click", chanceLower);
}
function scoreAdd() {
  scoreNum = scoreNum + 1;
  score.innerText = "Score:" + scoreNum;
}

function chanceLower() {
  chanceNum = chanceNum + 1;
  chance.innerText = "Chance:" + chanceNum;
}
//localStorage.setItem("item", "200");
//console.log(localStorage.getItem("item"));
