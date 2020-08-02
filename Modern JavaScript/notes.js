/* Undefined vs null vs NaN
    Undefined is the default value of any variable that is left uninitialized. Undefined should not be set a value to a variable - Its a type
    Null: is never a default value. You can assing this to a variable if you want to reset/clear a variable - Its a type
    NaN: Its not a type but technically a type of number that can be used in calculations
*/

/* TypeOf - returns the type of a variable provided as an argument
    typeOf([1, 2, 3]) => will not return an array but an object. Arrays are special kind of objects in javascript
    typeOf(null) - is object
    typeOf(undefined) is undefined
    typeOf(NaN) is number
*/

console.log(typeof(124));
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(NaN));

/*
    Comparisons

    JavaScript trats 0 as false. All the other numbers will be considered true, even the negative ones as well
    Empty strings is treated as false as well;
    Emptry array and objects will return true;
*/
const compareNumberX = 0;
console.log(compareNumberX ? true :  false);

const compareStringX = "";
console.log(compareStringX ? true : false);

const compareArray = [];
const compareObject = {};
console.log(compareArray ? true : false);
console.log(compareObject ? true : false);


/*
    var vs const vs let

    var: var creates a variable, just like let, which you can change. var declares the variable in the function and globalScope.
    let and const uses block scope
*/

let scopingName = 'kinny';
var scopingVar = 'Anna';

function scopingGreet() {   
    var scopingAge = 30;
    console.log(scopingName, scopingAge);
}

if (scopingName === 'kinny') {
    var scopingHobbies = ['test', 'test1'];
    console.log(scopingHobbies);
}

// console.log(scopingName, scopingAge); -  this is gonna give an error coz var is both functional and glabl scoped
console.log(scopingHobbies);
scopingGreet();


/*
    Hoisting - Javascripts looks over the entire file and looks for your functions and variables. and pulls all the vars to the top and leave them as undefined
    Its does that for let and const as well but does not initialize it
*/

console.log(hoistingName);
var hoistingName = 'kinny'; // undefined