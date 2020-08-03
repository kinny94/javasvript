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
    typeOf(() => consolg.log()) is also an object
*/

console.log(typeof(124));
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(NaN));
console.log(typeof(() => 'test'));

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

/*
    Function expressions vs Function declaration
    function expression will be hoisted to the top and can be used any where
    function declaration also get hoised but as undefined
*/

function functionDeclaraion(a, b) {
    console.log(a, b);
}

const functionDeclaration = function(a, b) {
    console.log(a, b);
}

/*
    Rest Parameters- The idea is tha we can pass as many arguements as we want and create a sum for those.
    But we can't know how many arguments will this function will receive
*/

const restParameterSumUp =  (...parameters) => {
    let sum = 0;
    parameters.map((number) => sum = sum + number);
    return sum;
}

console.log(restParameterSumUp(1, 2, 3, 4, 5, 6, 7));

/*
    The bind function creates its new function that, when called,  has its own this keyword set to the provided value, with a given sequence of arguements preceding
    any provided when the new function is called
*/

const bindObject = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const bindUnBoundGetX = bindObject.getX;
console.log(bindUnBoundGetX()); // this will return undefeind 

const bindBoundGetX = bindUnBoundGetX.bind(bindObject);
console.log(bindBoundGetX());

/*
    The apply method calls a function with a given `this` value, and arguements provided as an array
*/
const applyNumbers = [5, 6, 7, 8, 9];
const applyMax = Math.max.apply(null, applyNumbers);
console.log(applyMax);
const applyMin = Math.min.apply(null, applyNumbers);
console.log(applyMin);

/*
    Call: The call method calls a function with a given `this` value and arguements provided individually
*/

function callProduct(name , price) {
    this.name = name;
    this.price = price;
}

function callFood(name, price) {
    callProduct.call(this, name, price);
    this.category = 'food';
}

console.log(new callFood('cheese', 5).name);

/*
    Pure function = is a function which for any function with any given arguement will always produce the same output and does not trigger any side effect ie
    It changes anything outside of the functions

*/

function pureFunctionAdd(num1, num2) { 
    return num1 + num2;
}

function pureFunctionRandom(num1) {
    return Math.random() * num1;
}

console.log(pureFunctionAdd(1, 5));
console.log(pureFunctionAdd(12, 15));
console.log(pureFunctionRandom(12, 15));

/*
    Factory Functions: The idea behind factory function is that you have a function that produces another function
*/

function factoryCreateTaxCalculator(tax) {
    function factoryCalculateTax(amount) {
        return amount * tax;
    } 

    return factoryCalculateTax;
}
const factoryVatCalculate = factoryCreateTaxCalculator(0.19);
const factoryIncomeTaxAmount = factoryCreateTaxCalculator(0.25);;

console.log(factoryVatCalculate(100));
console.log(factoryIncomeTaxAmount(100));

/*
    Closure: Every function in javascript is a closure. Its binds a function to its lexical environment. A closures gives you access to an outer function's scope from an inner
    The function first checks its inned environemnt and only if doesn;t find a variable with that name, it goes to the outer environment
*/

let closureUserName = 'Mark;'
function closureGreetUser() {
    let name = closureUserName;
    console.log(`Hi ${closureUserName}!!`);
    console.log(`Hi ${name}!!`);
}

closureUserName = 'Dan';
closureGreetUser();

function closureAdder(x) {
    return function adder(y) {
        return x + y;
    } 
}

let closureVar1 = closureAdder(5);
console.log(closureVar1(5));
console.log(closureAdder(5)(6));