'use strict';

//! OOP - klasy

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

!Scope of satisfaction

  - not (0 - 5);
  - a bit (6 - 10);
  - very (11 - infinite)

*/

// class Animal {
//   name;
//   level_happines;
//   level_hunger;
//   level_lonliness;

//   constructor(name, level_happines, level_hunger, level_lonliness) {
//     this.name = name;
//     this.level_happines = level_happines;
//     this.level_hunger = level_hunger;
//     this.level_lonliness = level_lonliness;
//   }

//   feedLevelIncrease(moreFood) {
//     this.level_hunger += moreFood;
//   }

//   feedLevelDecrease(lessFood) {
//     this.level_hunger -= lessFood;
//   }

//   sleepLevelIncrease(moreSleep) {
//     this.level_happines += moreSleep;
//   }

//   sleepLevelIncrease(lessSleep) {
//     this.level_happines -= lessSleep;
//   }

//   playLevelIncrease(moreFun, moreAttention) {
//     this.level_happines += moreFun;
//     this.level_lonliness += moreAttention;
//   }

//   playLevelDecrease(lessFun, lessAttention) {
//     this.level_happines -= lessFun;
//     this.level_lonliness -= lessAttention;
//   }

//   getStringForStatus(level) {
//     if (level > 0 && level <= 5) {
//       return 'not';
//     } else if (level >= 6 && level <= 10) {
//       return 'a bit';
//     } else {
//       return 'very';
//     }
//   }
// }

// const catStatus = new Animal('Pusia', 8, 4, 3);
// catStatus.sleepLevelIncrease(2);
// console.log(catStatus);

//   catStatus() {
//     //?  Muszę sprawdzić w jakim zakresie znajduję się wartość obecna wartość każdego z pól i jeżeli jest w danym zakresie to wylogować tego stringa. Przykładowo jeżeli level_happines = 8 to musi mi wylogować "a bit". W pierwszym warunku muszę sprawdzić czy liczba nie jest mniejsza od 0, kolejnym ifem będzie sprawdzenie wartości czy jest mniejsza bądź większa bądź równa 5, i potem kolejne zakresy. TYLKO NIE WIEM CO MA MI ZWRÓCIĆ, JAK DAWAŁEM STRINGA np. "not" to nic się nie wyświetlało.
//   }
// }

// const newCat = new Animal('Pusia', 5, 3, 5);
// newCat.catStatus();
// newCat.feedLevelIncrease(5);
// newCat.catStatus();

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
/*
Stwórz klasę Order, która będzie reprezentowała zamówienie ze sklepu internetowego. Klasa ta ma zawierać takie pola jak: id (będący kolejnymi liczbami całkowitymi), price, name. Utwórz mapę, do której będziesz dynamicznie dodawał kolejne zamówienia (w sumie 5). Kluczami w takiej mapie mają być wartości odpowiadające id-kom z każdego z zamówień.

Podpowiedź: Klasa Order i Mapa to osobne “byty”. Nie należy tworzyć mapy w klasie. Mapa przechowuje obiekty stworzone przez konstruktor klasy Order.
*/
const orderMap = new Map();
class Order {
  id;
  name;
  price;

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  sendOrder() {
    orderMap.set(this.id, this.name);
  }
}

// const num = orderMap.size;
//* Dynamiczne dodawanie elementów do mapy
orderMap.set(orderMap.size, new Order(1, 'Graphical card', '300$'));
orderMap.set(orderMap.size, new Order(2, 'Processor chip', '420$'));
orderMap.set(orderMap.size, new Order(3, 'Monitor', '220$'));
orderMap.set(orderMap.size, new Order(4, 'PC box', '150$'));
orderMap.set(orderMap.size, new Order(5, 'Mouse', '320$'));

console.log(orderMap);

// ! OOP - prototypy i dziedziczenie

// Ex.1

/*
Wymień korzyści płynące z wykorzystywania dziedziczenia w swoich programach

  - Największą korzyścią jest nie powtarzanie metod które są podobnej budowy
  - Kod wtedy jest czytelniejszy, jest go mniej przez co program jest szybszy w działaniu
  - Chcąc kopiować całe ciało metody przy późniejszych zmianach trzeba je zawrzeć wszędzie, a przy wykorzystaniu dziedziczenia zmiany zajdą w jednym miejscu i w reszcie również one nastąpią. Tworząc "parenta" czyli klasę bazową i przy tworzeniu kolejnych klas "child" czyli klasę która będzie "pobierać cechy rodzica (metody, właściwości)"

*/

// Ex.2

/*

Stwórz klasę Teacher dziedziczącą po Person. W klasie Person mają znajdować się takie pola jak: name oraz surname. W Teacher zaimplementuj metodę teach, która otrzymuje stringa subject i wydrukuje:

<Teacher’s name and surname> is now teaching <subject>.


*/

// class Person {
//   name;
//   surname;
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// }

// class Teacher extends Person {
//   subject;

//   constructor(name, surname, subject) {
//     super(name, surname);
//     this.subject = subject;
//   }

//   teach() {
//     console.log(
//       `Teacher's ${this.name} ${this.surname} is now teaching ${this.subject}`
//     );
//   }
// }

// const john = new Teacher('Adam', 'Jochemczyk', 'Programming');
// john.teach();

//Ex.3

/*
Stwórz klasę Account, która będzie przechowywała pola: balance, number (numer konta) oraz metody: deposit(value), withdraw(value) oraz gettery i settery dla wymienionych pól. Implementację metod deposit oraz withdraw pozostawiam Tobie. Pamiętaj o dodaniu odpowiednich walidacji w takich metodach (np. wpłacana wartość nie może być ujemna).

Następnie stwórz dwie klasy dziedziczące po Account: SavingAccount oraz CurrentAccout.

Klasa SavingAccount powinna posiadać również pole: interest i metodę, która będzie odpowiednio zwiększała wartość przechowywanego atrybutu.

CurrentAccount powinien natomiast składać się z atrybutu overdraft_limit z metodą zwiększającą jego wartość. 

Następnie stwórz klasę Bank, która będzie zawierała tablicę wielu obiektów Account (konkretnie CurrentAccout oraz SavingAccount). W banku stwórz metodę update, która będzie iterowała po każdym koncie i dodawała do niego dowolną wielkość depozytu. Dodatkowo, w przypadku obiektu typu SavingAccount, ma być zwiększane pole interest każdego konta o 5, a dla CurrentAccount - overdraft_limit o 10.
*/

// class Account {
//   #balance;
//   #number;

//   constructor(balance, number) {
//     this.#balance = balance;
//     this.#number = number;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   get number() {
//     return this.#number;
//   }

//   set balance(balance) {
//     this.#balance = balance;
//   }

//   set number(number) {
//     this.#number = number;
//   }

//   deposit(value) {
//     if (value > 0) {
//       this.balance += value;
//     } else if (value < 0) {
//       alert('Invalid value');
//     }
//   }

//   withdraw(value) {
//     if (value > 0) {
//       this.balance -= value;
//     } else if (value < 0) {
//       alert('Invalid value');
//     }
//   }
// }

// const amount = new Account(4202, '64 2240 0008 8061 0247 3181 0817');
// console.log(amount.balance, amount.number);
// amount.deposit(200);
// amount.withdraw(320);
// console.log(amount.balance, amount.number);

// console.log(Account.prototype);

// Ex.4

/*

Podaj przykład praktycznego wykorzystania prototypu w JS.

* Prototyp może byc wykorzystany do łatwego dostępu metod dla innych instancji/klas czy dynamicznie dodawanie pól w klasach. Najprościej w świecie prototype tworzy taki łańcuch metod które stworzyliśmy i po dodaniu do nowej kalsy prototype i wywołaniu metody z innej klasy sprawdza czy taka jest w poprzednich klasach i ją wywołuję. 

* Przykładowo mamy klase Elf w której jest kilka pól/atrybutów i metod, teraz chcemy stworzyć klasę Dark_elf która odziedziczy w łatwy sposób wszystkie cechy i metody klasy Elf przez wykorzystanie prototype (obiektu każdej funkcji), która też jest obiektem czyli ma swój własny prototype (nazywa się to "prototype chain"). Generalnie Dark_elf ma odziedziczyć metody i pola, a także otrzymać własną funkcję niedostępną dla innych klas.  
*/

// class Elf {
//   race_skills;
//   class_abilities;
//   features;

//   constructor(race_skills, class_abilities, features) {
//     this.race_skills = race_skills;
//     this.class_abilities = class_abilities;
//     this.features = features;
//   }

//   stats(str, dex, int) {
//     console.log(
//       `This ${this.class_abilities} has ${str} STR, ${dex} DEX, ${int} INT`
//     );
//   }
// }

// Elf.prototype.stats = stats;
// const avallach = new Elf('Excelent bow skills', 'Elven fighter', 'Agile');
// avallach.stats(72, 61, 82);

// Dark_elf.prototype = new Elf();
// Dark_elf.prototype.call = function () {
//   alert('Only Dark Elfs has this abillity ');
// };

// Ex.5

/*

Stwórz klasę Airplane z polem name oraz flagą isFlying (typ bool), która domyślnie jest ustawiana na false. 
Utwórz dwa obiekty Airplane.
Korzystając z prototypu, dodaj do obiektów metodę takeOff, która będzie ustawiała flagę isFlying na true oraz land - setującą isFlying na false. Sprawdź, czy metody dodane dzięki prototypowi są prawidłowo wywoływane i realizują swoje założenia.


*/

class Airplane {
  name;
  isFlying = false;

  constructor(name) {
    this.name = name;
  }
}

Airplane.prototype.takeOff = function () {
  return (this.isFlying = true);
};

Airplane.prototype.land = function () {
  return (this.isFlying = false);
};

const boeing = new Airplane('127');
boeing.takeOff();
boeing.land();
console.log(boeing);

//! Ex.6 --> dokończ

/*

    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.


*/

class Car {
  model;
  milesPerGallon;

  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
  }

  fill(gallons) {
    this.tank += gallons;
  }

  drive(distance) {
    this.odometer += distance;
  }
}

const bmw = new Car('e92', 24);

Car.prototype.tank = 0;
Car.prototype.odometer = 0;
bmw.fill(60);
bmw.drive(49);

console.log(bmw);

// ! PROMISY/ASYNC/AWAIT
// const promise=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("sukces")
//   }, 1500);
//   setTimeout(() => {
//     reject(new Error("Error"))
//   }, 1200);
// })

// promise.then(code=>{
//   console.log(1)
// }).catch(err=>{
//   console.log(2)
// }).finally(()=>console.log("Promise finished"))

//fetch('https://jsonplaceholder.typicode.com/todos/1').then(response =>response.json()).then(json=>console.log(json));

// async function start() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await response.json();
//   return data;
// }
// start().then(data => console.log(data))
