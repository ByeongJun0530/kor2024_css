// [1] 매개변수 x, 반환값 x 
function func1(){
    console.log('func1 execute');
}
func1(); // 함수 실행 호출

// [2] 매개변수 o, 반환값 x 
function func2(x, y){
    console.log(`func2 execute ${x + y}`)
}
func2(2, 3);

// [3] 매개변수 o, 반환값 o 
function func3(x, y){
    console.log(`func3 execute`)
    let result = x + y
    return result;
}
let a = func3(3, 5);
console.log(a);

// [4] 매개변수 x, 반환값  o 함수 정의 
function func4(){
    console.log(`func4 execute`)
    return 10;
}
let b = func4(); // 함수 실행, 호출 
console.log(b); // 10 

// [실습1] 하나의 수를 입력받아 홀수인지 짝수인지 반환하는 함수 
function odd(x){
    if(x % 2 == 0){
        console.log("짝수")
    } else {
        console.log("홀수")
    }
} 
let num = Number(prompt("정수1"));
odd(num);

// [실습2] 주어진 배열에서 가장 큰 수를 반환하는 함수를 만드시오.
function findMax(arr){
    let max = 0; // - 최대값 변수 0 초기화 
    for(let index = 0; index <= arr.length - 1; index++){
        // index는 0부터 배열 내 마지막 인덱스까지 1씩 증가 반복
        if(arr[index] > max){
            // - 만약에 index 번째 요소가 최대값 변수보다 크면 교체 
            max = arr[index]; // - 만약에 index 번째 요소를 최대값 변수에 대입 
        }
    } // f end
    return max; // - 배열 내 가장 큰 값을 반환하는 함수 
}

let array1 = [3, 5, 2, 1];
console.log(findMax(array1));

let array2 = [100, 1500, 2100, 1700];
console.log(findMax(array2));

// [실습3] 주어진 배열을 오름차순으로 정렬하여 반환하는 함수 만드시오. 
    // 함수명 : arrOrderBy(), 매개변수 : 배열1개, 반환값 : 정렬된배열1개 
function arrOrderBy(arr){

    for(let index = 0; index <= arr.length - 1; index ++){
        // - index는 0부터 배열의 마지막 인덱스까지 1씩 증가 반복 
        // for 중첩 
        for(let index2 = index + 1; index2 <= arr.length - 1; index2 ++){
            if(arr[index] > arr[index2]){
                // 만약에 index 번째 요소가 index2 번째 요소보다 크면 
                // *스왑* : 두 변수간의 값 교환 
                let temp = arr[index];
                arr[index] = arr[index2];
                arr[index2] = temp;
            }
        }
    }//f end
    return arr; // 반환 
}
let array3 = [3, 5, 2, 1];
console.log(arrOrderBy(array3)); // [1, 2, 3, 5]

// [지문4] 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 console.log() 함수로 출력하시오.  (단] 동일한수 제외) 
let value1 = 3;
let value2 = 5;
let value3 = 2;

if(value1 > value2){ // 첫 번째 값이 두 번째 값보다 크면 자리 바꾸기(스왑)
    let temp = value1;
    value1 = value2;
    value2 = temp;
}
if(value1 > value3){ // 첫 번째 값이 세 번째 값보다 크면 자리 바꾸기(스왑)
    let temp = value1;
    value1 = value3;
    value3 = temp;
}
if(value2 > value3){ // 두 번째 값이 세 번째 값보다 크면 자리 바꾸기(스왑)
    let temp = value2;
    value2 = value3;
    value3 = temp;
}
console.log(`${value1}, ${value2}, ${value3}`) // 2, 3, 5