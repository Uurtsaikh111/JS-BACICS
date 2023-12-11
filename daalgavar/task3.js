function findReduce(a, b) {
  for (let i = a; i >= 0; i = i - b) {
    console.log(i);
  }
}
findReduce(10, 3);

function findIncrease(a, b) {
  if (a > b) {
    for (let i = b; i <= a; i = i + 1) {
      console.log(i);
    }
  } else if (b > a) {
    for (let i = a; i <= b; i = i + 1) {
      console.log(i);
    }
  }
}
findIncrease(15, 9);

//a toonoos b too hurtel c toogoor ihesgeed array aar garga.

function findIncrease(a, b, c) {
  let count = -1;
  let array = [];
  for (let i = a; i <= b; i = i + c) {
    count = count + 1;
    array[count] = i;
  }
  console.log(array);
}
findIncrease(10, 20, 2);

//Anhdagch too oloh = true or false; uurtuu bolon 1 toond huvaagdana busad toond huvaagdahgui

function isPrimary1(num1) {
  for (let i = 2; i <= num1 / 2; i = i + 1) {
    if (num1 % i == 0) return false;
  }
  return true;
}
//let answer = isPrimary1(5);
//console.log(answer);

//neg toonoos nuguu too hurtelh anhdagch toog arrayd tuuj butsaah

function findPrimaries(a, b) {
  let arrayPrimary = [];
  let count = 0;

  for (let i = a; i <= b; i = i + 1) {
    if (isPrimary1(i)) {
      arrayPrimary[count] = i;
      count = count + 1;
    }
  }
  return arrayPrimary;
}
let answerPrimaries = findPrimaries(1, 100);
console.log(answerPrimaries);
