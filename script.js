let fun1 = function (a, b) {
    result = a + b;
    return result
}

console.log(fun1(2, 3))

let fun2 = (a, b) => a + b;

console.log(fun2(3, 4));

let fun3 = (x, y, z, m = []) => {
    console.log(x+y+z,m);
    console.log(m[0]);
    m.push('hello');
    console.log(m)

}
fun3(4,3,2,[1,2,3]);

let arr = []
for (i = 0; i < 5; i++) {
    arr.push(i);
    for (j = 0; j < arr.length; j++) {
        console.log(arr)
    }
}


let i = 0;
while (i < 3) {
    console.log(i)
    i++;
}

let x = 3;
while (x) {
    console.log(x);
    x--;
}


document.addEventListener('click', (event) => {
    event.preventDefault();
})

let value = 5;
let isThatBiggerThanTen = (value > 10) ? console.log("больше 10") : console.log("не больше 10");

let arr1 = ["cat", "dog"];
console.log(arr1[1]);
delete arr1[1];
console.log(arr1[1]); //undefined

let arr2 = ["dog", "cat", "octupus"];
if (2 in arr2) {
    console.log("Это значение есть в массиве");
}

let myString = new String();
if (myString instanceof String) {
    console.log("Да, это строка");
}

let today = new Date();
let bird = new Pet();

let str1 = "Hello";
console.log(typeof str1);

let time = 11;
if (time < 12 ? console.log("Доброе утро") : console.log("Привет"));

let myLanguage = 'французкий';
switch (myLanguage) {
    case "русский": console.log("Привет!"); break;
    case "немецкий": console.log("Guetan tag!"); break;
    default: console.log('Я не знаю ' + myLanguage + ' язык');
}
