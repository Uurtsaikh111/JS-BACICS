let sportsmen = [
  {
    name: "bold",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "bat",
    age: 18,
    scores: [20, 20, 30, 40],
  },
  {
    name: "dash",
    age: 19,
    scores: [30, 20, 30, 40],
  },
  {
    name: "natsag",
    age: 21,
    scores: [40, 20, 30, 40],
  },
  {
    name: "dondog",
    age: 17,
    scores: [40, 20, 30, 40],
  },
  {
    name: "dorj",
    age: 22,
    scores: [10, 20, 30, 40],
  },
  {
    name: "chuluun",
    age: 23,
    scores: [10, 20, 30, 40],
  },
  {
    name: "suh",
    age: 21,
    scores: [10, 20, 30, 40],
  },
  {
    name: "tod",
    age: 22,
    scores: [10, 20, 30, 40],
  },
  {
    name: "od",
    age: 20,
    scores: [10, 20, 30, 40],
  },
];
function findAvg(a, b, c, d) {
  return (a + b + c + d) / 4;
}
for (let i = 1; i < sportsmen.length; i = i + 1) {
  console.log(
    findAvg(
      sportsmen[i].scores[0],
      sportsmen[i].scores[1],
      sportsmen[i].scores[2],
      sportsmen[i].scores[3]
    )
  );
}

function findNum() {
  let min = sportsmen[0].age;
  for (let i = 1; i < sportsmen.length; i = i + 1) {
    if (min > sportsmen[i].age) {
      min = sportsmen[i].age;
    }
  }
  console.log(min);
}
findNum();

let avgScore1 =
  (sportsmen[0].scores[0] +
    sportsmen[0].scores[1] +
    sportsmen[0].scores[2] +
    sportsmen[0].scores[3]) /
  4;
console.log("man1AvgScore:", avgScore1);

let avgScore2 =
  (sportsmen[1].scores[0] +
    sportsmen[1].scores[1] +
    sportsmen[1].scores[2] +
    sportsmen[1].scores[3]) /
  4;
console.log("man2AvgScore:", avgScore2);
