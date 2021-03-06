'use strict';

// Array

// 1. Decleration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막 요소에 접근

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(fruit => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍇', '🥝');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift는 pop, push보다 느림!!!
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // 삭제할 개수를 인자로 전달하지 않으면 끝까지 삭제
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 새로운 데이터를 삽입할 수 있음
console.log(fruits);

// combine two arrays
const fruits2 = ['🍇', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);

// indexOf
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🥥'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));
