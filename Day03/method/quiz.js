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
else if (
    id.slice(id.length-1, id.length) != id.slice(id.length-1, id.length).toUpperCase()){"마지막 알파벳이 대문자가 아닙니다"
    }
    else alert("아이디 완성")
  


