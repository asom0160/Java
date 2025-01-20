const mbti = prompt("mbti가 무엇입니까?");
const first = mbti.slice(0, 1).toUpperCase();
const secend = mbti.slice(1, 2).toUpperCase();
const third = mbti.slice(2, 3).toUpperCase();
const fourth = mbti.slice(3, 4).toUpperCase();
const mbtiobj = {
  E: "외향적",
  I: "내향적",
  S: "감각적",
  N: "직관적",
  T: "이성적",
  F: "감성적",
  J: "계획적",
  P: "즉흥적",
};
alert(
  `${mbtiobj[first]} ${mbtiobj[secend]} ${mbtiobj[third]} ${mbtiobj[fourth]}`
);

const email = prompt("이메일이 뭡니까?");
const hasat = email.includes("@");
const hasdat = email.includes(".com") || email.includes(".net");
const hasdomain =
  email.includes(naver) ||
  email.includes(kakao) ||
  email.includes(yahoo) ||
  email.includes(paran);

hasat && hasdomain && hasdat
  ? alert("이메일 타당")
  : alert("이메일 타당하지 않음");

const num = 100;
num.toString(); //문자화
