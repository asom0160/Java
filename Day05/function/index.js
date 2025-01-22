// const cook = (num) => {
//   console.log("요리시작");
//   if (num == 1) console.log("된장국");
//   else if (num == 2) console.log("김치찌개");
//   else if (num == 3) console.log("짜파게티");
//   else if (num == 4) console.log("가자미튀김");
//   else if (num == 5) console.log("비엔나소세지");
//   else if (num == 6) console.log("라면");
//   else console.log("그런거 없음");
//   console.log("요리끝");
// };

const skill = (skill) => {
  console.log("스킬준비");
  skill();
  console.log("스킬완료");
};
const fire = () => {
  console.log("불");
};
const ice = () => {
  console.log("얼음");
};
const lightning = () => {
  console.log("번개");
};
skill(fire);
skill(ice);
skill(lightning);
