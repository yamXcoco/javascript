console.log('hahaha')
// variable (var, lent ,const 변수)
// scope 블럭기반(괄호안에서만 사용가능)
// 1.var
// 읽기 쓰기 가능/블록을 무시한다

// var a = "jonh";
// console.log(a);
{
  var user = 'john'
  user = 'alice'
  console.log(user)
}
console.log(user)
// 2. let
// 읽기 쓰기 가능/블록무시 못 함
{
  let title = 'html'
  console.log(title)

  title = 'css'
  console.log(title)
}
// console.log(title)

// 3.상수 const
// 읽기만 가능 쓰기 불가능 변하지 않음
{
  const subject = '야인시대'
  console.log(subject)
  // subject = 'betmen'
}
// 4.변수의 데이터 타입
// Number, string, boolean, null, undefined(원시데이터)
// Object : 싱글데이터를 묶어놓은 데이터
const myclass = {
  subject: 'html',
  date: '2023-01-15',
}
// function () {
//   // 할일을 적어준다
//   console.log('hahaha')
// }
const hahaha = function () {
  console.log('hahaha')
  // 변수안에 함수 넣어버리기
}
const ad = 100
const width = 10.5
console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)
const firstname = 'john'
const lastname = 'snow'

console.log(firstname + ' ' + lastname)
console.log(` ${firstmame} ${lastname} `)

const a = 1 / 0
const b = -25 / 02
const c = 'html' / 10
console.log(a)
console.log(b)
console.log(c)

// String
const firstName = 'john'
const lastName = 'snow'
const fullName = firstName + lastName
// const fullName = firstName + '' + lastName
console.log(fullName)
console.log(` ${fullName} ${lastName}`)
