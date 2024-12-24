/*
    - HTML 마크업에서 이벤트 함수 
        - onXXXX 속성 제공 
        - onclick 속성 : 지정한 마크업을 마우스로 클릭했을때 js코드 실행 
        - 사용법 : <마크업 onclick = "JS함수명()">

    - DOM : document(D:HTML) object(O : 객체) model(M : 모델) : html 객체 모델
            - html을 객체로 다룰 수 있는 기능 제공한다. html 순수 문자열 언어이므로 객체가 없다.
    - document.querySelector('선택자') : 지정한 선택자의 마크업을 js객체(dom)로 반환
        - .innerHTML : 마크업 시작과 마크업 끝 사이의 html
        - .value : 마크업의 value 속성을 뜻  
*/

// [1] button 클릭시 실행되는 함수 정의/만들기 
function func1(){// f s
    console.log(`func1 execute`)
} // m end

// [2] 입력버튼 클릭시 실행되는 함수 정의 
function func2(){
    // * input에 입력받은 값 가져오기 
    // (1) 특정한 선택자를 이용하여 마크업(dom) 객체 가져오기 
    let example1 = document.querySelector(".example1")
    // (2) 가져온 마크업(dom)객체 에서 value 속성값 가져오기
    let value = example1.value;
    // (3) 확인 
    console.log(`현재 input마크업 value : ${value}`)

}// f end

// [3] button(login) 클릭시 실행되는 함수 정의/만들기 
function login(){
    // (1) 특정한 선택자를 이용하여 dom 객체 가져오기
    let loginID = document.querySelector(".loginID")
    let loginPWD = document.querySelector(".loginPWD")
    // (2) 가져온 DOM 객체에서 value 속성값 가져오기 
    let id = loginID.value;
    let pwd = loginPWD.value;
    // (3) 입력받은 아이디가 admin이고 비밀번호가 1234이면 
    if( id == 'admin' && pwd == '1234'){
        alert('로그인 성공');
    }else{
        alert('로그인 실패');
    }
}// f end

// [4] button 클릭시 실행되는 함수 정의/만들기
let array = ['바나나', '수박', '딸기']
function func3(){
    
    // 1. 특정한 선택자를 이용하여 dom 객체 가져오기 
    let arrayBox = document.querySelector(".arrayBox")
    // 2. 출력한 html 문자열 구성 
    let html = ``;
    for(let index = 0; index <= array.length-1; index++){
        html += `<div> ${array[index]}</div>`
    }
    // 3. 출력한 html 문자열을 DOM객체의 innerHTML에 대입하기 
    arrayBox.innerHTML = html;
}
