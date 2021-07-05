// Function
// - 기본적인 빌딩 블록
// - 서브프로그램이라고도 불리며 재사용될 수 있다.
// - 하나의 업무를 수행하거나 값을 계산한다.

// 1. 함수 선언 (Function declaration)
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// 자바스크립트에서 함수는 오브젝트!
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello!');

// 2. Parameters
// primitive parameters: passed by value
// object parammeters: passes by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// 인자들이 배열로 들어옴
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  // args.forEach(arg) => console.log(arg);
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
}
printMessage();

// 6. Return a value
// return 값이 없는 함수는 return undefined;가 생략된 것
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// 조건을 만족하지 않는 경우 빨리 return해서 함수를 빠져나가도록 하는 것이 효율적인 코드
// bad!
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgardeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// first-class function
// 함수는 다른 변수와 똑같이 취급된다.
// - 변수에 할당 가능
// - 함수의 인자로 전달 가능
// - 함수의 리턴값으로 반환 가능

// 1. Function expression (함수 표현식)
// 일반적인 함수 선언식은 호이스팅의 영향을 받는다. (함수가 정의되기 전에 호출 가능)
// 함수 표현식은 호이스팅의 영향을 받지 않는다. (변수에 할당된 후에 호출 가능)
// anonymous function
const print = function() {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function() {
  console.log('yes!');
};
// named function
// - 디버깅할 때 유용
// - 재귀함수일 때 사용
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// 항상 익명
// const simplePrint = function() {
//   console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time 🐹
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command!');
  }
}
console.log(calculate('a', 1, 2));
