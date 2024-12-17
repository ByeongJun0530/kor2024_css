// [1]
let korean = Number(prompt("국어점수"));
let Eng = Number(prompt("영어점수"));
let math = Number(prompt("수학점수"));
let sum = korean + Eng + math;
let avg = sum / 3;
console.log(sum);
console.log(avg);
// [2] 
let radius = Number(prompt("문제 2 반지름"));
let width = radius * radius * 3.14;
console.log(width);
// [3]
let num1 = Number(prompt("문제 3 실수1"));
let num2 = Number(prompt("문자 3 실수2"));
let percentage = (num1 / num2) * 100;
console.log(percentage + "%");
// [4]
let num3 = Number(prompt("문제4 정수 입력"));
let result1 = (num3 % 2 == 1) ? true : false;
console.log(result1);  
// [5]
let num4 = Number(prompt("문제5 정수 입력"));
let result2 = (num4 % 7 == 0) ? true : false;
console.log(result2);
// [6] 
let id = prompt("문제 6 아이디");
let pwd = prompt("문제 6 비밀번호");
let result3 = (id == "admin") && (pwd == 1234) ? true : false;
console.log(result3);
// [7] 
let num5 = Number(prompt("문제7 정수 입력"));
let result4 = (num5 % 2 == 1) && (num5 % 7 == 0) ? true : false;
console.log(result4);
// [8] 
let cost = Number(prompt("문제 8 금액 입력"));
let hundredThou =  cost / 100000;
let tenThou = (cost % 100000) / 10000;
let Thou = (cost % 10000) / 1000;
console.log("십만원 : " + parseInt(hundredThou) + "장/" + "만원 : " + parseInt(tenThou) + "장/" + "천원 : " + parseInt(Thou) + "장");
// [9]
let score1 = Number(prompt("문제 9 1차 점수"));
let score2 = Number(prompt("문제 9 2차 점수"));
let total = score1 + score2;
let result5 = total >= 150 ? "합격" : "불합격";
console.log(result5);
// [10]
let name1 = prompt("문제 10 이름1");
let name2 = prompt("문제 10 이름2");
let result6 = (name1 == "유재석" ? name1 + "(방장)" : name1) + ',' + (name2 == "유재석" ? name2 + "(방장)" : name2);
console.log(result6);

