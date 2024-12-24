// 전역변수 
let memberTable = []; // 회원객체 여러개를 저장하는 배열 

// [1. 회원가입 기능 함수 구현]
    // 함수 설계 : 
    // 사용처 : 회원가입 버튼 클릭(onclick)하면, 
    // 함수명 : signUp  , 주로 카멜표기법 권장 : 첫 글자를 소문자로 시작하고 두 번째 단어 첫 글자 대문자로로
    // 매개변수 : x
    //      html(id, pw, nickname)는 document.querySelector()
    // 리턴값 : x
    //      html(true/false)는 alert, innerHTML

    // 회원가입 무엇인가 ? 
    // 1.사용자로부터 입력받는다. (<input> vs scan.next())
    // 2.사용자로부터 입력받은 값 가져오기(document.querySelector() vs scan.next())
    // 3.회원객체 생성( {}객체 vs MemberDto생성 )
    // 4.데이터베이스 저장 (전역변수 vs 데이터베이스 저장) 
    // * 추후에는 js정보를 java로 통신할 예정이다. html --> js --> java --> db
    // 5.성공 또는 실패시 메시지 전달한다 (alert() vs print())

function signUp(){ // 함수란? 복잡한 코드를 집합{}해서 재사용
    // - function이란 함수를 만들겠다는 선언 키워드 
    // - signUp 이란 임의 함수명
    // - () : 매개변수가 들어갈 자리인데, 매개변수가 없다
    // - {} : 함수 호출/사용시 실행되는 코드들 집합 
    // return : 함수가 종료되면서 호출됐던 곳으로 반환하는 값, 
        // 현재 함수는 html로 호출함으로 html로 반환할 값이 없다, 함수 종료 목적 사용 

    // html에서 함수를 실행하는 방법 : <마크업 onclick = "함수명()">
    console.log('signUp() 실행') 

    // [1] HTML로부터 입력받은 값 가져오기 위해 INPUT 마크업 객체 가져온다.
    let signid = document.querySelector('.signid'); console.log(signid)
    let signpw = document.querySelector('.signpw'); console.log(signpw)
    let signnic = document.querySelector('.signnic'); console.log(signnic)
        // !!! 잊지말고 꼭 : 테스트 진행해보자. 코드 한줄에 한줄씩 콘솔 찍기 
    // [2] input 마크업 객체로부터 value 속성 가져오기 
    let id = signid.value;  console.log(id);
    let pw = signpw.value;  console.log(pw);
    let nickname = signnic.value; console.log(nickname);
    // [3] 3가지 회원 정보를 객체로 구성한다. 
    let memberDto = {id : id, pw : pw, nickname : nickname}; console.log(memberDto)
    // [4] 객체를 데이터베이스에 저장한다. db없는 관계로 전역변수 배열 활용
    memberTable.push(memberDto); // - 배열 저장하는 방법.push()
    console.log(memberTable);
    // [5] 회원가입 성공/실패 메시지 출력한다. 
    alert('회원가입 처리 했습니다.')
    // [6] html input value 속성 초기화. 입력된 값 없애기
    signid.value = ''; // 공백을 대입한다.
    signpw.value = '';
    signnic.value = '';

    } // f end 

// [2. 로그인 기능 함수 구현]
    // 함수 설계 : 
    // 사용처 : 로그인 버튼 클릭(onclick)하면, 
    // 함수명 : login , 변수명/함수명 : 카멜표기법 
    // 매개변수 : x
    //      html(id, pw)는 document.querySelector()
    // 리턴값 : x
    //      html(성공/실패 메시지)는 alert, innerHTML
function login(){
    console.log('login() 실행'); // html에서 함수 호출하는 방법 <마크업 onclick = "함수명()">

    // [1] HTML로부터 입력받은 값 가져오기 위해 INPUT 마크업 객체 가져온다.
        // (왜?) DOM객체가 필요할까? html는 단순 문자열 언어이므로, 함수/변수 사용할 수 없다. 
        // 아 그래서 js가 html 마크업들을 객체화 해서 마크업을 객체처럼 다루기 위한 api 
    let loginid = document.querySelector(".loginid"); console.log(loginid)
    let loginpw = document.querySelector(".loginpw"); console.log(loginpw)
    // [2] input 마크업 객체로부터 value 속성 가져오기 
    let id = loginid.value;
    let pw = loginpw.value;
    // [3] 회원목록(db) 배열에서 입력받은 값 찾기 
    let loginState = false; // 로그인 했다 안 했다 판단 변수 : false : 로그인실패 ture : 로그인 성공 뜻으로 정의의 
    for(let index = 0; index <= memberTable.length-1; index ++){
        // index는 0부터 배열 내 마지막 인덱스까지 1씩 증가 반복 
        let memberDto = memberTable[index]; // index 번째의 member객체 가져온다.
        if(memberDto.id == id && memberDto.pw == pw){
            // 만약에 index번째 회원 아이디와 입력한 아이디가 같고,
            // index번째 회원 비밀번호와 입력한 비밀번호가 같으면 
            loginState = true; // 로그인 상태를 true 함으로써 로그인 성공 의미를 담는다. 
            break; // 반복문 종료.
        }
    } // f end
    // [4] 안내메시지 
    if(loginState = true){alert(`로그인 성공 `)}
    else{alert(`동일한 회원정보가 없습니다.`)}
    loginid.value = ``;
    loginpw.value = ``;
    return;
}//  f end