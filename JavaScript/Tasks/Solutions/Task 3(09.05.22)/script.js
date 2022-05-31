'use strict';

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   });

// const what = new Promise((resolve, reject) => {
//   let answer = 5;

//   if (answer === 25) {
//     resolve('That is correct answer!');
//   } else {
//     reject('That is incorrect answer ;(');
//   }
// });

// what
//   .then(age => {
//     console.log(age);
//   })
//   .catch(age => {
//     console.log(age);
//   });

//! Mentoring exercises

//! EX.1
/*
Mając do dyspozycji poniższe endpointy API:

const countriesAPI = 'https://restcountries.com/v3.1/all' 
const catsAPI = 'https://api.thecatapi.com/v1/breeds' 

- Pobierz listę wszystkich krajów, a następnie wydrukuj informacje w postaci: Państwo - Stolica - Powierzchnia - Języki Urzędowe - Populacja

- Wyświetl wszystkie imiona kotów, pobierając je spod catsAPI

- Odczytaj nazwy 10 największych państw pod względem
a) powierzchni
b) zaludnienia

- Rozwiązanie zaimplementuj, wykorzystując Promise-y oraz łańcuchowe wywołanie .then()/.catch() oraz z użyciem async/await. 
*/

// const countriesAPI = fetch('https://restcountries.com/v3.1/all')
//   .then(response => {
//     response.text();
//   })
//   .then(data => console.log(data))
//   .catch(err => {
//     console.log('Wrong API');
//   });

// console.log(countriesAPI);
//? Jak to zamienić na stringi?
//! Async + await
// const api_url = 'https://restcountries.com/v3.1/all';

// async function getCountry() {
//   const response = await fetch(api_url);
//   const data = await response.json();

//   const countrySpec = data;

//   const countryData = countrySpec.map(country => ({
//     name: country.name,
//     capitol: country.capital,
//     area: country.area,
//     population: country.population,
//     languages: country.languages,
//   }));

//   const sortedCountry = countryData.sort((a, b) => b.area - a.area);

//   console.log(sortedCountry);

//   //   Sort --> potem slice()
// }

// getCountry();

//   //? Jak zwrócić największe wartości z tablicy obiektów (CZY TO BYŁOBY PRZEZ Math.max) ? --> tutaj wyrzuca mi tylko największą wartość
//   let max = countrySpec.reduce((acc, curr) =>
//     acc.area > curr.area ? acc : curr
//   );

//   console.log(max);
// }

// getCountry();

//! Promise

// fetch('https://restcountries.com/v3.1/all')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     let countrySpec = data;

//     let countryData = countrySpec.map(country => ({
//       name: country.name,
//       capitol: country.capital,
//       area: country.area,
//       population: country.population,
//       languages: country.languages,
//     }));

//     console.log(countryData);
//* Inna wersja wylogowania
//     let countryData = countrySpec.map(country => {
//       return `${country.name.common} - ${country.capital} - ${country.area} - ${country.population} - ${country.languages}`;
//     });
//     console.log(countryData);
//     console.log(countrySpec);
//   });

// const api_locator = 'https://api.thecatapi.com/v1/breeds';
// const cat = [];
// async function getCatName() {
//   const response = await fetch(api_locator);
//   const data = await response.json();
//   //   console.log(data);

//   let catData = data;
//   let catName = catData.map(name => {
//     return cat.push(name.name);
//   });

//   console.log(cat);
// }

// getCatName();

//! EX.2

/*

Aby spełniał następujące założenia:
-	funkcja job musi zwracać obiekt Promise
-	Promise ma się po wywołaniu wykonywać 2 sekundy i dostarczać napis ‘hello world’


*/
//? W PromiseResult mam undefined, dlaczego?
// async function job() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello World!'), 2000);
//   });
// }

// console.log(job());

//! EX.3 --> do dokończenia

// async function job(result, database, errorManager) {
//     try{
//         const info= await database.get(id)
//         const result=await info.name
//         return result
//     }catch(error) {
//       errorManager.notify(error);
//       throw error;
//     }
// }

// job();

// EX. 4

// async function getPersons() {
//   const url = 'https://fakerapi.it/api/v1/persons?_quantity=10';
//   const response = await fetch(url);
//   const { data } = await response.json();

//   return data.map(({ firstname, lastname, image }) => ({
//     firstname,
//     lastname,
//     image,
//   }));
// }

// //pure functions

// const createNode = ({ firstname, lastname, image }) => {
//   const p = document.createElement('p');
//   p.innerText = `${firstname} ${lastname}`;
//   const img = document.createElement('img');
//   img.src = image;
//   const div = document.createElement('div');
//   div.appendChild(p);
//   div.appendChild(img);
//   return div;
// };

// getPersons().then(data => {
//   const root = document.querySelector('#root');
//   console.log(root);
//   data.forEach(element => {
//     const div = createNode(element);
//     console.log(div);
//     root.appendChild(div);
//   });
// });

//http codes --> https://http.cat/

//! Adam's test tasks --> spróbuj w wolnej chwili

// const api_url = 'https://jsonplaceholder.typicode.com/comments';

// async function getComments() {
//   const response = await fetch(api_url);
//   const data = await response.json();

//   let table = document.getElementById('myTable');
//   let column = document.getElementById('button-table');
//   let newButton = document.createElement('button');
//   newButton.textContent = 'Usuń';

//   column.appendChild(newButton);

//   for (let i = 0; i < data.length; i++) {
//     let row = `<tr>
//                     <td>${data[i].name}</td>
//                     <td>${data[i].email}</td>
//                     <td>${data[i].body}</td>

//                 </tr>`;

//     table.innerHTML += row;
//   }

//   console.log(data, newButton);
// }

// getComments();

// let getSomething = async () => {
//   return 7;
// };

// let promise = getSomething();
// promise.then(alert);

/*

Zapoznaj się z API [https://jsonplaceholder.typicode.com] i pobierz z API [https://jsonplaceholder.typicode.com/users] po załadowaniu strony wszystkich userów, a następnie za pomocą JSa stwórz funkcję, która stworzy komponent (kartę) i wyświetli dane usera w przeglądarce (name, username, email oraz adres miasto, ulica, kod pocztowy w rozwijanym w karcie panelu). Zastosuj operacje na DOM, składnię async, await oraz ostyluj galerię kart userów z wykorzystaniem pomocą SCSSa.

*/

const userApi_url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
  const response = await fetch(userApi_url);
  const data = await response.json();

  // console.log(data);

  // ? Co to jest za zapis?
  return data.map(({ name, username, email, address }) => ({
    name,
    username,
    email,
    address,
  }));

  // return data.map(user => ({
  //   name: user.name,
  //   username: user.username,
  //   email: user.email,
  //   address: user.address,
  // }))
}

const userData = getUsers();
console.log(userData);

const createCard = ({ name, username, email, address }) => {
  // User name
  const userName = document.createElement('p');
  userName.innerText = `${name} ${username}`;
  const userEmail = document.createElement('p');
  userEmail.innerText = `${email}`;

  // User address
  let city = `<p>${address.city}</p>`;
  let street = `<p>${address.street}</p>`;
  let zipcode = `<p>${address.zipcode}</p>`;

  // User address btn
  const btn = document.createElement('button');
  btn.classList.add('address-btn');
  btn.innerText = 'Unroll address';

  // User card
  const userAddress = document.createElement('div');
  userAddress.classList.add('user-data-address');
  userAddress.innerHTML = `City: ${city} Street: ${street} Zipcode: ${zipcode}`;
  const card = document.createElement('div');
  card.classList.add('user-data');
  card.appendChild(userName);
  card.appendChild(userEmail);
  card.appendChild(btn);
  card.appendChild(userAddress);

  // Unrolling address //? Jak to zrobic żeby się chowało i pojawiało
  // const clickBtn = document.querySelector('.address-btn');
  // const unrollBtn = document.querySelector('.user-data-address');

  // function hideDiv() {
  //   return unrollBtn.classList.toggle('unroll');
  // }

  // clickBtn.addEventListener('click', hideDiv());
  return card;
};

// const createBtn = () => {
//   const userAddressBtn = document.createElement('button');
//   userAddressBtn.classList.add('address-btn');
//   userAddressBtn.innerText('Unroll address');
// };

getUsers().then(data => {
  const card = document.querySelector('#card');
  console.log(card);
  data.forEach(item => {
    let div = createCard(item);
    console.log(div);
    card.appendChild(div);
  });
});
