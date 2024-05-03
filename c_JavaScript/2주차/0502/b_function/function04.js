//! 콜백 함수를 활용하는 자바스크립트 내장 함수

//? 고차 함수 - 타이머 함수
// : 특정한 시간이 지난 후 함수를 실행하거나 일정 간격으로 함수를 반복 실행하는 기능을 제공


//& 1. setTimeout(함수, 시간)
// : 지정된 시간이 지난 후에, 주어진 함수를 단 한 번 실행

// - 첫 번째 인자: 실행할 함수
// - 두 번째 인자: 지연 시간(밀리초 단위, 1000 = 1초)

//* 기본 사용법
function greet(name="김유진") {
  console.log(`Hello, ${name}`);
}

greet();

setTimeout(greet, 2000)
setTimeout(greet, 3000, '홍길동')

//* 익명 함수 사용

setTimeout(function(){
  console.log(`4초 뒤에 실행됩니다.`);
}, 4000)

setTimeout(() => {
  console.log(`5초 뒤에 실행됩니다.`);
}, 5000)


//* 타이머 취소
// : clearTimeout(타이머_ID): setTimeout으로 설정한 타이머 제거

// : setTimeout()은 타이머 ID를 반환
// : 해당 ID를 clearTimeout() 함수에 전달하여 타이머를 취소

function greeting(name){
  console.log(`Hello, ${name}`);
}

const timerId = setTimeout(greeting, 10000, '김유진');

clearTimeout(timerId);


//& 2. setInterval(함수, 시간)
// : 지정된 시간 간격마다 함수를 반복해서 실행
// : 사용법은 setTimeout()과 유사
let count = 1;

let number = setInterval(() => {
  console.log(`3초 마다 실행됩니다. ${count}번째`);
  count++;
}, 3000);

//* 타이머 취소
// clearInterval(타이머_ID): setInterval로 설정한 타이머 제거

// 타이머 id는 해당 타이머를 반환하는 객체
let counting = 1;
let id = setInterval(() => {
  console.log(`5초 마다 실행됩니다. ${counting}번째`);
  counting++;
}, 5000);

setTimeout(() => {
  console.log(`타이머를 종료합니다.`);
  clearInterval(number);
  clearInterval(id);
  
}, 15000)