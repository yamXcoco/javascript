console.log('adfsfafd')
// 문자열
console.log('10') // String
console.log(10) //숫자

console.log('10' + 2)
console.log(typeof ('10' + 2))
// 연산자
console.log(100 + 20)
console.log(100 - 20)
console.log(100 * 20)
console.log(100 / 20)
console.log(100 % 20)
// 증강연산자
// const number = 8
let number = 8
console.log(number)
number++
console.log(number)
number--
console.log(number)

let num1 = 10
let num2 = ++num1
console.log(num1.num2)

let count1 = 10
let count2 = count1++
console.log(count1.count2)

let x = 10
let y = 5
x = x + y
console.log(x) //(=x+y)

x = x * y //(x*=y)
console.log(x)

//비교연산자
console.log(1000 < 100)
console.log(1000 <= 100)
console.log(1000 > 100)
console.log(1000 >= 100)
//논리연산자

//&&and ||or !not
let a = 100 > 50
let b = 100 < 50
let c = true

//||하나라도 true일때
//&&모두 true일때만
//!true false 반대로
const value1 = '100'
const value2 = 100
//동등/일치연산자
console.log(value1 == value2) //t
console.log(value1 === value2) //f(데이터의 타입까지는 같지 않아서)

console.clear()
console.log('\\\\\\\\\\\\\\')
console.log(0 == false)
console.log(1 == true)
console.log(1 === false)
console.log(1 === true)
console.log('' == false)
console.log('' === false)
console.log(null == undefined)
console.log(null === undefined)
