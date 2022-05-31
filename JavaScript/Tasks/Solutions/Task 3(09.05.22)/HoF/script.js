'use strict';

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

//! HoF

// //* .map() vs basic approach

// const numberList = [1, 2, 3, 4, 10, 12, 20];

// const numberExponentietion = numberList.map(item => {
//   return item * item;
// });

// console.log(numberExponentietion);

// const numberExponentietion2 = el => {
//   let arr = [];

//   for (let item of el) {
//     arr.push(item * item);
//   }
//   return arr;
// };
// console.log(numberExponentietion2(numberList));

// //* filter
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];

// const getCountry = countries.filter(item => item.includes('ia'));
// console.log(getCountry);

// // Wyraz ma 5 liter
// const getWordLength = countries.filter(item => item.length === 5);
// console.log(getWordLength);

//! Mentoring tasks HoF

//! Ex.1

/*

Korzystając z poniższej struktury:

const animals = [
	{name: 'Burek', eyes: 3, type: 'cat'},
	{name: 'Milelon', type: 'cat', eyes: 4},
	{name: 'Pusia', type: 'cat', eyes: 2},
	{name: 'Puszek', type: 'dog', eyes: 2},
	{name: 'Zorka', eyes: 2, type: 'dog'}
];

-	Wykorzystaj funkcję .map(), aby otrzymać następującą listę:
[
Burek is a cat and has 3 eyes,
Milelon is a cat and has 4 eyes,
Pusia is a cat and has 2 eyes,
Puszek is a dog and has 2 eyes,
Zorka is a dog and has 2 eyes
]

-	Przefiltruj listę animals - tak, aby otrzymać listę tylko tych słowników, przechowują informacje o psach.
-	Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion zwierząt, tj. ‘Burek Milelon Pusia Puszek Zorka’
-	Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion psów, tj. ‘Puszek Zorka’


*/

const animals = [
  { name: 'Burek', eyes: 3, type: 'cat' },
  { name: 'Milelon', type: 'cat', eyes: 4 },
  { name: 'Pusia', type: 'cat', eyes: 2 },
  { name: 'Puszek', type: 'dog', eyes: 2 },
  { name: 'Zorka', eyes: 2, type: 'dog' },
];

// const petArr = [];

// const animalDescription = animals.map(pet => {
//   return petArr.push(`${pet.name} is a ${pet.type} and has ${pet.eyes}`);
// });

// console.log(petArr);

//* Only dogs
const getDog = animals.filter(pet => pet.type === 'dog');
console.log(getDog);

//* String with pets names
const getAllNames = animals.map(pet => {
  return `${pet.name}`;
});

console.log(...getAllNames);

//* Only dogs names

// const getDogName = animals.filter(pet => pet.type.includes('dog'));

const getDogName = animals
  .filter(pet => pet.type === 'dog')
  .map(pet => `${pet.name}`);

console.log(...getDogName);

//! Ex.2
/*

Mając do dyspozycji poniższą listę:
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '10' },
]
-	Oblicz sumę cen produktów, korzystając tylko i wyłącznie z funkcji .reduce(). Wykonaj tę samą operację, wykorzystując forEach
-	Znajdź nazwy produktów, których ceny podane są w nieliczbowym formacie. 

*/

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '10' },
];
//* Nazwy produktów które za cenę mają wartość liczbową
const ifNumber = products.filter(value => {
  if (typeof value.price === 'number') {
    return value.price;
  }
});

console.log(ifNumber);

const priceSum = products
  .map(item => Number(item.price))
  .reduce((acc, curr) => {
    return acc + curr;
  });
console.log('reduce method: ' + priceSum);

//* Sumowanie z metodą .forEach() --> w tej metodzie musimy mieć do czego dodawać te wartości więc trzeba wcześniej określić wartość 0 od której ma zaczynać sumowanie, tak samo jak w przypadku reduce gdzie określamy "initial value"

let total = 0;
products.forEach(item => {
  total += Number(item.price);
});

console.log('forEach method: ' + total);

//! Ex.3
/*

Mając do dyspozycji poniższą listę:

const people = [
     { name: 'Wes', year: 1988 },
     { name: 'Kait', year: 1986 },
     { name: 'Irv', year: 1970 },
     { name: 'Lux', year: 2015 }
];

Stwórz obiekt klasy DataManipulator, który będzie zawierał metody przeprowadzadzające poniższe operacje. Dodaj odpowiednie metody walidujące.

-	Sprawdź, czy co najmniej jedna osoba ma ukończone 19 lat.
-	Sprawdź, czy wszyscy mają powyżej 19 lat
-	Wykorzystując funkcję find(), znajdź imie osoby urodzonej po 2000 roku

Wykorzystując dodatkowo poniższą strukturę:

const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 }
];

-	Połącz elementy z listy comments oraz people do pojedynczych słowników zawartych w nowej liście opinions (obiekt opinions to końcowy efekt po połączeniu obiektów comments i people)

const opinions = [
    { name: 'Wes', year: 1988, text: 'Love this!', id: 523423},
    { name: 'Kait', year: 1986, text: 'Super good', id: 823423 },
    { name: 'Irv', year: 1970, text: 'You are the best', id: 2039842 },
    { name: 'Lux', year: 2015, text: 'Ramen is my fav food ever', id: 123523 }

];
*/

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
];

//* Łączenie tablic

//! Concat
const options = [].concat(people, comments);
//! Spread operator
const mergeArray = [...people, ...comments];
console.log(mergeArray);

const completeArray = mergeArray.map((el, index) => ({
  ...el,
  ...comments[index],
}));

console.log(completeArray);

//* Łączenie tablic oraz jej obiektów w jedną linię

class DataManipulator {
  //* Metoda walidująca czy chociaż jeden ma 19 lat
  getSomeAdult(obj) {
    const date = new Date();
    const currYear = date.getFullYear();

    const age = obj.map(item => currYear - item.year);
    const why = age.some(el => el >= 19);

    console.log(age, why);
  }
  //* Metoda walidująca czy każdy ma 19 lat
  getEveryAdult(obj) {
    const date = new Date();
    const currYear = date.getFullYear();

    const age = obj.map(item => currYear - item.year);
    const why = age.every(el => el >= 19);

    console.log(age, why);
  }
  //* Metoda walidująca do zbadania kto urodził się w roku 2000 albo później i wylogowanie imienia osoby
  // //! Pomyśl później jak to zrobić
  getGenerationZ(obj) {
    const genZ = obj.find(el => el.year >= 2000);
    console.log(genZ.name);
  }
}

//* Attempt with sending array to constructor
const name = people.map(item => item.name);

const year = people.map(item => item.year);

const newBudy = new DataManipulator(name, year);
// console.log(newBudy);
newBudy.getSomeAdult(people);
newBudy.getEveryAdult(people);
newBudy.getGenerationZ(people);

//! Ex.4

/*
Pobierz listę wszystkich państw i informacji o nich z poniższego API:
https://restcountries.com
-	Przefiltruj te państwa w taki sposób, aby uzyskać tylko te, których populacja przekracza 37 milionów ludzi. 
-	Oblicz średnią zaludnienia państw z każdego kontynentu. 
-	Znajdź państwa, które mają największe zaludnienie z każdego kontynentu
-	Znajdź najczęściej wykorzystywane języki, podawaj również informacje, ile razy pojawiły się na liście wszystkich państw. 


*/

// const api_url = 'https://restcountries.com/v3.1/all';

// async function getCertainPopulation() {
//   const response = await fetch(api_url);
//   const data = await response.json();

//   // console.log(data);
//   //* Countries over 37 milion
//   const pop = data.filter(item => item.population > 37000000);
//   // console.log(pop);

//   //* Number of countries

//   // const countryNum = data.length;

//   //* Avg number of population per country
//   const avgComputation = data
//     .map(item => item.population)
//     .reduce((acc, curr) => {
//       return Math.round(acc + curr);
//     });

//   console.log(avgComputation);

//   const avg = data.filter(item => {
//     if (item.continents === 'Africa') {
//       return item.population;
//     }
//   });

//   console.log(avg);

//   //* Log continents

//   // let conti = data.map(el => el.continents).sort();
//   // console.log(conti);
// }

// getCertainPopulation();
