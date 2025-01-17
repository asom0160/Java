// const coffee = {
//   name: "아메리카노",
//   price: 2000,
//   ingredients: ["물", "커피콩", "시럽"],
// };

// //.(dot) 연산자
// console.log(coffee.price);
// console.log(coffee["price"]);

// //커피콩 꺼내기
// console.log(coffee.ingredients[1]);
// console.log(coffee["ingredients"][1]);

// const dplus = {
//   top: {
//     playerName: "siwoo",
//     champion: "Sion",
//     kda: {
//       kill: 1,
//       death: 3,
//       assist: 10,
//     },
//   },
//   //middle - 선수: shawmaker, 챔피언:ahri, kda:927
//   middle: {
//     playerName1: "shawmaker",
//     champion: "ahri",
//     kda: {
//       kill: 9,
//       death: 2,
//       assist: 7,
//     },
//   },
// };
// console.log(dplus.top.kda.kill + dplus.middle.kda.kill);

// const lunch = {
//   name: "햄버거",
//   franchise: "버거킹",
// };
// // 오브젝트 데어터 추가
// lunch.kcal = 900;
// lunch.side = "치즈스틱";
// lunch.drink = "콜라";

// //오브젝트 삭제
// delete lunch.name;

// //
// const drama = {
//   title: "오징어게임",
//   grade: 18,
//   genres: ["액션", "블랙코미디", "군상극", "데스게임"],
// };
// const movie = drama.genres[1];
// const movie1 = drama.genres[0];
// const a = drama.title;
// const { title } = drama;

// const menu = ["아메리카노", "라떼", "민트"];
// const a1 = menu[0];
// const [a2] = menu;

// const player = {
//   name: "이승엽",
//   position: ["타자"],
//   salary: 30000,
// };
// const coffee1 = {
//   coffeeName: "카페모카",
//   price: 3000,
// };
// const data1 = {
//   ...player,
//   ...coffee1,
// };
// console.log(data);
// const cosmetic = {
//   type: "핸드크림",
//   company: "카밀",
//   price: 8000,
//   ingrediants: {
//     first: {
//       name: "글리세린",
//       chemicals: ["수소", "산소"],
//     },
//     secend: {
//       name: "미네랄오일",
//       chemicals: ["미네랄", "오일"],
//     },
//   },
// };
// const { company } = cosmetic;
// const { first } = cosmetic.ingrediants;

// const test = { ...cosmetic.ingrediants.first };

// laptop 이 lap[허벅지위 단어]
const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "intel i5",
    ram: "8GB",
    storage: "256GB SSD",
  },
};
const { cpu, ram, storage } = laptop.specs;

console.log(cpu);
console.log(ram);
console.log(storage);
