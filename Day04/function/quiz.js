//메뉴: 아아, 4000 라떼,4500 유자차,4000
// 매출:0
//판매기능: 번호물어보고 판매되면 매출이 올라가면됨
//메뉴추가: 이름과 가격이 주어지면 메뉴에 추가됨

// const starbucks = {
//   menu: [
//     { name: 아이스아메리카노, price: 4000 },
//     { name: 라떼, price: 4500 },
//     { name: 유자차, price: 4000 },
//   ],
//   sale: 0,
//   Sellcoffee: function (num) {
//     if (!menu[num]) console.log("그런메뉴 없음");
//     else {
//       console.log(`${this.menu[num].name}이 판매되었습니다`);
//       this.sale = this.sale + this.menu[num].price;
//     }
//   },

//   add: function (a, b) {
//     this.menu.push({
//       name: a,
//       price: b,
//     });
//   },

// };

//체력:100
//마나: 100
//레벨: 1
//경험치:0 , 경험치 100되면 레벨오름 경험치 0됨
//매직클로: 마나10달고, 매직클로발동! [1번 경험치10오름]단 마나가 충분할때 가능
//텔레포트: 마나 -50달고 텔레포트발동! [2번 경험치10오름]단 마나가 충분할때
//포션마시기:체력,마나 50충전

// const magician = {
//   hp: 100,
//   mana: 100,
//   level: 1,
//   exp: 0,
//   getexp: function (exp) {
//     this.exp = this.exp + exp;
//     if (this.exp >= 100) {
//       this.level = this.level + 1;
//       this.exp = this.exp - 100;
//     }
//     console.log(`레벨업! 현재 레벨은 ${this.level}입니다`);
//   },
//   magicClaw: function () {
//     if ((this, this.mana < 10)) {
//       console.log("마나가 없습니다");
//     } else {
//       this.mana = this.mana - 10;
//       this.getexp(10);
//       console.log("매직클로 발동");
//     }
//   },
//   teleport: function () {
//     if ((this, this.mana < 50)) {
//       console.log("마나가 없습니다");
//     } else {
//       this.mana = this.mana - 50;
//       this.getexp(50);
//       console.log("텔레포트 발동");
//     }
//   },
//   drinkpotion: function () {
//     this.hp = this.hp + 50;
//     this.mana = this.mana + 50;
//     console.log(
//       `포션을 마십니다, 현재 체력은 ${this.hp}이고, 현재 마나는${this.mana}입니다`
//     );
//   },
// };
// magician.magicClaw();
// magician.teleport();
// magician.teleport();
// magician.drinkpotion();

//youtube
//내 아이디
//내가 구독한 채널
//좋아요눌럿던 채널
//구독하기
//좋아요 누르기

// const youtube = {
//   subscribChannels: ["그루밍데이", "타요", "슈카월드"],
//   likeChannels: ["그루밍데이", "타요", "슈카월드"],
//   subscribChannels: function (newChannel) {
//     this.subscribChannels.push(newChannel);
//   },
//   likeChannel: function (likeChannel) {
//     this.likeChannels.push(likeChannel);
//   },
// };

// //car 오브젝트
// //자동차 이름
// //자동차 속도
// //자동차 속도 올리기
// //자동차 속도 내리기
// //자동차 브레이크밟기
// //자동차 현재속도

// const car = {
//   name: "아반떼",
//   speed: 0,
//   speedup: function () {
//     this.speed = this.speed + 50;
//   },
//   speeddown: function () {
//     this.speed = this.speed ? this.speed - 1 : 0;
//   },
//   break: function () {
//     this.speed = 0;
//   },
//   Nowspeed: function () {
//     console.log(`현재속도는 ${this.speed}`);
//   },
// };
