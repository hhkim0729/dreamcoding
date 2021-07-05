// 1. Use strict
// 코드에 엄격한 룰 적용
'use strict';

// 2. Variable, rw(read / write)
// let (added in ES6)
// 변경이 가능 (mutable)

let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);

// var (사용하지 말 것!)
// var hoisting (선언을 최상단으로 끌어올림) / 먼저 사용하고 나중에 선언해도 문제가 없음
// 블록 스코프가 적용되지 않음 / 블록 안에서 선언하고 밖에서 사용할 수도 있음
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// 가능하면 const 사용, 변경이 필요한 경우에만 let 사용
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (ex. object.freeze())
// Mutable data types: 기본적으로 모든 오브젝트는 변경 가능
// 웬만하면 immutable 데이터를 쓰는 것이 좋은 이유: 보안, 스레드 안정, 코드 작성 실수를 방지

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box containers
// function, first-class function (함수의 인자나 리턴값으로 함수가 사용될 수 있음)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (새로 생김, 아직 사용은 노우)
// 숫자 끝에 n을 붙여서 표시
const bigInt = 1234567890234567890234568901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요하거나 동시에 일어나는 코드에서 우선순위를 부여하고 싶을 때 사용
// string의 경우 동일한 문자열은 같은 데이터로 인식되지만, symbol을 사용하여 다른 데이터로 구분 가능
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 하나의 데이터에 대해 여러 개의 심볼을 만둘 수도 있음
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// 출력할 때는 .description을 붙여야 함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21; // object 안에 들어있는 데이터는 const가 아님

// 5. Dynamic typing: 데이터의 자료형이 런타임에 동적으로 결정됨
// 빠르게 개발이 가능하다는 장점이 있지만, 런타임에 오류가 발생하는 일이 잦아서 타입스크립트가 등장!
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
