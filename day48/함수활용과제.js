/*<!--
    JS과제4 (day48) : 함수 활용.
    - 출력조건 : document.querySelector().innerHTML 
    - 입력조건 : document.querySelector().value
    - 일반조건 : chatGPT 사용금지

    주제 : 미니 웹페이지 가계부
        1. 가계부 정보(항목) : 1. 날짜 2.항목명 3.금액 
        2. 세가지의 정보를 <input> 마크업으로 부터 입력 받아 각각 하나의 배열 저장 하시오.
        3. 등록된 모든 배열 정보들을 출력 하시오.
        3. HTML 출력 예시 
        날짜            항목        금액
        2024-11-26      콜라        1000
        2024-11-27      커피        1200

    - 정답이 필요한 경우 메일/카톡 로 요청하기. 
    - 제출 : itdanja@kakao.com , 12/23(월) 19:00까지
    - 제출파일 : 구현한 JS 파일 및 파일이 위치한 본인 github 상세 주소
-->
*/
// 빈 배열 선언 
let array = [];
function register(){
    // 선택자를 이용한 dom 객체 가져오기
    let date = document.querySelector("#date")
    let object = document.querySelector("#object")
    let price = document.querySelector("#price")
    // dom 객체에서 value 속성값 가져오기 
    let dateInput = date.value;
    let objectInput = object.value;
    let priceInput = price.value;
    // 속성값으로 배열 내 저장 
    array.push([dateInput, objectInput, priceInput])
    // 선택자를 이용한 출력구역 dom 객체 가져오기 
    let print = document.querySelector("#print")
    // html에 출력할 문자열 
    let ledgerHTML = `<table border = 1><tr>`
    for(let i = 0; i <= array.length - 1; i ++){ 
        ledgerHTML += `<tr>` // 행 추가
        for(let j = 0; j <= array[i].length - 1; j++){
            ledgerHTML += `<td>${array[i][j]}</td>` // 행 내부의 열 순환
        }
        ledgerHTML += `</tr>`
    }
    ledgerHTML += `</table>`
    // 출력한 html 문자열 dom객체의 innerHTML에 대입
    print.innerHTML = ledgerHTML;
}

