/* Question 1: Write a code that will create variables 
and initialize them with values of Boolean, Number, BigInt, 
String, and undefined types using (when possible) literals 
and constructor functions.*/

let isTrue = true;
let isTrue2 = Boolean(0);

let myNumber = 7;
let myNumber2 = Number(6);

let myBigInt = 5n;
let myBigInt2 = BigInt(7);

let myString = "Una cadena";
let myString2 = String(42);

let myUndefined;

/* Question 2: Print all values and all types of those values 
using console.log. Try to use string interpolation to display 
the value and type at the same time with a single console.log 
call, e.g. in the following form: 1000 [number].*/
console.log(` ${isTrue} [${typeof isTrue}]`);
console.log(` ${isTrue2} [${typeof isTrue2}]`);

console.log(` ${myNumber} [${typeof myNumber}]`);
console.log(` ${myNumber2} [${typeof myNumber2}]`);

console.log(` ${myBigInt} [${typeof myBigInt}]`);
console.log(` ${myBigInt2} [${typeof myBigInt2}]`);

console.log(` ${myString} [${typeof myString}]`);
console.log(` ${myString2} [${typeof myString2}]`);

console.log(` ${myUndefined} [${typeof myUndefined}]`);

/**Question 3: Carry out a chain of conversions: 
 * create a Boolean from a BigInt created from a Number 
 * that was created from a String. Start with the value "1234". 
 * Is it possible? */
let myStart = "1234";
let tempNumber = Number(myStart);
let tempBigInt = BigInt(tempNumber);
console.log(Boolean(tempBigInt)); // Si que es posible y el resultado es true

/**Question 4: Try adding two values of the same type 
 * and check the result type. Try it for all primitive types. */

let sumaBool = isTrue + isTrue2;
console.log(` ${sumaBool} [${typeof sumaBool}]`);

let sumaInt = myNumber + myNumber2;
console.log(` ${sumaInt} [${typeof sumaInt}]`);

let sumaBigInt = myBigInt + myBigInt2;
console.log(` ${sumaBigInt} [${typeof sumaBigInt}]`);

let sumaString = myString + myString2;
console.log(` ${sumaString} [${typeof sumaString}]`);

let sumaUndefined = myUndefined + myUndefined;
console.log(` ${sumaUndefined} [${typeof sumaUndefined}]`);

/**Question 5: Try adding two values of different types and check the results. */

/** Question 6 Question 6: Try to modify the line const str1 = 42 + "1"; 
 * to get the result 43 (without removing the quotes around 1). */

const str1 = 42 + Number("1");
console.log(str1);