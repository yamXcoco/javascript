//class는 .price id는 #price
//const price = document.getElementById('price')  //id
//const price = document.querySelector('.price')  //class
const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')
const plus = document.querySelector('.plus')
const btns = document.querySelectorAll('button')

// console.log(btns)
let num = 1
const unit_price = 12000
price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num
function paintTotalPrice() {
  count.textContent = num
  sum.textContent = unit_price * num
}
//화면에 나오게

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    console.log(e)
    // console.log(e.target)
    // console.log(e.target.className)
    // if (e.target.className == 'plus') {
    //   num++
    //   paintTotalPrice()
    // } else if (e.target.className == 'minus') {
    //   num--
    //   if (num <= 1) num = 1
    //   paintTotalPrice()
    // } else {
    //   num = 1
    //   paintTotalPrice()a
    // }
  })
})
// plus.addEventListener('click', function () {
//   num++
//   paintTotalPrice()
// })
// minus.addEventListener('click', function () {
//   num--
//   if (num <= 1) {
//     num = 1
//   }
//   paintTotalPrice()
// })
// reset.addEventListener('click', function () {
//   num = 1
//   paintTotalPrice()
// })
//console.log(price)
