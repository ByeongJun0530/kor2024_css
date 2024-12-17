// [1] 변수의 선언 
let value1;
console.log(value1); // undefined

// [2] 변수 값 초기화 
let value2 = 10;
console.log(value2); // 10

// [3] 변수 값 호출 
value2; // 변수값 호출 
console.log(value2); // 변수값 호출하고 콘솔에 출력한다. 

// [4] 변수 값 수정 
value2 = 30;        // 특정 변수의 새로운 값 대입(수정 - 변수는 하나의 값만 저장한다.)
console.log(value2); // 30

// [5] 변수의 연산(계산)
let value3 = value2 + 100; // value2(30) + 100 => 130 
console.log(value3);       // 130

// [6] 상수의 선언 *주의할 점 : 무조건 초기화를 한다. 
const value4 = `유재석`;
// [7] 상수 값 호출 
console.log(value4); // 유재석 
// [8] 상수값 수정 
// value4 = `강호동` // Assignment to constant variable 오류 
// [9] 상수 연산[계산]
const value5 = value4 + `님 안녕하세요`;
console.log(value5);

// 실습1 : prompt() 함수로 하나의 점수를 입력받아서 (변수에 저장한 후후) 
// console.log() 함수로 console 탭에 입력받은 점수를 출력하시오.
//prompt(`[실습1] 점수를 입력하세요.`); // (1) 입력받은 값을 반환하는 함수 
//let score1 = prompt(`[실습1] 점수를 입력하세요.`); // (2) 변수에 대입 
//console.log(score1); // (3) 출력
//* 컴퓨터의 기본적인 프로세스(절차) : 1.입력 2.처리 3.출력

// 실습2 :
// prompt() 함수로 국어점수와 수학 점수를 각각 입력받아서 (변수에 저장한 후)
// console.log() 함수에 총점과 평균을 각 출력하시오 
// [1] 입력 
let korean = Number(prompt("[안내] 국어점수를 입력하시오"));
let math = parseInt(prompt("[안내] 수학점수를 입력하시오"));
// [2] 처리 
let sum = korean + math;
let avg = sum / 2;
// [3] 출력 
console.log("총점 : " + sum);
console.log("평균 : " + avg);