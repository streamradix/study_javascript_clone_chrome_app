/* 함수 function: 특정 기능을 수행하기 위한 코드 집합 */

/* 함수 선언 */

// 선언적 함수 선언 : 이름이 있는 함수
// function functionName(parameters...) { statements }

// 익명 함수 선언 : 이름이 없는 함수
// function (parameters...) { statements }

// 화살표 함수 선언 : 이름이 없는 함수
// (parameters...) => { statements }
// parameter 가 없다면 소괄호 생략 불가능
// parameter 가 한개면 소괄호 생략 가능
// statements 가 실행문 하나 일때 대괄호 생략 가능
// statements 가 실행문 하나 일때 return 이 생략된 상태

function sayHello() {
	console.log("Hello");
}

/* 함수 내부로 데이터 전달 */
// parameter 통해 argument 전달
// parameter 보다 많은 argument: parameter 개수만큼 전달됨
// parameter 보다 적은 argument: argument 받지 못한 parameter는 undefined

function sayIntroduce(nameOfPerson, age) {
	console.log("Hello my name is " + nameOfPerson + " and I`m " + age);
}

/* 함수 외부로 데이터 반환 : return */
// return 역할 1 : 함수의 작동을 멈춤
// return 역할 2 : return 뒤에 데이터가 있으면 호출위치로 전달

function plus(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

const minus = function (firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const times = (firstNumber, secondNumber) => {
	return firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

/* 함수 호출 방법 */

// 함수 호출 방법 1 : 선언적 함수 호출
// functionName(argument...)

// 함수 호출 방법 2 : 변수를 통한 함수 호출
// 1. 변수에 함수를 저장
// 2. 변수를 선언적 함수의 함수명처럼 쓴다
// - 익명 함수와 화살표 함수를 여러번 호출하는 방법

sayHello();

sayIntroduce("radix", 24);

const a = 7;
const b = 2;

console.log(plus(a, b));
console.log(minus(a, b));
console.log(times(a, b));
console.log(divide(a, b));
