'use strict';
//! HoF

//* .map() vs basic approach

const numberList = [1, 2, 3, 4, 10, 12, 20];

const numberExponentietion = numberList.map(item => {
  return item * item;
});

console.log(numberExponentietion);

const numberExponentietion2 = el => {
  let arr = [];

  for (let item of el) {
    arr.push(item * item);
  }
  return arr;
};
console.log(numberExponentietion2(numberList));

//* filter
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const getCountry = countries.filter(item => item.includes('ia'));
console.log(getCountry);

// Wyraz ma 5 liter
const getWordLength = countries.filter(item => item.length === 5);
console.log(getWordLength);

// ! CODEWARS EXERCISES

// // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// // function solution(str, ending) {
// //   return str.slice(ending.length) === ending ? true : false;
// // }

// // function solution(str, ending) {
// //   if (str.includes(ending)) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// const solution = (str, ending) => {
//   return str.includes(ending) ? true : false;
// };

// console.log(solution('Mattew', 'ttew'));
