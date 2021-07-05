// Objects
// - 자바스크립트의 자료형 중 하나
// - 연관된 데이터, 함수의 집합
// - 거의 모든 오브젝트는 Object의 인스턴스
// - object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const ellie = { name: 'ellie', age: 4 };
console.log(ellie);

// with JavaScript magic (dynamically typed language)
// 프로퍼티를 나중에 추가할 수 있음
ellie.hasJob = true;
console.log(ellie.hasJob);

// 프로퍼티를 나중에 삭제할 수 있음
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// 키는 항상 string이어야 함
// 실시간으로 원하는 키에 해당하는 값을 받아오고 싶을 때 쓰는 방법 (ex. 키를 사용자에게 인풋으로 받아옴)
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = Person('ellie', 30);
console.log(person4);
function makePerson(name, age) {
  return {
    name,
    age
  };
}

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assgin(dest, [obj1, obj2, obj3 ...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

const user3 = Object.assign({}, user);
console.log(user3);

// 같은 프로퍼티가 있는 경우 뒤에 있는 인자의 값으로 덮어씌워진다.
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
