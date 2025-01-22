const food = (food) => {
  food + "pizza";
};
console.log(food("파인애플"));
const english = (word) => word.repeat(3);
const daller = (a) => a / 1431;
daller(a);
// return을 넣거나 {}를 빼거나
const gotoAcademy = (transport) => {
  console.log("집에서 출발");
  transport();
  console.log("학원도착");
};
const bus = () => {
  console.log("버스타고");
};
const walks = () => {
  console.log("걸어서");
};
const taxi = () => {
  console.log("택시타고");
};
const bicycle = () => {
  console.log("자전거");
};
const mom = () => {
  console.log("엄마차");
};
const makeBeverage = (cafe) => {
  console.log("주문받기");
  cafe();
  console.log("주문완료");
};
const coffee = () => {
  console.log("1.원두갈기");
  console.log("2.평탄화");
  console.log("3.기계넣기");
  console.log("4.버튼누르기");
  console.log("5.추출하기");
};

const smoothie = () => {
  console.log("1.재료넣기");
  console.log("2.얼음넣기");
  console.log("3.갈기");
};
const tea = () => {
  console.log("1.티백넣기");
  console.log("2.뜨거운물넣기");
};
