// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("dongsuk\'s book")

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // reminder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++ counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: ||, &&, !
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for(let i = 0; i < 10; i++){
        console.log('😱');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with the conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference

const ds1 = {name:'dongsuk'};
const ds2 = {name:'dongsuk'};
const ds3 = ds1;
console.log(ds1 == ds2);
console.log(ds1 === ds2);
console.log(ds1 === ds3);

console.log(`0 == false: ${0 == false}`);
console.log(`0 === false: ${0 === false}`);
console.log(`'' == false: ${'' == false}`);
console.log(`'' === false: ${'' === false}`);
console.log(`null == undefined: ${null == undefined}`);
console.log(`null === undefined: ${null === undefined}`);

// 8. Conditional operators: if
// if, else if, else
const name = 'justin';
if (name === 'justin') {
    console.log('Welcome, Justin!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('nuknwon');
}

// 9. Ternary operator: ?
// conditional ? value1: value2;
console.log(name === 'justin' ? 'yes': 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, 
// body code is executed.
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body check is executed first,
// then check the condition
i = 3
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for loop: ${i}`);
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
console.log(`Q1. iterate from 0 to 10 and print only even numbers (use continue)`)
i = 10;
for(i=0; i<=10; i++){
    if (i % 2 !== 0)
        continue;
    console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
console.log(`Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)`)
i = 10;
for(i=0; i<=10; i++){
    if (i > 8)
        break;
    console.log(`q2. ${i}`);
}