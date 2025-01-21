//result:0
//add 함수있음 - result + x
//minus 함수있음 - result - x
//multioly 함수있음 - result
//divide 함수있음 [단, 0 들어오면 에러]
//square(제곱) 함수있음
//clear 함수있음 - result 0으로 초기화
//showHistory 함수있음 - history 결과를 보여줌

const calculator = {
  result: 0,
  history: [],
  showHistory: function () {
    console.log(`${this.history}`);
  },
  add: function (x) {
    this.result = this.result + x;
    this.history.push(this.result);
  },
  minus: function (x) {
    this.result = this.result - x;
    this.history.push(this.result);
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.history.push(this.result);
  },
  divide: function (x) {
    if (x == 0) {
      console.log(`${x}은 에러입니다.`);
      this.history.push("에러");
    } else {
      this.result = this.result / x;
      this.history.push(this.result);
    }
  },
  square: function () {
    this.result = this.result ** 2;
    this.history.push(this.result);
  },
  clear: function () {
    this.result = 0;
    this.history.push(this.result);
  },
};

calculator.add(6);
calculator.minus(2);
calculator.multiply(5);
calculator.divide(2);
calculator.square(4);
calculator.clear(4);
calculator.showHistory();
