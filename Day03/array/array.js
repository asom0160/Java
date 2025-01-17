const coffee = "카페모카";
const coffee1 = "아이스 아메리카노";
const coffee2 = "캬라멜마끼아또";

const menu = ["카페모카", "아이스 아메리카노", "캬라멜마끼아또"]; // Array 타입
console.log(menu[1]); // 라떼

const test = [
  100,
  false,
  "문자열",
  ["카페모카", "아이스 아메리카노", "캬라멜마끼아또"],
];

const soccer = ["손흥민", "황희찬", "이강인", "김민재"];

// 배열 관련된 연산자

//1. indexing 연산자(= 꺼내기)
const text = [menu, soccer];
console.log(text[1][1]); // "황희찬"
console.log(text[0][2]); //"캬라멜마끼아또"

//2. Destructuring 연산자 (= 분해)
const text1 = [...menu, ...soccer];
console.log(text1);

//3. rest 연산자
const [son, ...rest] = soccer; // ["손흥민", "황희찬", "이강인", "김민재"]
console.log(son); //"손흥민"
console.log(rest); //"황희찬", "이강인", "김민재"

const [son1, hwang] = soccer;
console.log(son1); //"손흥민"
console.log(hwang); //"황희찬"

// 4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬이형";
console.log(soccer);

//5. delete 연산자 (=삭제)
delete soccer[3];
console.log(soccer);
