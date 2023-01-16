const clock = document.querySelector('.clock')
function getTime() {
  // console.log('current tine......')
  const now = new Date()
  // console.log(now)
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()
  //시간 날짜 가져오는 코드newDate
  //시간 분 초 가져오는 코드

  //초 앞자리01 02 03처럼 앞에 0붙이는 코드
  const hours = `${hour < 10 ? `0${hour}` : `${hour}`}`
  const minutes = `${min < 10 ? `0${min}` : `${min}`}`
  const seconds = `${sec < 10 ? `0${sec}` : `${sec}`}`

  clock.innerText = `${hour}:${min}:${sec}`
}

function init() {
  getTime()
  setInterval(getTime, 1000)
  // 1초마다 한번씩 함수가져옴=업데이트
}
init()
