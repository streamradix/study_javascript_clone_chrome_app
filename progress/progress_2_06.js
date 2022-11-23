/* 데이터 구조 : 데이터를 최선의 방법으로 정리하는 방법 */

// 데이터 구조 필요성 : 자료의 삽입, 검색, 수정, 삭제를 쉽게하기 위해
// const 에 데이터 구조가 저장되어 있다면 내부의 데이터를 수정 가능

/* 배열 Arrays : 데이터 리스트 : [] */
// 같은 종류의 데이터를 저장하기에 효과적
// 데이터 요소를 조회하는데 index 사용 (0 부터 시작)

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfWeek);

// 배열의 요소 조회
console.log(dayOfWeek[0]);

// 배열의 마지막에 요소 추가
dayOfWeek.push("sun");

console.log(dayOfWeek);

/* 객체 Objects : 키-값 형태 {} */
// 값의 의미를 인식 가능한 정리 형태
const player = {
	name: "radix",
	points: 10,
	fat: true,
};

console.log(player);

// 객체의 값을 조회하는 방법 2가지
console.log(player.name);
console.log(player["name"]);

// 객체에 키-값 데이터 추가
player.lastName = "astro";
console.log(player.lastName);

// 객체의 기존 키의 값 수정
console.log(player.points);
player.points = 15;
console.log(player.points);
