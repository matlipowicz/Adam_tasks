'use strict';

//! PROBLEMY DO ROZWIĄZANIA PRZY TWORZENIU KALKULATORA BEZ TUTORIALU
/*
1) Nie wyświetlający się operator 
2) Poszerzanie się display przy większej liczbie 
3) Dodanie większej funkcjonalności 
4) Dodanie warunku gdy mamy jedną liczbę, żeby nic się nie działo po kliknięciu równa się 
*/

//HTML ELEMENTS

//* Display
const previousNum = document.querySelector('.previous-num p');
const operator = document.querySelector('.math-sign');
const currentNum = document.querySelector('.current-num');

//* Calculator panel

const numberBtn = document.querySelectorAll('.number');
const operationBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');

//* Calculation history

const historyClearBtn = document.querySelector('.calc-history__btn');
const historyList = document.querySelector('.calc-history__box');

//* Events

numberBtn.forEach((button) => {
  button.addEventListener('click', displayNum);
});

operationBtn.forEach((button) => {
  button.addEventListener('click', operation);
});

equalBtn.addEventListener('click', equationResult);

clearBtn.addEventListener('click', clearDisplay);

historyClearBtn.addEventListener('click', clearHistory);

//* Held value

let result = '';

//! Functions

function displayNum() {
  //* Condition for single dot
  if (this.textContent === '.' && currentNum.innerHTML.includes('.')) return;
  if (this.textContent === '.' && currentNum.innerHTML === '')
    return (currentNum.innerHTML = '0.');

  currentNum.innerHTML = currentNum.innerHTML + this.textContent;
}

function clearDisplay() {
  currentNum.innerHTML = '';
  previousNum.innerHTML = '';
  operator.innerHTML = '';
}

function clearHistory() {
  historyList.innerHTML = '';
}

function addEquationToHistory() {
  const historyItem = document.createElement('li');
  historyItem.textContent = `${currentNum.innerHTML} ${operator.innerHTML} ${previousNum.innerHTML} = ${result}`;
  historyItem.style.cssText =
    'text-align: center; border-bottom: 1px solid #000; margin: 20px;';
  // historyItem.style.borderBottom = '2px solid #eee';
  // historyItem.style.borderBottom = '2px solid #eee';
  historyList.appendChild(historyItem);
}

function operation() {
  //* Operations with negative numbers
  if (this.textContent === '-' && currentNum.innerHTML === '') {
    currentNum.innerHTML = '-';
  } else if (currentNum.innerHTML === '') return;

  //* A condition which allows to not click the equal button repetitively
  if (operator.innerHTML !== '') {
    equationResult();
  }

  previousNum.innerHTML = currentNum.innerHTML;
  operator.innerHTML = this.textContent;
  currentNum.innerHTML = '';
}

function equationResult() {
  let operand = operator.innerHTML;
  let x = Number(currentNum.innerHTML);
  let y = Number(previousNum.innerHTML);

  switch (operand) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case 'x':
      result = x * y;
      break;
    case ':':
      result = y / x;
      break;
    case '^':
      result = Math.pow(x, y);
      break;
  }
  addEquationToHistory();
  currentNum.innerHTML = result;
  previousNum.innerHTML = '';
  operator.innerHTML = '';
}
