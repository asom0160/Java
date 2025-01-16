const ki = prompt("당신의 키는?");
const quiz1_result = ki > 140 ? "탑승가능" : "불가능";
window.alert(quiz1_result);

const num = prompt("숫자");
const quiz2_result = Number(num) % 2 == 1 ? "짝수" : "홀수";
window.alert(quiz2_result);

const year = prompt("년생");
const year1 = `2026-${year}`;
const quiz3_result = year >= 20 ? "성인" : "미성년자";
window.alert(quiz3_result);

const hour = prompt("시");
const min = prompt("분");
const sec = prompt("초");
alert(`${Number(hour) * 3600 + Number(min) * 60 + Number(sec)}초`);

const first = prompt("첫번째숫자");
const second = prompt("두번째숫자");
alert(Number(first) > +Number(second) ? first : second);
