//Solution 1
let input = -12345;
let num = input;

let rev = 0;

while (Math.abs(num) > 0) {
  let rem = num % 10;
  
  rev = rev * 10 + rem;
  num = parseInt(num / 10); // This is important in javascript otherwise it returns float value after division
}
console.log("input number", input);
console.log("Reverse of number", rev);

/*
Math.sign() return positive 1 if number is positive else returns -1

Math.abs()  returns absolute value that is if value is negative it will return positive value

parseint()   Convert the value into integer

*/
