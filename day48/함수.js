// [1] 함수 정의 하기 
function myFunc( x, y){
    console.log('myFunc 실행')
    return true;
} // f end

// [2] 함수 실행
let result1 = myFunc(3, 5);
console.log(result1)

console.log(myFunc(7, 3))

// [3] 수학 1차함수 정의/만들기 
function 함수1차(a , b , c){
    let result = (a*b) + c //1차 함수 
    return result;
}// f end

// [4] 1차 함수 실행 
let result2 = 함수1차(3, 2, 7);
console.log(result2)

// [5] 믹서기 관련 함수 정의
function mixFunc(fruit){
    let result3 = fruit + "쥬스";
    return result3;
}

// [6] 믹서기 함수 사용 
console.log(mixFunc('바나나'));
console.log(mixFunc('딸기'));

// [실습1] 두 개의 정수를 입력받아 덧셈 함수에 입력받은 값을 전달하여 결과를 출력 
// 함수 정의
function addFunc(x, y){
    let result4 = x + y;
    return result4;
}
// 함수 실행 
let num1 = Number(prompt("첫 번째 수 : "));
let num2 = Number(prompt("두 번째 수 : "));
console.log(addFunc(num1 , num2));

// [실습2] 뺄셈 함수와 곱셈 함수 구현
// 함수 정의
function sub(x,y){
    let result5 = x - y
    return result5;
}
function mul(x,y){
    let result6 = x * y
    return result6;
}
// 함수 사용
console.log(sub(10,5))
console.log(mul(10,2))