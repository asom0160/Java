//프롬프트로 몇살인지물어보고
//알럿으로 ~~년생이시군요
const age = window.prompt("몇살인가요?");
const year = 2025 - number(age) + 1;
window.alert(`${year}년생이시군요`);
