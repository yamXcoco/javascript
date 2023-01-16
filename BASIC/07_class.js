// 탬플릿
//class에는 데이터가 없음 한번만 선언

//object
// - class의 인스턴스
// - 복수 생성이 가능하다
// - 실제 데이타가 존재한다.
class Car {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  start() {
    console.log(`${this.name} is start`)
  }
  stop() {
    console.log(`${this.name} is stop`)
  }
}

const myCar = new Car('sonata', 'white')
console.log(myCar.name)
console.log(myCar.color)
myCar.start()
myCar.stop()
const oldCar = new Car('pony', 'red')
console.log(oldCar.name)
console.log(oldCar.color)
oldCar.start()
oldCar.stop()
