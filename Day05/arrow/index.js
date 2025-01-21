// function add(x, y) {
//   return x + y;
// }
// function minus(x, y) {
//   return x - y;
// }
// function hello(name = "서하") {
//   return `${name}님 안녕하세요`;
// }
// function tolength(word) {
//   return `${word}문자: ${word.tolength}`;
// }

// function square(x) {
//   return x ** 2 * 3;
// }
// function lunch_Menu(x) {
//   return `점심메뉴는 ${x}입니다`;
// }
// function allergy_test(x) {
//   return "새우" == x || "땅콩" == x || "조개" == x
//     ? "알러지 있음"
//     : "알러지 없음";
// }
// function threeToArray(a, b, c) {
//   return [a, b, c];
// }

// function getiphone(a, b, c) {
//   return { version: a, model: b, storage: c };
// }
// function angle(x) {
//   if (x < 90 && x > 180) {
//     return `${x}는 예각`;
//   } else if (x == 90) {
//     return `${x}는 직각`;
//   } else if (x > 90 && x < 180) {
//     return `${x}는 둔각`;
//   } else {
//     return `${x}는 평각`;
//   }
// }
// function word(x, y) {
//   const [a] = x.split(y);
//   return x.split(y)[0].toUpperCase();
// }

function word(x) {
  return 4 <= x.length && 10 >= x.length ? "적당" : "길이가 유효하지않음";
}
