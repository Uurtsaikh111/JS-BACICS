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

chance.innerText = "Chance:" + chanceNum;

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
  scoreNum = 0;
  score.innerText = "Score:" + scoreNum;
  chanceNum = 3;
  chance.innerText = "Chance:" + chanceNum;
}

function startGame() {
  chanceNum = 3;
  chance.innerText = "Chance:" + chanceNum;
  //scoreNum = 0;
  //score.innerText = "Score:" + scoreNum;

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
    card.addEventListener("click", () => {
      if (!(diffColor == i)) {
        chanceNum--;
        chance.innerText = "Chance:" + chanceNum;
        if (chanceNum == 0) {
          const gameOver = document.createElement("img");
          gameOver.setAttribute("class", "gameOver");
          gameOver.src =
            "https:t4.ftcdn.net/jpg/02/11/54/33/360_F_211543376_kv7x0SwdITkWbqajGzglhcvZV25AsPsS.jpg";
          innerBody.innerHTML = "";
          innerBody.appendChild(gameOver);
        }
      }
    });
    if (i == diffColor) {
      card.style.backgroundColor = randomColor;
    } else {
      card.style.backgroundColor = differentColor;
    }

    box.appendChild(card);
  }

  innerBody.innerHTML = "";
  innerBody.appendChild(box);
  const correctBox = document.getElementById(`cardId${diffColor}`);
  correctBox.addEventListener("click", startGame);
  correctBox.addEventListener("click", () => {
    scoreNum++;
    score.innerText = "Score:" + scoreNum;
    if (scoreNum == 6) {
      const cong = document.createElement("img");
      cong.setAttribute("class", "cong");
      cong.src =
        "https://img.freepik.com/free-vector/card-template-with-fireworks-party-horns_1308-3021.jpg";

      innerBody.innerHTML = "";
      innerBody.appendChild(cong);
    }
  });
}
function scoreAdd() {
  scoreNum++;
  score.innerText = "Score:" + scoreNum;
  if (scoreNum == 6) {
    const cong = document.createElement("img");
    cong.setAttribute("class", "cong");
    cong.src =
      "https://img.freepik.com/free-vector/card-template-with-fireworks-party-horns_1308-3021.jpg";

    innerBody.innerHTML = "";
    innerBody.appendChild(cong);
  }
}
//localStorage.setItem("item", "200");
//console.log(localStorage.getItem("item"));
let rightNow = new Date("2022-12-27");

console.log(rightNow);
console.log(new Date());

const products = [
  {
    id: 1,
    name: "mac",
    price: 123,
    stock: 10,
  },
  {
    id: 2,
    name: "iphone",
    price: 1234,
    stock: 10,
  },
  {
    id: 3,
    name: "tv",
    price: 12,
    stock: 10,
  },
  {
    id: 4,
    name: "hosoo",
    price: 32,
    stock: 10,
  },
];

let remove = products.filter((a) => {
  return a.name !== "mac";
});
console.log("name:", remove);
removeProd(2);
sellProd("iphone", 2);

//id n for guilne id==i
//

//undsen stock zaragdsan nn hasagddag bh
//if removed then make new ids

