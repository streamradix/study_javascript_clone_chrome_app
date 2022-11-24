/* typeof

operator returns a string indicating the type of operand`s value

피연산자의 값의 타입을 가리키는 문자열을 반환

*/

const integer = 125;
const float = 3.14;
const t = true;
const f = false;
const hello = "Hello";
const arrays = ["mon", "tue", "wed", "thu", "fri"];
const objects = {
	name: "radix",
	familyName: "astro",
};
const nothing = null;
let yet;

console.log(integer, typeof integer);
console.log(float, typeof float);
console.log(t, typeof t);
console.log(f, typeof f);
console.log(hello, typeof hello);
console.log(arrays, typeof arrays);
console.log(objects, typeof objects);
console.log(nothing, typeof nothing);
console.log(yet, typeof yet);
