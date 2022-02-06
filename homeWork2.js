// Task 1
// Coding in function fiveLine, function accept 1 parameter:
// s.
// s is a string.
// Please return a string of 5 lines(newline symbol is \n).
// The first line has one s;
// Second line have two s; and so on..
// Fifth line have five s;
// Note1: The two sides of the parameter s may contain
// some whitespace, please clear them before using s.
// Note2: Using a string template can make your job easier.
// Example:
// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ")
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it
function fiveLine(str) {
  const newStr = str.trim();
  return (
    newStr +
    "\n" +
    newStr +
    newStr +
    "\n" +
    newStr +
    newStr +
    newStr +
    "\n" +
    newStr +
    newStr +
    newStr +
    newStr +
    "\n" +
    newStr +
    newStr +
    newStr +
    newStr +
    newStr +
    "\n"
  );
}
// console.log(fiveLine("a "));
// console.log(fiveLine("  xy "));

// Task 2
// Given a string, turn each character into its ASCII character
// code and join them together to create a number - let's call
// this number total1:
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the
// number 1, and call this number 'total2':
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits
// in total1 and total2:
// (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
// Example:
// calc('ABC') => 6
// calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQR
// STUVWXYZ') => 96

function calc(str) {
  return (
    str
      .split("")
      .map((val) => val.charCodeAt())
      .join("")
      .split("")
      .filter((el) => el === "7").length * 6
  );
}
// console.log(calc("ABC"));
// console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));

// Task 3
// Coding in function alienLanguage, function accept 1
// parameter:str. str is a sentence.
// We translate the sentence into an alien language
// according to the following rules:
// Each word in the sentence is separated by spaces. The
// last letter of each word in the sentence turns to lowercase,
// and the other letters are capitalized. Looks very strange?
// Because this is the form of alien language ;-)
// For example:
// alienLanguage("My name is John") should return "My
// NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is
// An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo
// WORLd"

function alienLanguage(str) {
  return str
    .split(" ")
    .map((el) => el.slice(0, -1).toUpperCase() + el.slice(-1).toLowerCase())
    .join(" ");
}
// console.log(alienLanguage("My name is John"));
// console.log(alienLanguage("Hello World"));
// console.log(alienLanguage("this is an example"));
// console.log("rere rere".split(""));

// Task 4
// A number is called Automorphic number if and only if its
// square ends in the same digits as the number itself.
// Given a number determine if it Automorphic or not .
// Example:
// automorphic(1),"Automorphic"
// automorphic(3),"Not!!"

function automorphic(num) {
  let pow = Math.pow(num, 2).toString();
  if (pow.charAt(pow.length - 1) === num.toString()) {
    console.log(pow.charAt(pow.length - 1) === num.toString());
    return "Automorphic";
  }
  return "Not!!";
}
// console.log(automorphic(76));
// console.log(automorphic(1));
// console.log(automorphic(8));

// Task 5 *
// Imagine JavaScript didn't natively include the call function.
// The apply function however still exists.
// Using apply, write call.
// Note: console.log internally uses the 'call' function, which
// therefore means you can't debug using console.log as it
// will either call an empty function or cause an infinite loop.

Function.prototype.call = function (context, ...args) {
  Function.prototype.apply(context, args);
};

// Task 6*
// You probably know about Function.prototype.bind method
// in JavaScript. It returns a copy of the original function but
// this function will always be called in the specified context.
// The problem is that you can't rebind another context any
// more.
Function.prototype.bind = function (ctx) {
  var fn = this;
  return function () {
    return fn.apply(this || ctx);
  };
};

var func = function () {
  return this.prop;
};
var obj1 = { prop: 1 },
  obj2 = { prop: 2 };
func = func.bind(obj1);
// console.log(func()); // Will produce 1
func = func.bind(obj2);
// console.log(func()); // Will also produce 1 :(
// Your task is override the
// native Function.prototype.bind method by a new one that
// will allow you to rebind context multiple times. In this data
// you don't need to worry about currying, testing function
// will never get params.

// Task 7
// Functional closures can get overly attached. Set them
// straight!
// Why doesn't greet_abe() actually greet Abe?
// Code:
// var name = "Abe";
// var greet_abe = function () {
//   return "Hello, " + name + "!";
// };

// name = "Ben";
// var greet_ben = function () {
//   return "Hello, " + name + "!";
// };
function greet(name) {
  return () => {
    return "Hello, " + name + "!";
  };
}

const greet_abe = greet("Abe");
const greet_ben = greet("Ben");

// console.log(greet_abe());
// console.log(greet_ben());
