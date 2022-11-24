/* isNaN()

function isNaN(number: number): boolean

Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

@param number — A numeric value.

전달받은 값이 NaN 인지 판별

*/

let source = "20";
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));

source = "22.5";
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));

source = "isNaN()";
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));

source = true;
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));

source = false;
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));

source = [];
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));

source = {};
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));

source = null;
console.log(source, isNaN(source));
console.log(parseInt(source), isNaN(parseInt(source)));
