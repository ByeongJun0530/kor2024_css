// [1] 반복문을 사용하는 이유
    // 1. 반복되는 코드를 간소화하기 위해서 
console.log(`안녕하세요`);
console.log(`안녕하세요`);
console.log(`안녕하세요`);
console.log(`안녕하세요`);
console.log(`안녕하세요`);
    // 2. 
for(let i = 1; i <= 5; i++ ){
    // - i는 1부터 5이하까지 1씩 증가 반복 
    console.log(`안녕하세요`);
}

// [2] 반복문 사용시 중요한 점, 반복문 없을 때로 구상 
    // 1. 1부터 5까지 출력하시오.(반복문이 없을 때) 
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// 1. 반복되는 코드         : console.log(); 
// 2. 반복되지 않는 코드    : 1, 2, 3, 4, 5
// 3. 반복되지 않는 코드의 패턴/규칙 : 1부터 5까지 1씩 증가하는 규칙 
    // 2. 1부터 5까지 출력하시오.(반복문이 있을 때때)
for(let value = 1; value <= 5; value++){
    // - value는 1부터 5이하까지 1씩 증가 반복 
    console.log(value);
}
// [3] 1부터 10까지 누적 합계 
let sum = 0;
sum = sum + 1;
//
let sum2 = 0;
for(let value = 1; value <= 10; value++){
    sum2 = sum2 + value;
    console.log(sum2);
}
console.log(sum);
// [4] 구구단의 2단만 출력하세요.
for(let value = 1; value <= 9; value++){
    console.log(`2 X ${value} = ${2 * value}`);
}
// [5] 전체(2단 ~ 9단) 출력하세요.
for(let i = 2; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(`${i} X ${j} = ${i * j}`)
    }
}
// [6] 간단한 직삼각형 출력하시오.
let outHTML = ``;
for(let i = 1; i <= 5; i++){    // 1. 줄 for문
    for(let j = 1; j <= i; j++){ // 2.                                                                                                                                                                                 별 for문 
        outHTML += `★`
    }
    outHTML += `</br>`
}
let body마크업객체 = document.querySelector('body')
body마크업객체.innerHTML = outHTML;

// [7] 배열과 반복문의 관계 
let 과일배열 = ['사과', '포도', '딸기']
    // - 과일배열 내 모든 요소를 하나씩 출력하세요.
for(let index = 0; index <= 과일배열.length - 1; index++){
    console.log(과일배열[index]);
}

// [8] 반복문 주요 키워드 
// (1) continue; 
for(let i = 1; i <= 5; i++){
    if(i == 3){continue;}
    console.log(i)
}
// (2) break;
for(let i = 1; i <=10; i++){
    if(i==5){break;}
    console.log(i)
}