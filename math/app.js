var math = require('./mathlib')();
console.log(math);
console.log(math.add(2, 5));         //should return 7
console.log(math.multiply(3, 7));    //should return 21
console.log(math.square(7));         //should return 49
console.log(math.random(1, 35)); //should return random number between 1 & 35