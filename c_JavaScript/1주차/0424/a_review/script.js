//& 각 문제를 작성한 후 결과 확인을 자바스크립트의 런타임 환경인 node 키워드로 실행

//! 문제 1

// 데이터 타입과 변수
// 각각의 데이터 타입에 적합한 변수 선언 방식을 선택하여 코드를 작성

// 도시 데이터: 변경되지 않는 값 EX) '부산', '서울' 등
const city= `부산`;

// 기온 데이터: 변경될 수 있는 값 EX) 20, 24, 21 등
let temperature = 20;

// 비가 내리는지 내리지 않는지에 대한 여부 EX) 비 내림 > true / 비 내리지 않음 > false

// ? boolean 타입 변수 이름 짓기
// : isRraining, isStudent, hasChildren, isEmpty
// >> 의문문 형태로 동사가 앞선 형태의 이름이 주로 사용
let isRaining = false;

console.log(`현재 ${city}의 기온은 ${temperature}도 이며, 비가 ${isRaining}입니다.`);

//! 문제 2

// 템플릿 문자열
// JavaScript에서 템플릿 문자열을 사용하여 다음과 같은 출력을 생성하는 코드를 작성

// : 출력 결과
// 이름(name)과 나이(age) 변수를 선언하고, 각각 "철수"와 25로 초기화
// 위의 두 변수를 사용하여 "철수님의 나이는 25세입니다."라고 출력

let name = `김유진`;
let age = `24`;
console.log(`${name}님의 나이는 ${age}입니다.`);


//! 문제 3
// 호이스팅과 스코프
// 다음 코드를 실행했을 때 콘솔에 어떤 값이 출력될지 예측하고, 왜 그런 결과가 나오는지 설명


console.log(num);
var num = 10;
