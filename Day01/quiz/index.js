const name = window.prompt("당신의 이름은?");
const age = window.prompt("당신의 나이은?");
const color = window.prompt("좋아하는 색은?");

console.log(
  `제 이름은 ${name},나이는 ${age}살이고, 좋아하는 색은 ${color}입니다!`
);

const day = prompt("오늘의 날짜?");
const plan = prompt("계획하고있는 일정?");
console.log(`오늘은 ${day}, 계획하신 일정은 ${plan}입니다.`);

const num1 = prompt("첫번째 숫자");
const num2 = prompt("두번째 숫자");
window.alert(Number(num1) + Number(num2));

const price = prompt("음식의 가격은?");
const num3 = prompt("음식의 갯수은?");
window.alert(`총합 가격은 ${Number(price) * Number(num3)}입니다`);

const Cel = window.prompt("섭씨의 온도는?");
window.alert(`화씨 온도는 ${Number(cel) * 1.8 + 32}F입니다`);

const square = window.prompt("한변의 길이는?");
window.alert(`${Number(square) * Number(square)}`);
