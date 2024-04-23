// не впевнений що саме так потрібно було зробити, але начебто все працює))))))))

let currentYear = 2024;
let inputBirthYear = prompt("Введіть ваш рік народження:");
let inputCity = prompt("В якому місті Ви народились?");
let inputSport = prompt("Який ваш улюблений вид спорту?");
let age = currentYear - +inputBirthYear;

let userInputCity = inputCity.toLowerCase();
let userCity = userInputCity.replace(/[ ]+/g, "");

let userInputSport = inputSport.toLowerCase();
let userSport = userInputSport.replace(/[ ]+/g, "");

// в мене не вийшло з replaceALL (прибати всі пробіли, якщо випадково корситувач ввів наприклад "К  иїв".
// Знайшов цей варіант replace(/[ ]+/g, "") на stackoverflow. Не розумію як але працює)))))

let output = function capitalizeFirstLetter(x) {
  return x[0].toUpperCase() + x.slice(1);
};

let abc = output(userCity);
output(userSport);

switch (true) {
  case abc === "Лондон":
    i = `Ти живеш у столиці Великобританії!`;
    break;
  case abc === "Київ":
    i = `Ти живеш у столиці України`;
    break;
  case abc === "Вашингтон":
    i = `Ти живеш у столиці Сполучених Штатів Америки`;
    break;
  default:
    i = `Ти живеш у місті ${output(userCity)}.`;
    break;
}

switch (true) {
  case output(userSport) === "Футбол":
    e = `Круто! Хочеш стати Ліонелєм Месі?`;
    break;
  case output(userSport) === "Бокс":
    e = `Круто! Хочеш стати Олександром Усиком?`;
    break;
  case userSport === "Баскетбол":
    e = `Круто! Хочеш стати Майклом Джорданом?`;
    break;
  default:
    e = output(userSport);
    break;
}
switch (true) {
  case inputBirthYear === null:
    alert(`${i} ${e} Шкода що Ви не захотіли ввести свій вік`);
    break;
  case inputCity === null:
    alert(`Вам ${age} років. ${e} Шкода що Ви не захотіли ввести своє місто`);
    break;
  case inputSport === null:
    alert(
      `Вам ${age} років. ${i} Шкода що Ви не захотіли ввести свій улюблений спорт`,
    );
    break;
  default:
    alert(`Вам ${age} років.${i} ${e}`);
    break;
}
