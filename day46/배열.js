// [1] 배열변수 선언 
let pointArray = [ 100 , 50 , 30 ];
// [2] 배열변수의 전체 요소 호출 
console.log( pointArray );  // [100, 50, 30]
// [3] 특정한 위치의 요소 호출 
console.log( pointArray[1] ); // 두번째 위치한 // 50
// [4] 배열의 전체 요소 수정 
pointArray = [ `유재석` , `강호동` , `신동엽` ]
console.log( pointArray );  // ['유재석', '강호동', '신동엽']
// [5] 배열의 특정 요소 값 수정 
pointArray[1] = `강호동2`;  
console.log( pointArray );  // ['유재석', '강호동2', '신동엽']
// [6] 배열의 요소 추가/삽입
pointArray.push( `서장훈` );    // push : 맨뒤에 새로운요소 추가 
console.log( pointArray );      // ['유재석', '강호동2', '신동엽', '서장훈']

pointArray.splice( 1 , 0 , `하하`); // 두번째 인덱스의 하하 요소 삽입한다.
console.log( pointArray );      // ['유재석', '하하', '강호동2', '신동엽', '서장훈']
//[7] 배열의 특정 인덱스 요소 삭제 
pointArray.splice( 1 , 1 );     // 두번째 요소 부터 1개 삭제 
console.log( pointArray );      // ['유재석', '강호동2', '신동엽', '서장훈']
pointArray.splice( 0 , 3 );     // 첫번째 요소 부터 3개 삭제 
console.log( pointArray )       // ['서장훈']

//[8] 배열내 특정 값 찾기 
let searchIndex = pointArray.indexOf( `서장훈` );
console.log( searchIndex ); // 0 : 찾을값인 서장훈은 0번째 인덱스에 있다.

searchIndex = pointArray.indexOf( `유재석` );
console.log( searchIndex ); // -1 : 찾을값인 유재석은 존재하지 않으므로 

searchIndex = pointArray.includes(`서장훈`);
console.log( searchIndex ); // true 

searchIndex = pointArray.includes(`유재석`);
console.log( searchIndex ); // false


// 실습1 : 임의의 점수 3개를 하나의 배열 저장하시오. 
// 배열내 점수들의 합계와 평균을 console.log()에 출력하시오. 반복문 없이 계산하기.

// [ 80 , 92 , 78 ];  // (1) 배열생성
let 점수목록 = [80,92,78]; // (2) 생성한 배열를 변수(저장/재사용)에 대입한다.
let 합계 = 점수목록[0] + 점수목록[1] + 점수목록[2];     // (3) 각 인덱스의 요소값을 호출해서 덧셈 하기 .
let 평균 = 합계 / 점수목록.length;
console.log( 합계 );    // 250
console.log( 평균 );    // 83.33333333333333

// 실습2 : 새로운 학생명을 prompt()입력받아 학생목록내 이미 존재하면 true 아니면 false 를 
// console.log()에 출력하시오.
// let 학생목록 = [ '유재석' , '강호동' , '신동엽' ]

// (1) 샘플 배열 선언 , 학생목록
let 학생목록 = [ `유재석` , `강호동` , `신동엽` ];
// (2) 새로운 학생명을 입력받기 , prompt()
let 학생명 = prompt(`학생명 : `);
// (3) 입력받은 새로운 학생명이 배열내 존재여부 , .indexOf() .includes()
let 검색결과 = 학생목록.includes( 학생명 );    
console.log( 검색결과 );
