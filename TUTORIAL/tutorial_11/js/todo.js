const form = document.querySelector('.todo_form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')
let todos = []
//배열안에 내용 저장

function saveTodo() {
  // localStorage.setItem('todos', todos)
  localStorage.setItem('todos', JSON.stringify(todos))
  // localStorage.getItem()
  //f12 application스토리지 저장
  //but스토리지에 문자열만 저장 배열은 저장안됨 그래서 todos를json으로 문자열로 바꿔줌
}
function removeTodo(e) {
  // console.log(e)
  // console.log(e.target)
  console.log(e.target.parentNode)
  e.target.parentNode.remove()
  console.log(todos)
  //지우개함수
  todos = todos.filter((todo) => todo.id != e.target.parentNode.id)
  console.log(todos)
  //배열에서도 지워지게
  saveTodo()
}
function paintTodo(text) {
  // console.log(text)
  const li = document.createElement('li')
  const span = document.createElement('span')

  li.textContent = text
  span.textContent = '🗑'
  li.id = todos.length + 1 //첫번째 배열길이 = 0 + 1 =1//id 지정해주기//지정해 줘야 각자 삭제가능

  li.appendChild(span)
  ul.appendChild(li)
  //appendchild = li/ul뒤에 li를계속 붙여라

  todos.push({
    id: todos.length + 1,
    text: text,
    //아이디 1씩증가시키고 각각 todo 배열에 넣어버림
  })

  saveTodo() //스토리지 저장
  span.addEventListener('click', removeTodo)
  //쓰레기통 클릭하면 해당배열 삭제
  // console.log(todos)
}
function loadTodo() {
  // 로컬스토리지에 뭐가있으면 그것을 새로고침해도 먼저 가져옴
  const LS_TODOS = localStorage.getItem('todos')
  // console.log(LS_TODOS)
  // console.log(typeof LS_TODOS)
  //오브젝트가 아닌 문자열로 보임
  if (LS_TODOS != null) {
    const parseTodos = JSON.parse(LS_TODOS)
    console.log(parseTodos)
    parseTodos.forEach((todo) => console.log(todo.text))
    parseTodos.forEach((todo) => paintTodo(todo.text))
    //콘솔 뿐만아니라 화면에도 보임
  }
}

function init() {
  loadTodo()
  //   console.log(form)
  //   console.log(input)
  //   console.log(ul)
  form.addEventListener('submit', function (event) {
    if (input.value == '') return //빈문자열이면 입력그만

    event.preventDefault()
    //새로고침 안되게 = function(evetn) // event.preventDefault()
    // form에 글씨치고 Submit(엔터)치면

    console.log(input.value)
    paintTodo(input.value)
    //FORM에 적은 내용 받아오기
    input.value = ''
  })
}
init()
