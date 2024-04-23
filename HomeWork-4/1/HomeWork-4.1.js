let inputName = prompt("What is your name?");
let firstName = inputName.toLowerCase();
let output = function capitalizeFirstLetter(firstName) {
  return firstName[0].toUpperCase() + firstName.slice(1);
};
alert(`Hello, ${output(firstName)}! How are you?`);
