const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '8c9a3a12'
const APP_KEY = '2fa1dd75f658eb6ede654d7888753bb6'

const initQuery = 'chicken'

// const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

function paintRecipe(items) {
  console.log(items)
  let foods = ''
  items.map((item) => {
    foods += `<div class="food">
          <div class="food_img">
            <img src="${item.recipe.image}" alt="" />
          </div>
          <div class="food_info">
            <div class="food__title">
              <h3>${item.recipe.label}</h3>
              <a href="${item.recipe.url}" target = "_blank" class="btn">View recipe</a>
            </div>
            <p class="food_extra">calories : ${item.recipe.calories}</p>
            <p class="food_extra">Diet Labels : ${item.recipe.dietLabels}</p>
          
          </div>
        </div>`
  })
  // console.log(foods)
  foodList.innerHTML = foods
}
async function getRecipe(query) {
  // console.log(query)
  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

  const response = await fetch(baseUrl)
  const data = await response.json()
  console.log(data)
  paintRecipe(data.hits)
}
function init() {
  getRecipe(initQuery)

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    //콘솔 새로고침하는거 방지
    // console.log(input.value)
    const query = input.value
    // console.log(query)
    getRecipe(query)
    input.value = ''
  })
}

init()
// 8c9a3a12
// 2fa1dd75f658eb6ede654d7888753bb6
