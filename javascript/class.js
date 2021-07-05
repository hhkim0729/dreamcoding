'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// get과 set 키워드로 getter와 setter를 설정할 수 있음
// getter 설정 후에는 해당 필드를 불러올 때 자동으로 getter 호출
// setter 설정 후에는 해당 필드에 값을 대입할 때 자동으로 setter 호출
// 이때 무한으로 서로를 호출하는 것을 막기 위해 getter와 setter 안에서 사용하는 필드명 앞에 언더바(_)를 붙여서 구분
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 너무 최근에 추가되어서 사용하지 않는 것이 좋음
class Experiment {
  publicField = 2;
  #privatefield = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privatefield);

// 4. Static properties and methods
// Too soon!
// 오브젝트에 상관없이 공통적으로 사용하는 것들을 static으로 선언하면 메모리 사용을 줄일 수 있음
class Article {
  // 값이 오브젝트가 아니라 클래스에 저장됨
  static publisher = 'Dream coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  // 오브젝트를 만들지 않고도 바로 사용할 수 있음
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance (상속)
// 어떤 클래스를 다른 클래스로 확장할 수 있음
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // 오버라이딩
  draw() {
    // 부모에 정의된 함수를 호출
    super.draw();
    console.log('🐧');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
