const bg = document.querySelector('.bg')
const title = document.querySelector('title')
window.addEventListener('scroll', function () {
  const value = window.scrollY
  // console.log(value)
  title.classList.add('active')
  if (value == 0) {
    title.classList.remove('active')
  } else {
    title.classList.add('active')
  }
  //스크롤이 움직이지 않으면 40%제거
  bg.style.clipPath = `circle(${value}px at 50% 50%)`
})
