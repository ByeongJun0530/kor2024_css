// [1] document
console.log(document);
// [2] document.querySelector('CSS선택자')
console.log(document.querySelector('title')); //<title>page title</title>
console.log(document.querySelector('body')); 
// [3] document.querySelector('마크업명')
console.log(document.querySelector('div')); // 첫 번째 마크업 호출 
console.log(document.querySelectorAll('div')); // 모든 마크업들 (dom)객체를 배열로 반환 
// [4] document.querySelector('.class명')
console.log(document.querySelector('.box2'));
// [5] document.querySelector('#id명')
console.log(document.querySelector('#box3'));
// [6] value 속성 
console.log(document.querySelector('.inputBox1').value);
// [7] innerHTML 속성 
console.log(document.querySelector('.printBox1').innerHTML);
// [8] style 속성 
document.querySelector('.printBox1').style='color:red;'
// [9] src 속성
document.querySelector('.imgBox1').src="./짱구.jpg"