const weather = document.querySelector('.weather')
function success(position) {
  // console.log(position)
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  weather.innerText = `${lat}, ${lon}`
}

function error() {
  console.log('위치 정보를 허용하지 않았습니다.')
}
function init() {
  navigator.geolocation.getCurrentPosition(success, error)
  //아무홈페이지에서 긁어오기
}
init()
