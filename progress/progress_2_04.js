/* 네이밍 규칙 */

// 네이밍에선 중간에 빈칸이 올 수 없다

// 빈칸이 필요할 땐 camel case 가 통용된다

// camel case: 빈칸 이후 단어 첫글자 대문자
// snake case: 빈칸 자리에 언더바 넣기

/* 기본 데이터 타입 */

// "문자열", '문자열' : 문자열 String

// 1, 2, 3, 4, 5 ... : 정수 integer
// 0.1, 0.2, 0.3 ... : 실수 float

// true, false : 논리 boolean

// null : 아무 값도 가지지 않은 데이터

// undefined : 아직 값을 할당받지 않은 메모리 공간

/* variable: memory space to store data */

// const: immutable,    block scope, ES6 도입
// let  :   mutable,    block scope, ES6 도입
// var  :   mutable, function scope
// var 가 결함이 많아 ES6 (2015) 이후 잘 쓰이지 않는다

/* print value in console */
// console.log(value)

const myName = "radix";
const a = 5;

let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // 나머지

console.log("Hello " + myName);

b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // 나머지

const isRich = true;
const isFat = false;
let loveAnswer = null;
let pay;

console.log(isRich, isFat);
console.log(loveAnswer, pay);
