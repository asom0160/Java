switch (movie) {
  case "액션영화":
    alert("10000원");
    break;
  case "로맨틱영화":
    alert("8000");
    break;
  case "공포영화":
    alert("9000원");
    break;
}
const age = Number(prompt("나이"));

if (13 > age) {
  alert(
    `귀하의 나이는 $(age)이고 선택한 영화는 액션영화 이므로 최종 티켓가격은 ${
      10000 * 0.5
    }입니다`
  );
} else if (60 >= age) {
  alert(
    `귀하의 나이는 $(age)이고 선택한 영화는 로맨틱영화 이므로 최종 티켓가격은 ${
      8000 * 0.7
    }입니다`
  );
} else if{
    alert(
      `귀하의 나이는 $(age)이고 선택한 영화는 공포영화 이므로 최종 티켓가격은 ${9000*1}입니다`
    );
}
else {
    alert("선택한 영화는 없습니다");

}
