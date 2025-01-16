//연산자

//산술연산
// +, -, *, /, %, **
const a = 1 + 2; // 3
const a1 = 1 - 2; // -1
const a2 = 2 * 2; // 4
const a3 = 3 / 2; // 1.5
const a4 = 3 % 2; // 1
const a5 = 3 ** 2; // 9

//대입연산
//=
const b = "ㅇㅅㅇ";

//비교연산 [boolran타입으로 귀결됨]
// >, <, >=, <=, ==(same), !=(diff), ===(type까지 체크)
const c = 5 > 3; //true
const c1 = 5 < 3; // false
const c2 = 5 >= 3; // false
const c3 = 5 <= 3; //false
const c4 = 5 == 3; //false
const c5 = 5 != 3; //true
const c6 = 5 === "5"; //false
const c7 = 5 === 5; //true
//논리연산
// &&(and), ||(or), !(not)

const d = 5 > 3 && 10 > 5 && 3 > 0;
const d1 = false || false || false || true;
const d2 = !false; //true
const d3 = !(5 <= 3) || !(3 > 10);
const d4 = 5 > 3 && 3 <= 10;

//삼항연산
// 조건 ? 값1 : 값2
const e = 5 > 3 ? "떡볶이" : "순대";
const e1 = 5 > 10 ? "마라탕" : "요거트";

//단항 연산
// +
const f = +"100"; // string -> number

//es6 연산자
// ??, ..., ?., #
