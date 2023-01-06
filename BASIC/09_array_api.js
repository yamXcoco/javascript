const books = ['html', 'css', 'javascript'] //java
//배열을 문자열로
console.log(books)
{
  const result = books.join() //한칸씩 띄우고 싶으면 join('')사용
  console.log(result)
}
//문자열을 배열로
{
  const books2 = 'react,vue,angular'
  const result = books2.split(',')
  console.log(result)
}
//배열순서 거꾸로
{
  const num = [1, 2, 5, 9, 25]
  const result = num.reverse()
  console.log(result)
}
//특정한 요소를 제거한 새로운 배열 만들기

{
  const numbers = [1, 3, 5, 7, 9]
  //   const result = numbers.splice(2, 2)
  //   console.log(result)
  //   console.log(numbers)
  const result = numbers.slice(2)
  console.log(result)
}

const sojus = [
  { name: '대선', price: 1100, sale: true, score: 87 },
  { name: '좋은데이', price: 1400, sale: false, score: 26 },
  { name: '진로', price: 1350, sale: true, score: 94 },
  { name: '참이슬', price: 1200, sale: false, score: 60 },
]

// score가 87인 소주를찾기
{
  const result = sojus.find((item) => item.score == 87)
  console.log(result)
}
//판매중인 소주를 찾아서 새로운 배열로 만들기
{
  const result = sojus.filter((item) => item.sale)
  console.log(result)
}
//점수만 있는 새로운 배열 만들기
{
  const result = sojus.map((item) => item.score)
  console.log(result)
}
//점수가 50보다 작은 소주가 있나
{
  const result = sojus.some((item) => item.score < 50)
  console.log(result)
}
//소주들의 평균가격 확인
{
  const result = sojus.reduce((a, b) => {
    return a + b.price
  }, 0)
  console.log(result / sojus.length)
}
// 10. 점수가 낮은 순으로, 문자열로 정렬하기
{
  const result = sojus
    .map((item) => item.score)
    .sort((a, b) => a - b)
    .join()

  console.log(result)
}
