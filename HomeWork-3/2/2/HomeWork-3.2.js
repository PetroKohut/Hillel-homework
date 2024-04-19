let firstName = prompt("Привіт! Як тебе звати?");
let lastName = prompt(`${firstName}, як твоє прізвище?`);
let age = Number(prompt("Скільки тобі років?"));
if (age > 40) {
  alert(`${firstName} ${lastName}, ти на ${age - 40} років старший за мене.`);
} else if (age < 40) {
  alert(`${firstName} ${lastName}, ти на ${40 - age} років молодший за мене.`);
} else {
  alert(`${firstName} ${lastName} ми з тобою одного віку.`);
}
