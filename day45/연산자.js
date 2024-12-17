// [1]  산술 연산자 
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(parseInt(10/3)); // 3, parseInt : 소수점 버리고 정수만 반환 
console.log(`점수` + 10); // 덧셈이 아닌 연결 : "점수 : 10"

// [3] 비교 연산자 
console.log( 10 > 3); // 10이 3보다 초과/크다 , true
console.log(10 >= 3); // 10이 3보다 이상/크거나, true
console.log(10 < 3);
console.log(10 <= 3);
console.log(10 == 3);
console.log(10 != 3);
console.log(10 === "10"); // 숫자 10과 문자 10은 같다. false
console.log(10 !== "10"); // 숫자 10과 문자 10은 다르다. true 

// [4] 관계연산자
console.log( 10 > 3 && 20 > 10); 
console.log( 10 > 3 && 20 > 30); 
console.log( 10 > 3 || 20 > 3);
console.log( 10 > 3 || 20 > 30);
console.log( !(10 > 3)); // 10은 3보다 크지 않다. false 

// [5] 복합대입연산자 
let param = 10; // param 변수에 10값을 대입한다. 
param += 3; // +=, param 변수에 3을 누적 합계를 한다, param = param + 3;
param -= 5; // -=, param 변수에 5를 뺀 누적 합계를 한다, param = param - 5

// [6] 증[가]감[소] 연산자
let age = 40;
console.log(age++); // 후위 증가, 출력 -> 증가, 40
console.log(age); // 41
console.log(++age); // 선위증가, 증가 -> 출력, 42
console.log(age); // 42
console.log(age--); // 후위 감소, 출력 -> 감소, 42
console.log(age); // 41
console.log(--age); // 선위 감소, 감소 -> 출력, 40

// [7] 삼항 연산자 
let score = 80;
let result1 = score >= 80 ? "합격" : "불합격";
               // 조건     ? true   : false;
let result2 = score >= 80 ? "합격" : score >= 70 ? "재시험" : "불합격"
