//1. Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];

let mycolor = ["Red", "Green", "White", "Black"];
let colors = mycolor.join() + `\n` + mycolor.join() + `\n` + mycolor.join("+");
console.log(colors);

//2.  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

let numbers1 = [0, [2, 5, 4], 6, 8];
let nums2 = numbers1[1].join("");
let nums1 = numbers1.join("-", nums2);
console.log(nums1, nums2);

let numbers = ["0", "254", "6", "8"];
let nums = numbers.join("-");
console.log(nums);
