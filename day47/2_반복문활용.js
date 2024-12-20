// [1]
let movieNames = ['히든스페이스', '위키드', '글래디에이터2', '청설']
let movieRating = [8, 4, 7, 6]
    // (2) html에 출력할 문자열을 구성하기 
let outHTML= `<table>`;             //<table> 마크업 시작작
for(let index = 0; index <= movieNames.length - 1; index++){
    // index는 0부터 마지막 인덱스까지 1씩 증가 반복 
    let names = movieNames[index] //index 번째의 영화 제목 반환 
    outHTML += `<tr><td> ${names} </td>`    // <tr> 마크업 시작 // <td> 영화 제목 
        // (4) 영화 평점만큼 별 출력하기, 남은 별은 흰 별 
        let starHTML = ``                   // -- 별을 출력할 html 구성 
        for(let star = 1; star <= 10; star++){ 
            // star(별)는 1부터 10까지 1씩 증가 반복 [별 만점이 10점 만점] 
            if(movieRating[index] >= star){ // 만약에 평점이 star보다 더 크면 검은 별 출력
                starHTML += `★`
            }else{
                starHTML += `☆`            // 아니고 평점이 star보다 작으면 흰 별 추가 
            }
        }
    outHTML += `<td> ${starHTML}</td></tr>` // </td> 마크업 종료 // <td> 구성된 10개의 별
} // for end
outHTML += `</table>`               //</table> 마크업 종료 
console.log(outHTML)
    // (3) DOM 객체를 이용한 HTML의 변수값 출력하기 
let exampleDIV객체 = document.querySelector('#exampleDIV1') // 특정한 선택자의 마크업을 js객체로 가져온다. 
exampleDIV객체.innerHTML = outHTML; // 가져온 마크업 객체의 innerHTML을 이용하여 구성한 HTML을 대입한다. 

// [2]
// 배열 선언 
let seats = ['예약석', '빈좌석', '예약석', '예약석', '빈좌석', '예약석']
// html에 출력할 문자열 구성
let seatHTML = ``; 
for(let index = 0; index <= seats.length - 1; index++){
    // - index 는 0부터 마지막 인덱스까지 1씩 증가 반복, 총 6회 
    // index번째 값을 <div>로 구성. + 만약에 좌석정보가 빈좌석이면 blue 예약석이면 red 
    seatHTML += `<span style = "color : ${seats[index] == '빈좌석' ? 'blue' : 'red'}"> 
                ${seats[index]} </span>`
    // +2 배수마다 줄바꿈 처리 
    if((index + 1) % 2 == 0) {//현재 인덱스 +1 했을 때 2 배수이면 
        seatHTML += `<br/>` // 줄바꿈 처리 
    }
}
// 특정 html 선택자로부터 마크업 객체를 가져와서 html 대입
let exampleDIV2객체 = document.querySelector('#exampleDIV2')
exampleDIV2객체.innerHTML = seatHTML

// [3]
// 배열 선언
let nameArray = ['유재석', '강호동', '신동엽']
let scores = [92, 86, 72]
// html에 출력할 문자열 
let scoreHTML = `<table> <tr> <th> 이름 </th> <th> 점수 시각화 </th> </tr>`
for(let index = 0; index <= nameArray.length - 1; index++){
    let name = nameArray[index]
    scoreHTML += `<tr><td> ${name}</td>`
        // 점수 출력
        let dotHTML = ``
        for(let dot = 1; dot <= 100; dot++){
            if(scores[index] >= dot){ // 인덱스 번째의 점수보다 크면 흑점 
                dotHTML += `●`
            } else{
                dotHTML += `○`
            }
        }
    scoreHTML += `<td> ${dotHTML} </td></tr>`
}
scoreHTML += `</table>`
console.log(scoreHTML)
// html 변수값 출력 
let exampleDIV3객체 = document.querySelector('#exampleDIV3')
exampleDIV3객체.innerHTML = scoreHTML

// 문제 [4]
// 배열 요소 입력받기
// 비어있는 배열 선언 
let numArray = [];
// html 출력 문자열 구성 
let numHTML = `<table><tr><th> n번째 </th> <th> 번호 </th></tr>`
while(numArray.length < 6){
    let num = Number(prompt("번호를 입력하시오"));

    if(num >= 1 && num <= 45){// 1~45  사이의 수 
        if(!numArray.includes(num)){ // 배열 내 존재하는지 확인 
            numArray.push(num);
        }else{
            console.log("존재하는 번호입니다.");
        }
    }else{
        console.log("1에서 45 사이의 번호를 입력해주세요.")
    }
}
// 배열 내 번호 출력 
for(let index = 0; index < numArray.length - 1; index++){
    let num = numArray[index]
    numHTML += `<tr><td> ${(index + 1) + '번째 :'} </td><td> ${num} </td>`  
}

numHTML += `</tr>` 

numHTML += `</table>`
console.log(numHTML)
// html 변수값 출력 
let exampleDIV4객체 = document.querySelector('#exampleDIV4')
exampleDIV4객체.innerHTML = numHTML
