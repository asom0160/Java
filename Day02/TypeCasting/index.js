//number 화
//1. Number()

//parse: 해석하다
//Int: 정수, Float: 실수
//2. parselnt(), parseFloat()

const a = parseInt("314");
console.log(a);

const a1 = parseFloat("314.123");
console.log(a1);

const user = prompt("nickname?");
alert('${user || "guest"}님 환영합니다');

const passcord = prompt("화장실 비밀번호");
passcord == "1024" && alert("화장실 비밀번호 정답");
