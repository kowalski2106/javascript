let numberSeven = Number(prompt("Введите число 7"));
let birthMonth = Number(prompt("Введите месяц вашего рождения"));
let calculation = numberSeven * birthMonth;
calculation = calculation - 1;
calculation = calculation * 13;
let birthDay = Number(prompt("Введите число вашего дня рождения"));
calculation += birthDay;
calculation += 3;
calculation *= 11;
calculation -= birthMonth;
calculation -= birthDay;
calculation /= 10;
calculation += 11;
calculation /= 100;
document.write("Вы родились " + calculation);