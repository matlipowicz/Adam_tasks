'use strict';

//! OOP

// Ex.1

/*
Róznice między porgramem napisanym w OOP a "zwykłym"

* Powiedzmy, ze OOP jest podejściem bardziej obrazowym, klasy i obiekty mają za zadanie określać dany program jako bardziej rzeczywiste, co pozwala łatwiej wyobrazić sobie program przez programistę. W " zwykłym" podejściu czyli tzw. "proceduralnym" przy bardziej złoonym programie nawarstwia się więcej zmiennych i funkcji. Zamiast takiego podejścia mozna wykorzystać jeden z filarów OOP czyli "encapsulation" do zhermetyzowania wszystkich zmiennych w obiekcie jako właściwości i ich wartości. 

*/

// Ex.2

/*
Róznice między obiektem a klasą

* Klasa jest jakby szablonem, który jest definiowany przez uzytkownika i przechowuję własne dane i funkcje. Jest szablonem dla kazdego obiektu. Natomiast obiekt jest instancją klasy, która bazuje na schemacie (klasie) tworząc ich wielokrotną ilość, a klasę tylko raz. 

*/

// Ex.3

/*
Na jakich załozeniach opiera się OOP

* Są to cztery główne filary: ENKAPSULACJA oznaczająca hermetyzację funkcji i zmiennych w metody i właściwości, czyli "ukrywanie" / grupowanie ich przed zewnętrznym środowiskiem, ABSTRAKCJA oznacza schowanie funkcjonalności programu pod ładną oprawą, na przykład moze pójść pilot od telewizora który z zewnątrz ma kilkanaście przycisków a wykonuję wiele zadań po jego naciśnięciu, DZIEDZICZENIE, które odpowada za przekazywanie metod z rodzica na dziecko przez co kod jest czytelniejszy i bardziej DRY, pozostaje POLIMORFIZM czyli możliwość nadpisywyania dziedziczonych metod od rodzica

*/

// Ex.4

/*

Scope of satisfaction

  - not (0 - 5);
  - a bit (6 - 10);
  - very (11 - infinite)

*/

class Animal {
  name;
  level_happines;
  level_hunger;
  level_lonliness;
  constructor(name, level_happines, level_hunger, level_lonliness) {
    this.name = name;
    this.level_happines = level_happines;
    this.level_hunger = level_hunger;
    this.level_lonliness = level_lonliness;
  }

  feed(moreFood, lessFood) {
    this.level_hunger += moreFood;
    this.level_hunger -= lessFood;
  }

  sleep(moreSleep, lessSleep) {
    this.level_happines += moreSleep;
    this.level_happines -= lessSleep;
  }

  play(moreFun, moreAttention, lessFun, lessAttention) {
    this.level_happines += moreFun;
    this.level_lonliness += moreAttention;
    this.level_happines -= lessFun;
    this.level_lonliness -= lessAttention;
  }

  catStatus() {
    console.log(
      `${this.name} is not lonliness because level of lonliness is ${this.level_lonliness}, a bit hungry ${this.level_hunger} and very happy ${this.level_happines}`
    );
  }
}

const newCat = new Animal('Pusia', 5, 4, 5);
newCat.catStatus();
newCat.feed(0, 8);
newCat.catStatus();

// Ex.5

/*
Jaka jest różnica pomiędzy definicjami klas?

* Pierwszy przykład pokazuję deklarację pól wewnątrz klasy nie wpływając na program a polepszając jego czytelność
* Drugi przykład nie ma zdeklarowanych pól wewnątrz klasy tylko w konstruktorze

*/

// Ex.6

/*
Czym różni się pole publiczne od prywatnego. W jaki sposób można odwołać się do pól prywatnych spoza kontekstu klasy?

* Różnica między polem publicznym a prywatnym jest taka, że publiczny może zostać wywołany spoza klasy przez co jest publiczny czyt. "Dla każdego", a prywatny to taki który nie może zostać wywołany spoza klasy czyli enkapsulacja
* Do odwołania się do pól prywatnych poza kontekstem klasy, wykorzystujemy gettery i settery, gdzie są dwa sposoby odwołania:

  1) getName(){
    return this.#name;
  }

  2) get name(){
    return.thisn.#name;
  }



*/

// Ex.7

/*
Co jest nie tak w poniższym kodzie?

* Po pierwsze nie da się odwołać do prywatnego pola spoza kontekstu klasy, nie stworzony został nowy obiekt new Human("Joe", "Wick"), w konsoli nie odwołalismy się do zmiennej joe tylko do john, pole zostało zdeklarowane w klasie przez co nie jest potrzebne okreslanie go w konstruktorze dlateog wystarczy przekazanie argumentu John.

? Czy przesłanie innego argumentu nadpisze ten który zadeklarowalismy w klasie ? 



*/

// Ex.8

// const orderMap = new Map([]);

// class Order {
//   constructor(name, price, id) {
//     this.name = name;
//     this.price = price;
//     this.id = Number.isInteger(id);
//   }

//   isIdInteger() {
//     if (Number.isInteger(this.id) === true) {
//       console.log('haaa');
//     } else {
//       console.log('Wrong!');
//     }
//   }
// }

// const mat = new Order('Matthew', 200, '');

// console.log(mat);
// mat.isIdInteger(2);
