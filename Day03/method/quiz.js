const id = prompt("아이디");

if (id.length(id < 4) || id.length("id > 16")) alert("유효하지않습니다");
else if (
  !id.includes("@") ||
  !id.includes("!") ||
  !id.includes("#") ||
  !id.includes("&")
) {
  alert("반드시!, @, #, & 중 하나의 특수문자가 들어가야합니다");
}

//     ? alert("포함합니다")
//     : alert("반드시!, @, #, & 중 하나의 특수문자가 들어가야합니다")
// );

// alert(
//   id.slice(-1) == id.toUpperCase()
//     ? alert("맞습니다")
//     : alert("대문자여야합니다")
// )(id == id.length(id >= 4 && id <= 16)) &&
// (id.includes("@") ||
//   id.includes("!") ||
//   id.includes("#") ||
//   id.includes("&")) &&
// id.slice(-1) == id.toUpperCase()
//   ? "아이디 완성"
//   : "실패";
// // alert(ID.includes("@") && ID.includes("it") ? alert("합격") : alert("불합격"));
// alert(word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase());
