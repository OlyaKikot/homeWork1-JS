// Task 1
// Write a function that takes an integer as input, and
// returns the number of bits that are equal to one in the
// binary representation of that number. You can’t guarantee
// that input is non-negative.
// Example: The binary representation of 1234 is
// 10011010010, so the function should return 5 in this case.

const sumBits = function (n) {
  const arr = n.toString(2).split("");

  return arr.reduce(
    (acc, item) => (item === "-" ? acc : acc + Number(item)),
    0
  );
};
// console.log(sumBits(-1234));

// Task 2
// Return an array containing the numbers from 1 to N,
// where N is the parametered value.
// Replace certain values however if any of the following
// conditions are met:
// if the value is a multiple of 3: use the value "Fizz"
// instead
// If the value is a multiple of 5: use the value "Buzz"
// instead
// If the value is a multiple of 3 & 5: use the value
// "FizzBuzz" instead
// N will never be less than 1.
// Method calling example:

function fizzbuzz(num) {
  let arr = [...Array(num + 1)].map((a, b) => b);
  const newArr = arr.slice(1, arr.length);

  return newArr.map((val) => {
    if (val % 3 === 0 && val % 5 === 0) return "FizzBuzz";
    else if (val % 3 === 0) {
      return "Fizz";
    } else if (val % 5 === 0) {
      return "Buzz";
    } else return val;
  });
}

// console.log(fizzbuzz(3));
// console.log(fizzbuzz(15));

// Task 3
// Multiply all the digits of a nonnegative integer n by each
// other, repeating with the product until a single digit is
// obtained. The number of steps required is known as
// the multiplicative persistence.
// Create a function that calculates the individual results of
// each step, not including the original number, but including
// the single digit, and outputs the result as a list/array. If
// the input is a single digit, return an empty list/array.
// Examples
// per(1)  = []
// per(10) = [0]
// // 1*0 = 0
// per(69) = [54, 20, 0]
// // 6*9 = 54 --> 5*4 = 20 --> 2*0 = 0
// per(277777788888899) = [4996238671872, 438939648,
// 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]
// // 2*7*7*7*7*7*7*8*8*8*8*8*8*9*9 = 4996238671872 -->
// 4*9*9*6*2*3*8*6*7*1*8*7*2 = 4478976 -->

function per(num) {
  let res = [];
  const arr = num.toString().split("");
  if (arr.length === 1) {
    return res;
  } else {
    const newVal = arr.reduce((a, b) => a * b, 1);
    res.push(newVal);
    if (newVal < 10) return res;
    return [...res, ...per(newVal)];
  }
}
// console.log(per(1));
// console.log(per(10));
// console.log(per(69));
// console.log(per(277777788888899));

// Task 4
// Create polifills for:
// concat()
// lastIndexOf()
// includes()
// repeat()
// substr()
// substring()

function concat(array, ...args) {
  args.forEach((val) => {
    Array.isArray(val)
      ? val.forEach((el) => {
          array.push(el);
        })
      : array.push(val);
  });
  return array;
}

// console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]));

function lastIndexOf(arr, val, startFrom) {
  for (let i = startFrom ? startFrom : arr.length; i >= 0; i--) {
    if (arr[i] === val) return i;
  }
  return -1;
}
// console.log(lastIndexOf([1, 2, 3, 4, 5], 2, 3));
// console.log(lastIndexOf([1, 2, 3, 4, 5], 4));
// console.log(lastIndexOf([1, 2, 3, 4, 5], 8, 3));

function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 8));

function repeat(str, num) {
  if (num < 0) return RangeError;
  if (num === 0) return "";
  else return new Array(Math.floor(num)).fill(str).join("");
}
// console.log(repeat("asd", 5));
// console.log(repeat("asd", 3, 7));

function substr(str, start, length = str.length) {
  if (start === NaN) return str;
  return str.slice(start, length + 1);
}

// console.log(substr("Mozilla", 1, 2));
// console.log(substr("Mozilla", 2));
// console.log(substr("Mozilla", NaN));

function substring(str, indexA, indexB = str.length) {
  if (indexA === indexB) return "";
  if (indexB < indexA) {
    return str.slice(indexB, indexA);
  }
  return str.slice(indexA, indexB);
}
// console.log(substring("Mozilla", 4, 7));
// console.log(substring("Mozilla", 7, 4));
