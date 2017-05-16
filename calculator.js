'use strict';

function Calc(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
};

Calc.prototype.add = function add(number1, number2) {
  // console.log(this.number1 + this.number2);
  return this.number1 + this.number2;
};

Calc.prototype.subtract = function subtract (number1, number2) {
  // console.log(this.number1 - this.number2);
  return this.number1 - this.number2;
};

Calc.prototype.multiply = function multiply (number1, number2) {
  // console.log(this.number1 * this.number2);
  return this.number1 * this.number2;
};

Calc.prototype.divide = function divide (number1, number2) {
  if (this.number1 === null || this.number2 === null) {
    console.log("null");
    return "null";
  }
  else {
    console.log(this.number1 / this.number2);
    return this.number1 / this.number2;
  };
};

var newCalculation = new Calc (null, 20);

newCalculation.add();
newCalculation.subtract();
newCalculation.multiply();
newCalculation.divide();
