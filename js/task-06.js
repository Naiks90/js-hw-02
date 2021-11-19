let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }
  input = Number(input);
  if (input === '' || Number.isNaN(input)) {
    alert(`'Вы ввели не число'`);
  } else {
    numbers.push(input);
  }
}

const sumInpit = function (args) {
  for (let arg of args) {
    total += arg;
  }
  console.log(total);
};
sumInpit(numbers);
