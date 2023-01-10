// console.log('adsfasdf')
const contents = document.querySelectorAll('.content')

contents.forEach((item) => {
  item.addEventListener('click', function () {
    // console.log(this)
    this.classList.toggle('active')
  })
})
