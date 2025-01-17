// if (bus == 1) {
//   if (age <= 7 || 65 <= age) {
//     alert("무료입니다");
//   } else if (8 <= age && age <= 19) {
//     alert(`청소년비용은 시내버스 ${2000 * 0.7}원입니다`);
//   } else {
//     alert(`청소년비용은 시내버스 ${2000 * 1}원입니다`);
//   }
// }
// else if (bus == 2) {
//     if (age <= 7 || 65 <= age) {
//       alert("무료입니다");
//     } else if (8 <= age && age <= 19) {
//       alert(`청소년비용은 시내버스 ${1200 * 0.7}원입니다`);
//     } else {
//       alert(`일반 비용은 시내버스 ${1200 * 1}원입니다`);
//     }
//   }
//   else if(bus == 3) {
//     if (age <= 7 || 65 <= age) {
//       alert("무료입니다");
//     } else if (8 <= age && age <= 19) {
//       alert(`청소년비용은 광역버스 ${2000 * 0.7}원입니다`);
//     } else {
//       alert(`일반비용은 광역버스 ${2000 * 1}원입니다`);
//     }
//   }
// const bus = +prompt("버스(1~3)");
// const age = +prompt("나이");
// const bus1 = [시내버스, 광역버스, 마을버스];
// const price = [1200, 2000, 1000];

// if (age <= 7 || 65 <= age) {
//   alert("무료입니다");
// } else if (8 <= age && age <= 19) {
//   alert(`청소년비용은 ${bus1[bus - 1]}비용은 ${price[bus - 1] * 0.7}원입니다`);
// } else {
//   alert(`일반비용은 ${bus1[bus - 1]}비용은 ${price[bus - 1] * 1}원입니다`);
// }

const movie = +prompt("영화종류");
const age = +prompt("나이");
const movie_Type = ["액션영화, 로맨스코메디, 공포영화"];
const price = [10000, 8000, 9000];

if (age < 13) {
  alert(
    `${age}는 선택한 ${movie_Type[movie - 1]}에 따라 최종 티켓가격은${
      price[movie - 1] * 0.5
    }입니다`
  );
} else if (age >= 60) {
  alert(
    `${age}는 선택한 ${movie_Type[movie - 1]}에 따라 최종 티켓가격은${
      price[movie - 1] * 0.7
    }입니다`
  );
} else {
  alert(
    `${age}는 선택한 ${movie_Type[movie - 1]}에 따라 최종 티켓가격은${
      price[movie - 1] * 1
    }입니다`
  );
}
