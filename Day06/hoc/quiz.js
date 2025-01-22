// const menu = [
//   {
//     name: "부대찌개",
//     price: 13000,
//     kcal: 700,
//     ingredients: ["햄", "라면", "파", "두부"],
//   },
//   { name: "죽", price: 4000, kcal: 200, ingredients: ["소고기", "밥", "물"] },
//   {
//     name: "샌드위치",
//     price: 0,
//     kcal: 400,
//     ingredients: ["빵", "참치", "고구마", "치즈"],
//   },
//   {
//     name: "해장국",
//     price: 10000,
//     kcal: 700,
//     ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
//   },
// ];

// const food = (x) => {
//   x.price = x.price * 1.1;
//   return x;
// };
// const a = menu.map(food);
// console.log(a);

// const suga = (y) => {
//   y.ingredients.push("설탕");
//   return y;
// };
// const b = menu.map(suga);
// console.log(b);

// const add = (d) => {
//   d.kcal = d.kcal + 100;
//   return d;
// };
// const c = menu.map(add);
// console.log(c);

// const minus = (w) => w.ingredients.every((x) => x != "햄" && x != "소고기");
// const r = menu.filter(minus);
// console.log(r);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shot: 2,
    ingredients: ["커피콩", "초코", "우유"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shot: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shot: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shot: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shot: 1,
    ingredients: ["커피콩", "초코", "크림", "우유", "얼음"],
  },
];
const notcoffe = (x) => (x.shot = x.shot == 0);
const b = starbucks.filter(notcoffe);
console.log(b);

// const sale = (y) => y.shot > 0 && y.price * 1.2;
// const c = starbucks.map(sale);
// console.log(c);

// const surplusCoffee = (x) => {
//   x.price = x.ingredients.some((v) => v == "커피콩") ? x.price * 0.8 : x.price;
//   return x;
// };
// const c = starbucks.map(surplusCoffee);
// console.log(c);

const honey = (x) => {
  x.ingredients.some((x) => x != "꿀")
    ? x.ingredients.push("꿀")
    : x.ingredients;
  x.price = x.ingredients.some((x) => x != "꿀") ? x.price + 300 : x.price;
  x.name = x.ingredients.some((x) => x == "꿀") ? x.name + "꿀❤" : x.name;
  return x;
};

const z = starbucks.map(honey);

console.log(z);

//Array -> String
["김밥", "천국"].join[" "];
