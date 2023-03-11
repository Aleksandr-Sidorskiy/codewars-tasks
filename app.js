var a = "hello";

function b() {
  if (false) {
    var a = "world";
  } else {
    var b = "man";
  }
  //   console.log(b);
  //   console.log(a);
}
b();
/**
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

Note: The function accepts an integer and returns an integer.

Happy Coding!
 */

function squareDigits(num) {
  // const numArray = Array.from(num.toString(), Number);
  // const numSquare = numArray.map((elem) => elem ** 2);
  const numSquare = [...num.toString()].map((num) => num ** 2).join("");
  // return Number(numSquare.join(""));
  return Number(numSquare);
}
// console.log(squareDigits(3212)); //9414
// console.log(squareDigits(2112)); //4114
// console.log(squareDigits(0)); //0

/**
 * Write a function that takes an array of
 * numbers and returns the sum of the numbers.
 * The numbers can be negative or non-integer.
 * If the array does not contain any numbers then you should return 0.
 */

function sum(numbers) {
  "use strict";
  return numbers.reduce((acc, number) => acc + number, 0);
}
// console.log(sum([]));
// console.log(sum([1, 5.2, 4, 0, -1]));

/**
 * An isogram is a word that has no repeating letters,
 * consecutive or non-consecutive. Implement a function
 *  that determines whether a string that contains only letters
 * is an isogram. Assume the empty string is an isogram.
 *  Ignore letter case.
 */
function isIsogram(str) {
  const a = str.toLowerCase();
  const b = a.split("");
  const c = b.every((x) => b.indexOf(x) === b.lastIndexOf(x));
  return c;
}

// console.log("Dermatoglyphics", isIsogram("Dermatoglyphics"));
// console.log("isogram", isIsogram("isogram"));
// console.log("aba", isIsogram("aba"));
// console.log("moOse", isIsogram("moOse"));
// console.log("isIsogram", isIsogram("isIsogram"));
// console.log("", isIsogram(""));

function hasDuplicates(arr) {
  return arr.every((x) => arr.includes(x) === arr.includes(x));
}

// console.log("hasDuplicates", hasDuplicates(["a", "s", "d", "f"]));

/**
 * Implement a function which convert the
 * given boolean value into its string representation.
 */
function booleanToString(b) {
  const value = String(b);

  return value;
}

// console.log(booleanToString(false));
// console.log(booleanToString(true));

/**
 *Заповніть метод, який отримує логічне 
 значення і повертає рядок "Yes" для true,
  або рядок "No" для false.
 */
function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}
// console.log(boolToWord(true));
// console.log(boolToWord(false));

/**
 *У цьому каталозі ви створите функцію
 * яка отримує на вхід список невід'ємних
 * цілих чисел та рядків і повертає
 * новий список з відфільтрованими рядками.
 */
function filter_list(l) {
  return l.filter((value) => Number.isFinite(value));
}
// console.log(filter_list([1, 2, "a", "b"]));
// console.log(filter_list([1, "a", "b", 0, 15]));
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
// console.log(
//   filter_list([
//     943,
//     "380",
//     106,
//     495,
//     "765",
//     376,
//     "600",
//     "987",
//     "290",
//     544,
//     "Y",
//     "",
//     "959",
//   ])
// );

/**
 * Ваша задача - написати функцію, яка може
 * приймати в якості аргументу будь-яке невід'ємне ціле число і
 *  повертати його цифрами у порядку спадання.
 * По суті, переставити цифри так,
 *  щоб отримати максимально можливе число.
 */
function descendingOrder(n) {
  const arr = [...n.toString()].sort((a, b) => b - a).join("");
  return Number(arr);
}
// console.log(descendingOrder(0));
// console.log(descendingOrder(1));
// console.log(descendingOrder(111));
// console.log(descendingOrder(15));
// console.log(descendingOrder(1021));
// console.log(descendingOrder(123456789));

/**
 *За заданими двома цілими числами a та b,
  які можуть бути як додатними, так і від'ємними, знайдіть суму 
  всіх цілих чисел між ними і поверніть її. 
  Якщо числа рівні, то вивести a або b.

Зауваження: числа a та b не впорядковані!
 */
function getSum(a, b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i += 1) {
      sum += i;
    }
  } else {
    for (let i = a; i <= b; i += 1) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum(5, -1));
console.log(getSum(0, 1));
console.log(getSum(588, 598));
console.log(getSum(-149, -195));
