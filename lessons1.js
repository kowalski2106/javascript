"use strict";

const category = 'toys';
console.log(`hello ${category}`);

const user = "Igor";
console.log(`Привет ${user}`);

console.log('array' + ' - object');
console.log(4 + +' - object'); //nan
console.log(4 + +'5'); //9 

let incr = 10, 
    decr = 10;

//++incr;
//--decr;

console.log(++incr);
console.log(--decr);

console.log(2 + 2 * 2 === 8);

const isChecked = true,
      isClose = false;
console.log(isChecked && !isClose);