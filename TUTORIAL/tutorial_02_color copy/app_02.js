// const btn = document.querySelectorAll('.btn')
// const modal = document.querySelector('.modal')
// const content = document.querySelector('.content')
// // const close = document.querySelector('.close')//close를 btn으로만들어버림
// console.log(btns)
// btns.array.forEach((btn) => {
//   btn.addEventListener('click', function () {
//     modal.classList.toggle('active')
//     content.classList.toggle('active')
//   })
// })

// btn.addEventListener('click', function () {
//   modal.classList.add('active')
//   content.classList.add('active')
// })

// close.addEventListener('click', function () {
//   modal.classList.remove('open')
//   content.classList.remove('open')
// })

const modal = document.querySelector('.modal')
const content = document.querySelector('.content')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    modal.classList.toggle('active')
    content.classList.toggle('active')
  })
})
