console.log('haha')

//오브젝트
//자바스크립트의 데이터 상태와 행동을 가짐
// - phone의 상태 (properties) -> VideoColorSpace, size
// - phone의 행동 (method) -> ring, take a picture, play music
// {키 : 값}

// object
const user = {
  name: 'Picaso',
  age: 30,
  email: 'picaso@gmail.com',
  // works: ['게르니카', '우는여인'],
  works: [
    { id: 1, title: '게르니카', price: 25000, like: 400 },
    { id: 2, title: '아비뇽의 처녀들', price: 35000, like: 750 },
    { id: 3, title: '우는 여인', price: 80000, like: 1200 },
  ],
  // login: function () {
  //   console.log('picaso logged in')
  // },
  login() {
    console.log('Picaso logged in!')
  },
  logout() {
    console.log('Picaso logged out!!!!!')
  },
  printWorks() {
    console.log('피카소의 대표작')
    console.log(this)
    this.works.forEach((work) => {
      // console.log(work)
      console.log(
        `${work.id}. ${work.title}, ${work.price}원, 좋아요(${work.like})`
      )
    })
  },
}

console.log(user)
// console.log(user.age)
// console.log(user.works[0].title)
console.log(user.works[2].price)
//중간에 값 수정도 가능
user.age = 32
console.log(user.age)
//typeof문자인지 숫자인지 변수판단
const aaa = 'coffee'
console.log(typeof aaa)

user.printWorks()

// 매서드 엑셀함수랑 비슷
console.log(Math)
console.log(Math.PI)
//0에서 9사이의 정수출력
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))
console.log(Math.random)

//배열을 랜덤출력
const food = ['김밥', '떡볶이', '라면']
const randomNum = Math.floor(Math.random() * food.length)
console.log(randomNum)
console.log(food[randomNum])
