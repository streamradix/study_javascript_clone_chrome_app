/* parseInt()

function parseInt(string: string, radix?: number | undefined): number

Converts a string to an integer.

@param string — A string to convert into a number.

@param radix
A value between 2 and 36 that specifies the base of the number in string.
If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
All other strings are considered decimal.

문자열을 정수형 숫자로 변환

*/

let source = "20";
console.log(source, typeof source);
console.log(parseInt(source), typeof parseInt(source));

source = "22.5";
console.log(source, typeof source);
console.log(parseInt(source), typeof parseInt(source));

source = "Hello parseInt()";
console.log(source, typeof source);
console.log(parseInt(source), typeof parseInt(source));
