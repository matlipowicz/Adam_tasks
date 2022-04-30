'use strict';

const hamburgerMenu = document.querySelector('.nav');

const hamburgerToggle = document.querySelector('.hamburger__icon');

const crossToggle = document.querySelector('.nav__cross');

hamburgerToggle.addEventListener('click', () => {
  hamburgerMenu.classList.add('active');
});

crossToggle.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
});

//Array, Map, Set, Object

// const obj={
//   key: value
// }

// const people=new Set(["123","123"])
// Array.from(people)
