// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return; }
// one function === one thing 
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}

log('Hello World!');
log(1234565)

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const justin = {name: 'Dongsuk'};
changeName(justin);
console.log(justin);

// 3. Default parameters
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage("Hi!!!");

// 4. Rest parameters (added in ES6)
function printAll(...args){
    // for(let i = 0; i < args.length; i++){
    //     console.log(`${args[i]}`)
    // }

    // for (const arg of args){
    //     console.log(arg);
    // }

    args.forEach((arg) => console.log(`${arg}`));
}

printAll('dream', 'coding', 'justin');

// 5. Local Scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);    
}

printMessage()

// 6. Return a value
function sum(a, b){
    return a + b;    
}

const result = sum(1, 3);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point < 10){
        return;
    }
    // long upgrade logic
}

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the executed reached it.

// const print = function (){ // anonymous function
//     console.log('print');
// }

const print = function print() { // named function
    console.log('print');
}

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(4, 5));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function(){
    console.log('Yes!');
}

const printNo = function(){
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function (){
//     console.log('simplePrint!');
// }

const simplePrint = () => console.log('simplePrint!');
simplePrint()
const add = (a, b) => a + b;
console.log(add(1, 3));

const simpleMultiply = (a, b) => {
    return a * b;
}

console.log(simpleMultiply(4,2));

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); 

