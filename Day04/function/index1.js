// 함수
// 자바스크립트에서는 함수를 일급 객체로 취급함

// array, object, function
// const a = [];
// const b = {};
// constc = function (a, b) {
//   return a + b;
// };
// const d = c(1, 2); // 3

// const subway = {
//   name: "부평점 써브웨이",
//   sale: 0,
//   sellBread: function () {
//     this.sale = this.sale + 1000;
//   },
//   printsale: function () {
//     console.log(this.sale);
//   },
// };

// subway.sellBread();
// subway.sellBread();
// subway.sellBread();
// subway.printsale();

//baskinRabbins 오브젝트 타입
//icecream: ["민트초코, "엄마는 외계인", "슈팅스타"]
// sale: 0
//sellIcecream: 민트초코 -2000, 엄외 -2500, 슈스 - 4000
// printSale: 매출보여주는 함수

// const baskinRabbins = {
//   icecreams: [
//     { name: "민트초코", price: 2000 },
//     { name: "엄마는 외계인", price: 2500 },
//     { name: "슈팅스타", price: 4000 },
//   ],
//   sale: 0,
//   sellIcecream: function (num) {
//     if (this.icecreams[num] == undefined) console.log("그런 아이스크림 없음");
//     else {
//       console.log(`${this.icecreams[num].name} 아이스크림이 판매되었습니다`);
//       this.sale = this.sale + this.icecreams[num].price;
//     }
//   },
//   printSale: function () {
//     console.log(`현재매출:${this.sale}`);
//   },
//   addicecream: function (name, price) {
//     this.icecreams.push({
//       name: name,
//       price: price,
//     });
//   },
// };

// baskinRabbins.sellIcecream(0);
// baskinRabbins.sellIcecream(2);
// baskinRabbins.printSale;
