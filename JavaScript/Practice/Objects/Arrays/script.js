"use strict";

// Array operations

//! Exercise 1

const people = [
    { firstName: "Sam", lastName: "Hughes", birthYear: "07/07/1978", department: "Development", salary: "45000" },
    { firstName: "Terri", lastName: "Bishop", birthYear: "02/04/1989", department: "Development", salary: "35000" },
    { firstName: "Jar", lastName: "Burke", birthYear: "11/01/1985", department: "Marketing", salary: "38000" },
    { firstName: "Julio", lastName: "Miller", birthYear: "12/07/1991", department: "Sales", salary: "40000" },
    { firstName: "Chester", lastName: "Flores", birthYear: "03/15/1988", department: "Development", salary: "41000" },
    { firstName: "Madison", lastName: "Marshall", birthYear: "09/22/1980", department: "Sales", salary: "32000" },
    { firstName: "Ava", lastName: "Pena", birthYear: "11/02/1986", department: "Development", salary: "38000" },
    { firstName: "Gabriella", lastName: "Steward", birthYear: "08/26/1994", department: "Marketing", salary: "46000" },
    { firstName: "Charles", lastName: "Campbell", birthYear: "09/04/1977", department: "Sales", salary: "42000" },
    { firstName: "Tiffany", lastName: "Lambert", birthYear: "05/11/1990", department: "Development", salary: "34000" },
    { firstName: "Antonio", lastName: "Gonzalez", birthYear: "03/24/1985", department: "Office Management", salary: "49000" },
    { firstName: "Aaron", lastName: "Garrett", birthYear: "09/04/1985", department: "Development", salary: "39000" },
];

// Exercises

// 1) What is the average income of all the people in the array?

// const averageIncome = (salary) =>{

// }

const numberOfPeople = people.length;

const salary = people.reduce((add, person) => add + parseInt(person.salary), 0);
console.log(Math.round(salary / numberOfPeople));

// 2) Who are the people that are currently older than 30?

const age = people.filter((el) => new Date().getFullYear() - new Date(el.birthYear).getFullYear() > 30);

console.log(age);

// 3) Get a list of the people's full name (firstName and lastName).

function getFullName(el) {
    console.log(el.firstName + " " + el.lastName);
}

const fullName = people.forEach(getFullName);

console.log(fullName);

// 4) Get a list of people in the array ordered from youngest to oldest.

const years = people.map((el) => new Date().getFullYear() - new Date(el.birthYear).getFullYear());
years.sort();
console.log(years);

// 5) How many people are there in each department?

// ???

//! Exercise 2

const orders = [
    {
        orderId: "123",
        customerId: "123",
        deliveryDate: "01-01-2020",
        delivered: true,
        items: [
            { productId: "123", price: 55 },
            { productId: "234", price: 30 },
        ],
    },
    { orderId: "234", customerId: "234", deliveryDate: "01-02-2020", delivered: false, items: [{ productId: "234", price: 30 }] },
    {
        orderId: "345",
        customerId: "234",
        deliveryDate: "05-01-2020",
        delivered: true,
        items: [
            { productId: "567", price: 30 },
            { productId: "678", price: 80 },
        ],
    },
    {
        orderId: "456",
        customerId: "345",
        deliveryDate: "12-01-2020",
        delivered: true,
        items: [
            { productId: "789", price: 12 },
            { productId: "890", price: 90 },
        ],
    },
    {
        orderId: "578",
        customerId: "456",
        deliveryDate: "12-01-2020",
        delivered: true,
        items: [
            { productId: "901", price: 43 },
            { productId: "123", price: 55 },
        ],
    },
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

const orderList = orders.filter((el) => el.orderId === "234" || el.delivered === "false");

console.log(orderList);

// 2) Create a new property on each order with the total price of items ordered.

const totalPrice = orders.map((obj) => ({ ...obj, totalPrice: obj.items.reduce((prev, curr) => prev + curr.price, 0) }));

//! Wartość "0" w składni funkcji .reduce(); oznacza "initialValue" i do której wartości jest inicjalizowana previous parametr, jeśli nie jest określona to dodaje się do 1 wartości tablicy i current jest drugim elementem

console.log(totalPrice);

// 3) Have all the orders been delivered?

const getDeliveredOrders = (element) => element.delivered === true;

console.log(orders.map(getDeliveredOrders));
console.log(orders.every(getDeliveredOrders));

// 4) Has the customer with ID '123' made any orders?

console.log(orders.some((element) => element.items));

// 5) Have any products with an id of 123 been sold?

// ! Wersja z reduce()
// const howMany = orders.reduce((acc, curr) => acc + curr.items.reduce((acc, item) => acc + (item.productId === "123"), 0), 0);

// ! Wersja z some()
const howMany = orders.some((order) => order.items.some((item) => item.productId === "123"));

console.log(howMany);

//! --> Exercise 3

const users = [
    { id: "88f24bea-3825-4237-a0d1-efb6b92d37a4", firstName: "Sam", lastName: "Hughes" },
    { id: "2a35032d-e02b-4508-b3b5-6393aff75a53", firstName: "Terri", lastName: "Bishop" },
    { id: "7f053852-7440-4e44-838c-ddac24611050", firstName: "Jar", lastName: "Burke" },
    { id: "d456e3af-596a-4224-b1dc-dd990a34c9cf", firstName: "Julio", lastName: "Miller" },
    { id: "58a1e37b-4b15-47c1-b95b-11fe016f7b64", firstName: "Chester", lastName: "Flores" },
    { id: "b4a306cb-8b95-4f85-b9f8-434dbe010985", firstName: "Madison", lastName: "Marshall" },
    { id: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", firstName: "Ava", lastName: "Pena" },
    { id: "7f0ce45a-bdca-4067-968b-d908e79276ce", firstName: "Gabriella", lastName: "Steward" },
    { id: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", firstName: "Charles", lastName: "Campbell" },
    { id: "e789565f-fa5a-4d5e-8f6c-dd126cf995be", firstName: "Madison", lastName: "Lambert" },
];

const comments = [
    { userId: "88f24bea-3825-4237-a0d1-efb6b92d37a4", text: "Great Job!" },
    { userId: "7f053852-7440-4e44-838c-ddac24611050", text: "Well done, I think I understand now!" },
    { userId: "e789565f-fa5a-4d5e-8f6c-dd126cf995be", text: "How do you do that? 😲" },
    { userId: "7f053852-7440-4e44-838c-ddac24611050", text: "OK great thanks" },
    { userId: "b4a306cb-8b95-4f85-b9f8-434dbe010985", text: "Cool, thanks!" },
    { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Nice one 😉" },
    { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Got it." },
    { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Thanks!" },
    { userId: "58a1e37b-4b15-47c1-b95b-11fe016f7b64", text: "Cool 😀" },
    { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Great stuff!" },
];

// Exercises

// 1) What is Madison Marshall's user id?

// * find() method

// const userId = users.find((item) => item.firstName === "Madison" || item.lastName === "Marshall");

// console.log(userId);

// * forEach() method

const userId = users.forEach((item) => {
    if (item.firstName === "Madison" && item.lastName === "Marshall") {
        console.log(item.id);
    }
});

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

const firstComment = comments.slice(0, 1);
console.log(firstComment);

// 3) Which user commented 'OK great thanks'?

const great = users.find((user) => user.id === comments.find((item) => item.text === "OK great thanks").userId);
console.log(great);

// 4) Add the user's first and last name to each comment in the comments array

const addName = comments.map((comment) => {
    const { firstName, lastName } = users.find((user) => user.id === comment.userId); // !Destrukturyzacja właściwości
    return { ...comment, firstName, lastName };
});

console.log(addName);

// 5) Get a list of the users who haven't commented
