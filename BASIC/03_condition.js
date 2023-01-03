//조건연산자 if /elseif /else

const age = 10

if (age >= 20) {
  //조건이 참이면
  console.log('성인입니다')
} else {
  //거짓이면
  console.log('청소년')
}

// if( month >= 3 && month < 5 ) {
//     console.log('spring')
// } else if() {

// } else if() {

// } else{

// }

//삼항 연산자
//조건 ? 값1 : 값2
const myAge = 30
console.log(myAge >= 20) ? '성인' : '청소년'
//switch문
const color = 'yellow'
switch (color) {
  case 'red':
    console.log('t')
    break
  case 'yellow':
    console.log('y')
    break
  case 'blue':
    console.log('b')
    break

  default:
    console.log('idk')
    break
}
