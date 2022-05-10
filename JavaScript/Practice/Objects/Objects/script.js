"use strict";

// Object operations

// ! Usuwanie
let myObject = {
    ircEvent: "PRIVMSG",
    method: "newURI",
    regex: "^http://.*",
};

delete myObject.regex;
console.log(myObject);

// ! Kopiowanie

// Mało polecane podejście z spread operator

let myObject2 = { ...myObject };

const name = {
    firstName: "Matthew",
};

myObject2.firstName = "Matthew";

console.log(myObject2);

// Częściej uzywane podejscie z Object.assign
