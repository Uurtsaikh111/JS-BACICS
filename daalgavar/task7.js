//1. Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];

let mycolor = ["Red", "Green", "White", "Black"];
let colors = mycolor.join() + `\n` + mycolor.join() + `\n` + mycolor.join("+");
console.log(colors);

//2.  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

//3. Write a JavaScript program to find the most frequent item in an array.
let arr = [3, "a", 4, "a", 6, "a"];
let count = 0;
let arr1 = arr.map((a) => {
  if (a == "a") {
    count++;
  }
  return count;
});
console.log(count);

//4.Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
