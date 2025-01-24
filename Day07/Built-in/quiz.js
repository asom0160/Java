// const lotto = new Array(6).fill(0).map((x) => getRandom(1, 45));

// const getRandom = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// while (true) {
//     const target = prompt("x눌러야 종료됨");
//     if (target == "x") break;
//     console.log("종료안됨");
//   }

// console.log(lotto);

// const getlotto = () => {
//   while (true) {
//     const lotto = Array(6)
//       .fill(0)
//       .map((x) => String(getRandom(1, 45)));
//     const newLotto = lotto
//       .reduce((a, c) => {
//         if (a.includes(c)) return a;
//         else return a + "," + c;
//       })
//       .split(",");
//     if (newLotto.length == 6) return newLotto;
//   }
// };

const getlotto = () => {
  while (true) {
    const lotto = [
      ...new set(
        Array(6)
          .fill(1)
          .map((x) => String(getRandom(1, 45)))
      ),
    ];
    if (lotto.length == 6) return lotto;
  }
};
