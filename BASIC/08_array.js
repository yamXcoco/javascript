const arr1 = new Array()
console.log(arr1)

const arr2 = ['1', '2', 3, 'hi', 0.5, true, false]
console.log(arr2)

const arr3 = [
  'abc',
  { model: 'apple', price: 50000 },
  { model: 'galaxy', price: 80000 },
]
console.log(arr3[2].model)

const books = ['html', 'css', 'java', 'photoshop']
console.log(books)
console.log(books.length)
console.log(books[3])
console.log(books[books.length - 1])

//for

for (let book of books) {
  //book은 변수 i로 적어도 상관없음
  console.log(book)
}
console.log('///////////////')
// foreach
books.forEach((book) => {
  console.log(book)
})
//요소 나중에 추가 삭제하는 방법
//뒤에추가/삭제는 push/pop
//앞에추가는 unshift/shift
books.push('jquary')
console.log(books)
books.pop()
console.log(books)
//지정한위치 추가,삭제
books.splice(2, 1, 'react', 'vue')
console.log(books)
//배열의 순서 뱉어내게
console.log(books.indexOf('react'))
//배열에 css 라는 내용이 있니?
//배열에 git 라는 내용이 있니?
console.log(books.includes('css'))
console.log(books.includes('git'))
