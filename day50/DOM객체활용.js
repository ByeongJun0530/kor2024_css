// [1] 할일 목록(배열) 전역변수 선언, 샘플 데이터 포함
let 할일목록 =[
    {할일코드 : 1, 할일내용 : '1교시 수업 듣기', 할일상태 : false},
    {할일코드 : 2, 할일내용 : '여행준비하기', 할일상태 : true}
]
// [2] 할일코드(pk역할) 부여하기 위한 식별번호, auto-increment
let 식별번호 = 3;

// [3 C] 등록함수 정의, 
// 사용처 : [등록]버튼 onclick 클릭시, 매개변수 : X, 반환값 : X 
function 등록함수(){
    
    // 1. HTML로부터 INPUT 마크업 DOM 객체 가져오기 
    const contInput = document.querySelector('.contInput'); console.log(contInput);
    
    // 2. 가져온 DOM객체에 value 속성을 호출한다. 
    const 할일내용 = contInput.value;                       console.log(할일내용);
    // 3. 할일 객체 구성한다. 
    const 할일 = {
        할일코드 : 식별번호,
        할일내용 : 할일내용,
        할일상태 : false,
    };                                                     console.log(할일);
    // 4. 구성한 객체를 배열에 저장한다. 
    할일목록.push(할일);                                    console.log(할일목록);
    // 5. 객체 저장 완료시 할일코드 + 1 증가한다. 
    식별번호 ++;                                            console.log(식별번호);
    // 6. 결과 
    alert('[할일 등록 되었습니다.]')
    contInput.value = ``;
    출력함수(); // 등록 성공시 출력함수 호출(출력상태 새로고침)
    return; // 함수 종료 
}

// [4 R] 출력함수 정의, 
// 사용처 : JS가 실행될때 JS에서 최초1번 실행, 등록/수정/삭제 성공했을 때, 매개변수 : X, 반환값 : X 
출력함수(); // JS에서 출력함수를 호출
function 출력함수(){
    // 1. HTML로부터 DIV 마크업 DOM 객체 가져오기 
    const todoBottom = document.querySelector('.todoBottom');
    // 2. 출력할 HTML문자열 구성하기 
    let HTML = '';
        // (1) 할일 목록(배열)내 모든 요소를 하나씩 HTML 문자열로 만들기
        for(let index = 0; index <= 할일목록.length-1; index++){
            // -index는 0부터 배열 내 마지막 인덱스까지 1씩 증가 반복 
            const 할일 = 할일목록[index]; // -index번째 객체 꺼내기
            
            // - `백틱 이용한 HTML변수에 +=(누적) 대입하기. <div class = "contBox">

            // [삼항연산자]를 이용한 객체 속성값에 따른 마크업의 클래스명 조작하기.
            // - 만약에 할일 상태가 true이면 success라는 클래스를 대입하고 아니면 대입하지 않는다.
            HTML += `<div class="contBox ${할일.할일상태 ? 'success' : ''}">
                    <div class="cont"> ${할일.할일내용} </div>
                    <div class="contBtns"> 
                        <button onclick="수정함수(${할일.할일코드})" class="updateBtn">수정</button>
                        <button onclick="삭제함수(${할일.할일코드})" class="deleteBtn">삭제</button>
                    </div>
                </div>` 
        }
    // 3. 가져온 마크업 객체에 출력할 html문자열 대입하기 
    todoBottom.innerHTML = HTML;
}

// [5 U] 수정함수 정의, 상태 변경 
// 사용처 : [수정]버튼 onclick 클릭시, 매개변수 : 수정할 할일 코드, 반환값 : X 
function 수정함수(할일코드){ console.log(`${할일코드}수정함수`)
    // (1) 배열 내 수정할 할일코드 객체 찾기.
    for(let index = 0;index <= 할일목록.length-1; index++){
        if(할일목록[index].할일코드 == 할일코드){
             // index번째 할일 코드와 수정할 할일 코드가 같으면 
             let 할일상태 = 할일목록[index].할일상태; // - index번째의 할일상태 꺼내기
             할일목록[index].할일상태 = !할일상태; // index번째의 할일 상태(부정/반대) false -> true, true ->false
             break; // 수정했다면 for문 종료 
        }
    }
    출력함수(); // 수정처리 후 출력함수 재호출 함으로써 (출력상태 새로고침)
}

// [6 D] 삭제함수 정의,
// 사용처 : [삭제]버튼 onclick 클릭시, 매개변수 : 삭제할 할일 코드, 반환값 : X 
function 삭제함수(할일코드){ console.log(`${할일코드}삭제함수`)
    // (1) 배열 내 삭제할 할일 코드 객체 찾기.
    for(let index = 0; index <= 할일목록.length-1; index++){
        if(할일목록[index].할일코드 == 할일코드){
            // index번째 할일 코드와 삭제할 할일 코드가 같으면 
            할일목록.splice(index, 1);
            break; // 삭제시 for문 종료 
        }
    }
    출력함수(); // 삭제처리 후 출력함수 재호출 함으로써 (출력상태 새로고침)
}