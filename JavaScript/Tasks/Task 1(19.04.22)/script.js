'use strict';

// // ! FUNKCJE

// //TODO: EX.1
// /*

// Funkcje są wykorzystywane podczas pisania kodu aby unikać powtarzania pewnych bloków kodu - DRY (Don't Repeat Yourself);

// Funkcje tworzą program mniejszym przez co szybciej "czytelnym", przez to jest bardziej kompaktowy i mozna go wykorzystać wiele razy podczas działania programu. Waznym aspeketem jest równiez lepsza czytelność kodu.

// */

// //TODO: EX.2

// const personalInfo = {
//   name: 'Mateusz',
//   lastname: 'Lipowicz',
//   time: '6 months',
// };

// const information = () => {
//   console.log(
//     `${personalInfo.name} ${personalInfo.lastname}, I've been learning since last October which is ${personalInfo.time}`
//   );
// };
// information();

// //TODO: EX.3

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(25, 12));

// //TODO: EX.4

// // ! Solution without loop
// const fizz_buzz = number => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return 'FizzBuzz';
//   } else if (number % 5 === 0) {
//     return 'Buzz';
//   } else if (number % 3 === 0) {
//     return 'Fizz';
//   } else {
//     return number;
//   }
// };

// // ! Solution with loop

// // Tutaj zamiast na samym koncu instrukcji wykorzystałem logikę, która sprawdza czy liczba przekazana do funkcji jest podzielna zarówno przez 3 i przez 5, w innym przypadku sprawdziła by czy jest podzielna albo przez 5 albo przez 3 co nie dało by wyniku w postaci "FizzBizz" bo albo zostałoby wylogowane Buzz albo Fizz.

// // const fizz__buzz = (number, endNumber) => {
// //   for (let i = 1; i <= endNumber; i++) {
// //     const isPodzielnePrzez3=number % 3 === 0;
// //     const isPodzielnePrzez5=number % 5 === 0;

// //     if (isPodzielnePrzez3 && isPodzielnePrzez5) {
// //       console.log('FizzBuzz');
// //     } else if (isPodzielnePrzez5) {
// //       console.log('Buzz');
// //     } else if (isPodzielnePrzez3) {
// //       console.log('Fizz');
// //     } else {
// //       console.log(number);
// //     }
// //   }
// // };

// // fizz__buzz(11, 30);

// //TODO: EX.5
// // * weight value is in a [kg] - kilograms and height is in a [m] - meters. That means, insert your height in meters not centimeters
// const calculatorBMI = (weight, height) => {
//   const formulaBMI = weight / height ** 2;

//   if (formulaBMI < 18.5) {
//     return 'Niedowaga';
//   } else if (formulaBMI === 18.5 || formulaBMI <= 24.9) {
//     return 'Normalna';
//   } else if (formulaBMI >= 25) {
//     return 'Nadwaga';
//   }
// };

// console.log(calculatorBMI(65, 1.79));

// //TODO: EX.6 --- Poszukaj rozwiązania później

// const monthList = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// // * EASY METHOD

// const getSeason = (month = 'January') => {
//   if (!monthList.includes(month)) {
//     throw new Error('Nie ma takiego miesiaca');
//   } else {
//     switch (month) {
//       case 'December':
//       case 'January':
//       case 'February':
//         return 'Winter';
//       default:
//         return 'Spring';
//     }
//     // if (month === 'December' || month === 'January' || month === 'February') {
//     //   return 'Winter';
//     // } else if (month === 'March' || month === 'April' || month === 'May') {
//     //   return 'Spring';
//     // } else if (month === 'June' || month === 'July' || month === 'August') {
//     //   return 'Summer';
//     // } else if (
//     //   month === 'September' ||
//     //   month === 'October' ||
//     //   month === 'November'
//     // ) {
//     //   return 'Autumn';
//     // } else if (month === undefined) {
//     //   return (month = 'January');
//     // }
//   }
// };

// console.log(getSeason('November'));

// //TODO: EX.7

// // ! Wyświetli tylko dwa alerty z gwiazdkami bo nie zdenifniowany został argument funkcji
// // --> Poprawka wyświetli wartość "undefined";

// // function showMessage(text) {
// //   alert('***************');
// //   alert(text);
// //   alert('***************');
// // }

// // showMessage();

// //TODO: EX.8

// const fahrenheitToCelsius = tempF => {
//   const tempConverterC = Math.round((5 / 9) * (tempF - 32));
//   //   return tempConverterC;
//   console.log(`Temperatura ${tempF}F” to inaczej ${tempConverterC}°C `);
// };
// fahrenheitToCelsius(120);

// const clesiusToFahrenheit = tempC => {
//   const tempConverterF = 32 + (9 / 5) * tempC;
//   //   return tempConverterF;
//   console.log(`Temperatura ${tempC}°C to inaczej ${tempConverterF}F” `);
// };
// clesiusToFahrenheit(50);

// // ! ZŁOZONE STUKTURY DANYCH

// //TODO: EX.1
// /*

// Podczas szkolenia poznałem trzy struktury danych:

//     1) Arrays - tablice
//     2) Map - obiekt map po prostu mapa
//     3) Set - obiekt set po prostu zbiór

//     Ad.1
//     Tablice słuzą do przechowywania kazdego rodzaju danych i te dane są indeksowane od 0 do n

//     Ad.2
//     Obiekt map zawiera w sobie połączone dane czyli "klucz" i "wartość" słuzy do przechowywania danych połączonych ze sobą (jak normalny obiekt ma key value i jego wartość)

//     Ad.3
//     Obiekt set rózni się od tablicy tym, ze nie pojawiają się tutaj duplikaty, przez co jest wykorzystywany do unikalnych danych.

// */

// //TODO: EX.2

// let names = [
//   'Jan',
//   'Grzegorz',
//   'Krzysztof',
//   'Maciej',
//   'Joanna',
//   'Izabela',
//   'Magdalena',
//   'Kinga',
//   'Kacper',
// ];

// names.push('Mateusz', 'Marek');
// names.unshift('Anna');

// console.log(names);

// console.log(names[0], names[8], names[7], names[4]);

// console.log(names[names.length - 1], names[names.length - 2]); // Ostatnia wartość i przedostatnia

// // const a=[1,2,3]
// // const b=[3,4,[5,[6,[7]]]]
// // const c=[...a,b.flat(3)]

// // Uzywając spread operator
// // ? Co robi dokładnie spread operator (z tego co wyczytałem wypłaszcza tablice i nie traktuje ją jako jedną wartość a zbiór liczb)
// // let firstValue = [...names].shift(); // Pierwsza wartość
// // console.log(firstValue);

// // Środkowy element --> zwraca mi tylko wartość indexu środkowego elementu
// // const middleValue = (arr) => {
// //   for (let i = 0; i < names.length; i++) {
// //     let middle = Math.floor((names.length - 1) / 2);
// //     return middle;
// //   }
// // };

// // console.log(middleValue());

// // * Pierwsza wartość przy wykorzystaniu forEach
// // Slice method - nie mutuje poprzedniej
// const firstElement = names.slice(0, 1);
// console.log('' + firstElement);
// // Find method
// // ? Znalazłem jeszcze taką metode --> dlaczego ma być rózna od undefined? Czy metoda find zwraca te wartości?
// const first = names.find(element => element !== undefined);
// console.log(first);

// // * Srodkowa wartość
// let middleValue = arr => {
//   return arr[Math.floor(arr.length / 2)];
// };

// console.log(middleValue(names));

// //TODO: EX.3

// //! SET I

// let emptyArray = [];

// const set1 = () => {
//   emptyArray.push('First', 'Second', 'Third', 'Fifth', 'Fourth');

//   emptyArray.unshift('New');

//   console.log(
//     emptyArray.length,
//     emptyArray[0],
//     emptyArray[emptyArray.length - 1]
//   );
//   console.log(middleValue(emptyArray));
// };

// set1();

// //! SET II --> do omówienia
// let companyArr = [];

// // for(let a=0;a<5;a++){
// //   const userInput=prompt("Podaj nazwe");
// //   companyArr.push(userInput)
// // }

// // let companyName = company => {
// //   companyArr.push(company);
// //   console.log(companyArr);

// debugger;
// for (let i = 0; i < companyArr.length; i++) {
//   if (companyArr.length === 5) {
//     //   Funkcja splice ma usunać całą tablice od pozycji 0 czyli początku tablicy i ma usunąć całą tablice
//     companyArr.splice(0, companyArr.length);
//   }
//   companyArr[i] = prompt('Company name?');
// }
// //};

// // prompt('Give a name');
// // for (let i = 0; i < companyArr.length; i++) {
// //   if (companyArr.length === 5) {
// //     //   Funkcja splice ma usunać całą tablice od pozycji 0 czyli początku tablicy i ma usunąć całą tablice
// //     // companyArr.splice(0, companyArr.length);
// //     break;

// //     companyArr[i] = prompt('Next name');
// //   }
// // }

// //! SET III --> do omówienia

// const randomChars = ['a', 'c', 'd'];
// const generated = [];
// for (let i = 0; i < 10; i++) {
//   let wyraz;
//   //losowanie miedzy 5 a 6
//   for (let j = 0; j < Math.random(); j++) {
//     const index = Math.random();
//     wyraz += randomChars[index];
//   }
//   generated.push(wyraz);
// }

// //TODO: EX.4

// // ? Jak to zrobić w inny sposób?

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// //Math.max(...ages)
// ages.sort();
// // Funkcja .sort(); sortuje elemetny od najmniejszej wartości do najwiekszej
// // Jeśli mamy posortowaną tablice od wartości najmniejszych to mozemy ją obrócić zeby otrzymać największą wartość na początku
// ages.reverse();

// // Znalezienie wartosci przy uzyciu Math.min/max po wrzuceniu argumentu funkcji jako tablice wyrzuca NaN. Spread operator pozwala na odczytanie wartości z tablicy bo Math.min/max oczekuje wyraźne zmienne a nie tablice. Spread operator konwertoruje te wartości na zmienne i zwraca nam to co chcemy
// const arrayOperation = () => {
//   // Przedział wieku

//   const range = arr => {
//     const minValue = Math.min(...arr);
//     const maxValue = Math.max(...arr);

//     return maxValue - minValue;
//   };

//   // Pętla przez tablice do dodania kazdego elementu a po pętli nowa zmienna do podzielenia przez ilość elementów która daje średnią
//   const average = arr => {
//     let summarize = 0;

//     for (let i = 0; i < arr.length; i++) {
//       summarize += ages[i];
//     }
//     let averageAge = Math.round(summarize / arr.length);

//     return averageAge;
//   };
//   console.log(average(ages), range(ages));
// };

// arrayOperation();

// //TODO: EX.5
// // ! MAPS - wykorzystywane gdy mamy powiązane pary danych ze sobą

// const info = new Map();

// info
//   .set('Mateusz', '25')
//   .set('Paulina', '24')
//   .set('Patryk', '25')
//   .set('Jacek', '51')
//   .set('Katarzyna', '49');

// console.log(info.keys(), info.values(), info.entries());

// //TODO: EX.6
// /*
// Aby wyświetlić w konkretny sposób date uzyjemy "toLocaleDateString()", które zwróci date w formacie DD/MM/YYYY. Mozna tez określić z jakiego kraju datę pobieramy

// --> Opcje to obiekt

// e.g. const opcje = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// new Date().toLocaleDateString('kraj/obszar', opcje)
// */
// const datesSlash = new Date().toLocaleDateString();

// // Zamiana rozdzielaczy dat
// const datesDash = datesSlash.split('/').join('-');

// let users = new Map([
//   ['Dagger', datesDash],
//   ['Dev', datesDash],
//   ['Js-coder', datesDash],
//   ['Python-coder', datesDash],
//   ['Mike', datesDash],
// ]);
// // DODAWANIE DO TABLICY MAP
// users.set('Java-coder', datesDash).set('Developer', datesDash);

// // ? Jak pobrać datę w tym formacie uprzednio juz zmienioną

// // USUWANIE Z MAP
// users.delete('Js-coder');

// console.log(users);
// //TODO: EX.7

// let courseParticipants = new Map([
//   ['French:', 45],
//   ['Arabic: ', 25],
//   ['Spanish:', 24],
//   ['Russian:', 9],
//   ['Portuguese:', 9],
//   ['Dutch:', '8'],
//   ['German:', 7],
//   ['Chinese:', 5],
//   ['Swahili:', 4],
//   ['Serbian:', 4],
//   ['English:', 91],
// ]);

// // const highestMembers = (value, key, map) => {
// //   //   console.log(value);
// //   let max = Math.max(value);
// //   return max;
// // };
// // console.log(...highestMembers(courseParticipants));
// // courseParticipants.forEach(highestMembers);
// // ! Max wartość w mapie -->
// // ? spread-operator
// // ? forEach(), map(), filter(), reduce()
// Number('3'); //-> 3 jak sie nie da to NaN
// const maxValue = Math.max(...courseParticipants.values());

// // forEach to funkcja/metoda iterowania po tablicach/mapach czy zbiorach. Róznica to tylko parametry
// courseParticipants.forEach(function (value, key) {
//   if (Number(value) === maxValue) {
//     console.log(key);
//   }
// });

// //TODO: EX.8

// /*

// Element hashowany w zbiorze to taki do którego mamy szybki, łatwy dostęp. A ze struktura danych "set" przetrzymuje tylko unikalne wartości łato i w bezpieczny sposób mozna dostać się do konkertnej wartości

// !Hashowanie
// polega na przypisaniu elementu jakieś krótkiej wartości - zazwyczaj jest to jakaś liczba. Następnie w tablicy zebrane są wszystkie takie wartości. Pod odpowiednim pole znajduje się lista wszystkich elementów listy, które mają taki sam hash. Kiedy dwa elementy mają ten sam hash to mówimy, że doszło do kolizji. Innymi słowy hashowanie polega na podzieleniu większej bazy danych na mniejsze jej fragmenty w taki sposób, aby można się było do nich szybko dostać. Przygotowana tak tablica jest to tablica Hashy.
// */

// //TODO: EX.9

// let uniqueNumbers = new Set([
//   1231112, 1231113, 1231114, 1221112, 1231119, 1231112, 1231114,
// ]);

// console.log(uniqueNumbers.size);

// // Nie jest równy przez dupilkujące się dane, gdy takie wystepują to są wyrzucane ze zbioru

// //TODO: EX.10

// // ? Mam problem ze stworzeniem pętli i dodaniem elementów z niej do tablic/map/zbiorów

// let emptySet = new Set();
// // Pętla wartosci od 0 - 10 "dodana do zbioru"
// for (let i = 0; i <= 10; i++) {
//   emptySet.add(i);
// }
// // Usuwanie
// emptySet.delete(5);
// console.log(emptySet);

// // Wyczyszczanie całego zbioru
// emptySet.clear();
// console.log(emptySet);

// emptySet.add('England', 'Irleand', 'United States', 'Poland', 'Norway');
// console.log(emptySet);
// //TODO: EX.11

// // ? Nie wiem całkowicie jak za to się zabrać, bardzo mozliwe ze będzie potrzebna pętla tylko nie wiem jak do tego podejść

// // ! ZŁOZONE STUKTURY DANYCH

// // jak z tablicy wyciagnac duplikaty
// // const array=[1,2,3,5]
// // const withoutDuplicates=[...new Set(array)]

// //TODO: EX.1

// /*

// - funkcja strzałkowa wystaczy :
// (parametr) =>{
//     body
// }
// * Jeśli funkcja ma jeden parametr w strzałkowej nie trzeba uzywac nawaisów okrągłych

// * Jeśli ciało funkcji potrzebuje zeby zostałą ona zwrócona bo np. okreslislsmy nowa zmienna w tej funkcji to trzeba dodać do strzałkowej 'return'

// * Funkcja strzałkowa traktowana jest jako wyrazenie tak samo jak "function expression" czyli przypisanie funkcji do zmiennej. Samą deklarację mozna wywołać w kazdym momencie pisania kodu a nadać jej jakąś "wartość" w poźniejszym etapie.

// * Jeśli funkcja to "oneliner" to mozna ominąć nawiasy okrągłe i słowo zwracające "return"

// * Tym, ze w przypadku zdefiniowania jej w obiekcie nie tworzy jego kontekstu przy uzyciu słowa "this", odnosi się do kontekstu globalnego czyli window. Tradycyjny zapis tworzy kontekst obiektu w którym ta funkcja jest definiowana przy uzyciu "this"

// - funkcja tradycyjna "Anonymous Function" - declaration

// function(parametr){
//     body

//     + return
// }

// - funkcja tradycyjna

// function nazwaFunkcji(parametr){
//     body

//     + return
// }

// */

// //TODO: EX.2

// /*

// Czym jest callback function - to jest funkcja w funkcji przekazana jako argument (parametr) funkcji głównej. Callback function wtedy zostaje przywołana w tej funkcji.

// 1) Stworzyć funkcje które będą callbackami
// 2) if/else statement dla wpisanych wartości w prompt
// 3) Jeśli wpisane będzie "hi" trzeba odwołać się do funkcji greetings jak "cya" to do goodbye
// 4)

// */
// // ! Pierwsze podejście

// // const saluteFunction = (hi, bye) => {
// //   let salute = prompt('Say back whatever you want!');
// //   if (salute === 'Hi' || salute === 'hi' || salute === 'HI') {
// //     hi();
// //   } else if (salute === 'Cya' || salute === 'cya' || salute === 'CYA') {
// //     bye();
// //   } else {
// //     alert('Invalid value, enter again!');
// //   }
// //   console.log(salute);
// // };

// // ? Dlaczego w taki sposób nie działa?

// // const greetings = () => {
// //   alert('Hi to you too');
// // };

// // const goodbye = () => {
// //   alert('See you soon');
// // };

// // saluteFunction(greetings, goodbye);

// // saluteFunction(
// //   function greetings() {
// //     alert('Hi to you too');
// //   },

// //   function goodbye() {
// //     alert('See you soon');
// //   }
// // );

// // ? Trzeci argument w postaci stringa --> jak to określić zeby oznaczał daną wartość. Warunek z tą wartością po spełnieniu ma wyświetlić konkretną funkcję.

// //TODO: EX.3

// /*

// Pierwszy zapis funkcji to tzw "function exrpession" czyli przypisanie funkcji do zmiennej.

// Drugi to arrow function (oba sposoby zapisane bez parametrów). Główną róznicą jest to, ze w arrow function nie trzeba uzywac słowa kluczowego "function" dla komputera aby widział ten zapis jako funkcję.

// */
// //TODO: EX.4
// // End of a year counter

// /*

// 1 sekunda = 1000 milisekund
// 1 minuta = 60 sekund
// 1 godzina = 60 minut
// 1 dzień = 24 godziny

// ? Czemu róznica endOfYear i currentDate zwracają liczbę a nie jak po wylogowaniu osobno całą date? Jest metoda do otrzymania z daty liczby w milisekundach (.getTime()) Konwertowanie na liczby zachodzi przez metode Math, .floor jest funkcją która zaokrągla w dół, jeśli chcemy zaokrąglić tak jak mówią zasady matmy to uzyjemy .round
// */
// const endOfYear = new Date('December 31, 2022 23:59:59');
// const endYearCounter = () => {
//   const currentDate = new Date();
//   const differecne = endOfYear - currentDate;
//   const days = Math.floor(differecne / 1000 / 60 / 60 / 24);
//   const hours = Math.floor(differecne / 1000 / 60 / 60) % 24;
//   console.log(`Do końca roku pozostało ${days} dni and ${hours} godzin`);
// };

// endYearCounter();

// const yearEnd = () => {
//   const nowDate = new Date();
//   const endDate = new Date('December 31, 2022 23:59:59');
//   //   ? Czemu jest juz przekonwertorowana na milisekundy do końca roku
//   const diff = endDate - nowDate;

//   // Converter : days, hours, minutes, seconds
//   const seconds = 1000;
//   const minutes = seconds * 60;
//   const hours = minutes * 60;
//   const days = hours * 24;

//   const endDays = Math.floor(diff / days);
//   const endHours = Math.floor((diff % days) / hours);
//   const endMinutes = Math.floor((diff % hours) / minutes);
//   const endSeconds = Math.floor((diff % minutes) / seconds);
//   console.log(
//     `Do końca roku pozostało ${endDays} dni, ${endHours} godzin, ${endMinutes} minut, ${endSeconds} sekund `
//   );
// };

// yearEnd();

//TODO: EX.5

//! KLASY

class Sword {
  static wykutyPrzez = 'Elfy';
  #name; //pole prywatne
  silaAtaku;

  constructor(name, silaAtaku) {
    this.#name = name;
    this.silaAtaku = silaAtaku;
  }

  //getery i setery
  get name() {
    return this.#name;
  }
  set silaAtaku(newSilaAtaku) {
    // if (newSilaAtaku > 1) {
    //   throw new Error('Sila ataku nie moze byc <1');
    // }
    this.silaAtaku = newSilaAtaku;
  }

  zaatakuj(kogo) {
    console.log(`${this.name} zaatakowal ${kogo} z sila ${this.silaAtaku}`);
  }
}

class MagicznyMiecz extends Miecz {
  constructor(name, silaAtaku, silaMagii) {
    super(name, silaAtaku);
    this.silaMagii = silaMagii;
  }

  zaatakuj(kogo) {
    console.log(
      `${this.name} zaatakowal ${kogo} z sila ${this.silaAtaku} z magia ${this.silaMagii}`
    );
  }

  zaatakujMagicznie() {
    console.log('Magicznie zaatakwał');
  }
}

const miecz1 = new Miecz('Miecz1', 3);
const miecz2 = new Miecz('Miecz2', 15);
const exkalibur = new MagicznyMiecz('Miecz2', 15, 30);

miecz1.zaatakuj('Mnie');
miecz2.zaatakuj('Mnie 2');

function Human(name) {
  this.name = name;
}
Human.prototype.age = 15;
console.log(Human.prototype);

Human.prototype.introduce = function () {
  console.log(`${this.age}`);
};
