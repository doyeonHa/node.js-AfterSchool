
var calc = {};
calc.add = function(a, b) {
    return a + b;
}

module.exports = calc;

var calc = requre('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10))