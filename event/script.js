//document.getElementById
//document.createElement
//document.appendChild
//document.setAttribute

//const cards=document.getElementsByClassName("card");
//const oneCard= document.querySelectorAll(".card");

//const card=document.querySelector(".card");
//function cardClick(){
//console.log("cardClick");
//}
//oneCard.addEventListener("click",cardClick)

const root = document.getElementById("root");

const startButton = document.createElement("button");
startButton.innerText = "Start";
root.appendChild(startButton);

startButton.addEventListener("click", startGame);

function startGame() {
  const boxes = document.createElement("div");

  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rand = Math.floor(Math.random() * 8);
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red - 50},${green},${blue})`;

  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    if (i == rand) {
      box.style.backgroundColor = randomColor;
    } else box.style.backgroundColor = differentColor;
    boxes.appendChild(box);
  }
  boxes.setAttribute("class", "boxes");
  root.appendChild(boxes);
}

boxes.innerHTML = "";

//localStorage.setItem("item", "200");
//console.log(localStorage.getItem("item"));

//unguurn for dotoroo itai temtsuu ued uur ungu bieleh nuhtsuk bicheed else ued busad ungu n garahaar biceh

//function startGame() {
//const boxes = document.createElement("div");
//const diffbox = document.createElement("div");
//const red = Math.floor(Math.random() * 245) + 10;
//const green = Math.floor(Math.random() * 255);
//const blue = Math.floor(Math.random() * 255);
//const randomColor = `rgb(${red},${green},${blue})`;
//const differentColor = `rgb(${red - 30},${green},${blue})`;

//for (let i = 1; i < 9; i++) {
//const box = document.createElement("div");
//box.setAttribute("class", "box");
//boxes.appendChild(box);
//box.style.backgroundColor = randomColor;
//boxes.appendChild(diffbox);
//}
//boxes.setAttribute("class", "boxes");
//diffbox.setAttribute("class", "box");

//diffbox.style.backgroundColor = differentColor;
//root.appendChild(boxes);
//}
