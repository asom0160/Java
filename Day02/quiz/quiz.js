const food = prompt("좋아하는 음식은?");
const place = prompt("최근에 갔던 장소");
console.log(`최근에 갔던  ${place}에서 ${food}를 먹고싶어요`);

const ki = prompt("자신의 키?");
const kg = prompt("자신의 몸무게?");
const BMI = "Number(kg) / (Number(ki) * Number(ki))";
console.log(`당신의 BMI는 ${BMI}`);

const won = prompt("1USD=몇원??");
const usd = prompt("얼마를 원으로 환전하시겠습니까");
console.log(`원화금액은 = ${Number(won) * Number(usd)}`);

const bit = prompt("1btc = 몇원인가요");
const dal = prompt("몇 BTC를 환산하고싶나요");
console.log(`${Number(bit) * Number(dal)}`);
