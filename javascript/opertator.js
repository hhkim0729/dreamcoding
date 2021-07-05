// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2.  numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
// <, <=, >, <=

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 첫 번째 true 값을 찾는다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 첫 번째 false 값을 찾는다.
console.log(`and: ${value1 && value2 && check()}`);
// 긴 if문을 간단히 작성할 때도 사용
// nullableObject && nullableObject.something (앞의 오브젝트가 null인 경우 뒤가 실행되지 않음)

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🌂');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 === ellie2); // false
console.log(ellie2 === ellie3); // false
console.log(ellie1 === ellie3); // true

// equality puzzle
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value checks
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
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
// while loop: 조건이 참ㅇ니 동안 코드를 실행
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop: 일단 코드를 한번 실행하고 조건을 검사
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop: for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// nested loops
// 시간복잡도가 O^2이므로 사용을 피하는 것이 좋음
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (user continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
