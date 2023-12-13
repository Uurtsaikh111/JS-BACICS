// a usegiig hed bgaag ol

let sentence = `What is an alphabet? An alphabet is a set of graphs or characters used to represent the phonemic structure of a language. In most alphabets, the characters are arranged in a definite order or sequence (e.g., A, B, C, etc.).`;

let multiArray = [];
let arr = [];
let str = [];
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    arr[count] = str;
    count++;
    str = "";
  } else str = str + sentence[i];
}
console.log(arr[38]);

let allWords = 1;
for (i = 0; i < sentence.length; i++) {
  if (sentence[i] == ` `) {
    allWords++;
  }
}
console.log(allWords);

let muchA = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == "a" || sentence[i] == "A") {
    muchA++;
  }
}

console.log(muchA);

let muchB = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == "b" || sentence[i] == "B") {
    muchB++;
  }
}

console.log(muchB);

let muchC = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == "c" || sentence[i] == "C") {
    muchC++;
  }
}
console.log(muchC);
muchArray[count];
//multi dimension array array dotor usegnuudiin toonudiig oruul
