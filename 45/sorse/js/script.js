let $ = document;
let inputElem = $.querySelector("input")
let addTodoForm = $.querySelector(".add")
let addulelam =$.querySelector('.todos')

function addNewTodo(newTodoValue) {
  let NewTodoli = $.createElement('li')
  NewTodoli.className = 'd-flex list-group-item justify-content-between align-items-center'

  let newtodotitlespan = $.createElement('span')
  newtodotitlespan.innerHTML = newTodoValue

  let newtodotrash = $.createElement('i')
  newtodotrash.className = 'fa fa-trash-o delete'

  newtodotrash.addEventListener('click',function(event){
    event.target.parentElement.remove()
  })

  NewTodoli.append(newtodotitlespan, newtodotrash)

  addulelam.append(NewTodoli)

  console.log(NewTodoli);
}

addTodoForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

inputElem.addEventListener('keydown', function (event) {
  let newTodoValue = event.target.value.trim();


  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value= ''
      addNewTodo(newTodoValue)
    }
  }
})





