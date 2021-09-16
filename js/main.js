var elForm = document.querySelector('.fizzbuzz-form');
var elInput = document.querySelector('.input');
var elOutput = document.querySelector('.output');

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

var inputNumber = parseInt(elInput.value.trim(), 10);

var message = "";

var content = inputNumber % 3 === 0 && inputNumber % 5 === 0 ? 'FizzBuzz' : inputNumber % 3 === 0 ? 'Fizz' : inputNumber % 5 === 0 ? 'Buzz' : elOutput.textContent = inputNumber;
elOutput.textContent = content;

// if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
//     message += "FizzBuzz";
// }   else if (inputNumber % 3 === 0) {
//     message += "Fizz";
//   } else if (inputNumber % 5 === 0) {
//     message += "Buzz";
//   } else {
//     inputNumber;
//   }

//   elOutput.textContent = message || inputNumber;


});