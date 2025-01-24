const arr = [1, 3, 5, 7, 9];

arr.map((x, i) => x + 1);

const num = Array(1001)
  .fill(0)
  .map((x, i) => i);

const lap = Array(101)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 5 == 0);
console.log(lap);

const q3 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .map((x) => {
    if (x % 3 == 0 && x % 5 == 0) console.log("🐰");
    else if (x % 3 == 0) {
      return "🐭";
    } else if (x % 5 == 0) {
      return "🐷";
    } else return x;
  });

const q4 = Array(126)
  .fill(1900)
  .map((x, i) => i + 1900)
  .map((x) => {
    if (x % 12 == 0) {
      return { 연도: x, 띠: "원숭이" };
    } else if (x % 12 == 1) {
      return { 연도: x, 띠: "닭" };
    } else if (x % 12 == 2) {
      return { 연도: x, 띠: "개" };
    } else if (x % 12 == 3) {
      return { 연도: x, 띠: "돼지" };
    } else if (x % 12 == 4) {
      return { 연도: x, 띠: "쥐" };
    } else if (x % 12 == 5) {
      return { 연도: x, 띠: "소" };
    } else if (x % 12 == 6) {
      return { 연도: x, 띠: "호랑이" };
    } else if (x % 12 == 7) {
      return { 연도: x, 띠: "토끼" };
    } else if (x % 12 == 8) {
      return { 연도: x, 띠: "용" };
    } else if (x % 12 == 9) {
      return { 연도: x, 띠: "뱀" };
    } else if (x % 12 == 10) {
      return { 연도: x, 띠: "말" };
    } else {
      return { 연도: x, 띠: "양" };
    }
  });
console.log(q4);
