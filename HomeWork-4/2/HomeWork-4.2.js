// Мені не дуже подобається цей код, але кращого я поки не вигадав

let inputNumber = prompt("Type your 3 digit number, please!");
let numbers = inputNumber.toString();
if (numbers[0] === numbers[1] && numbers[0] === numbers[2]) {
  console.log("All numbers are equal");
} else if (
  numbers[0] === numbers[1] ||
  numbers[0] === numbers[2] ||
  numbers[1] === numbers[2]
) {
  console.log("Some numbers are equal");
} else {
  console.log("There are no equal numbers");
}
