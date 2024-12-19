// [1] 문자열
console.log( "유재석" ) 
console.log( '유재석' )
console.log( `유재석` )

// [2] '작은따옴표 와 "큰따옴표 출력하는방법
console.log( "유재석'강호동'"); // '작은따옴표  출력 // 유재석'강호동'
console.log( '유재석"강호동"'); // "큰따옴표 출력 // 유재석"강호동"
console.log( `'유재석'"유재석"` ); // '유재석'"유재석"

// [3] 문자열 과 문자열 혹은 변수값 연결 : 1.+연결연산자 2.`백틱
let age = 40;
console.log( `나이 : ` + age );     // `문자열`+변수값 , 나이 : 40
console.log( `나이 : ${ age } `);   // `문자열${변수호출}` : 나이 : 40 

// [4] JS의 문자열을 html에 출력하기.
// let body마크업객체 = document.querySelector('body');
// console.log( body마크업객체 ); 
// body마크업객체.innerHTML = `<h3> 나이 : ${ age } </h3>`;

// [5] 두명의 직원명을 임의로 변수에 대입하고 html의 ol마크업 출력하시오.
let 직원명1 = `유재석`;
let 직원명2 = `강호동`;
let ol마크업객체 = document.querySelector('ol');
console.log( ol마크업객체 );
ol마크업객체.innerHTML = `<li> ${직원명1} </li><li> ${직원명2} </li>`

// 실습1 : 두개의 정수를 각 prompt 입력받아서 합계를 HTML <div> 에 출력하시오.
let value1 = Number( prompt('정수1 : ') )
let value2 = Number( prompt('정수2 : ') )
let sum = value1 + value2;
let div마크업객체 = document.querySelector('div'); // div마크업을 js객체로 요청한다.
div마크업객체.innerHTML =  `총합계 : ${ sum }`;










