function sumArray(array) {
  let sum = 0;

  //  배열의 모든 요소에 접근하기 위해 for 반복문 + 인덱스 번호 사용
  let length = array.length;
  for(let i = 0; i < length; i++) { 
    sum += array [i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([5, 10]));
function filterGreaterThanTen(array) {
  let filtered = [];
  
  let length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] > 10){
      filtered.push(array[i]);
    }
  }

  return filtered;
}

console.log(filterGreaterThanTen(1, 2, 3, 4, 5));

console.log(filterGreaterThanTen([5, 60, 80, 2, 20, 1, 7]));

