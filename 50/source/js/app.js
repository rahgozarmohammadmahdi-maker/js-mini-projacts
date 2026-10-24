let $ = document

const inputElem = $.querySelector('#input-field')
const btnsaveElem = $.querySelector('#btn-save')
const btndeleteElem = $.querySelector('#btn-delete')
const colorsbox = $.querySelectorAll('.color-box')
const notescontainer = $.querySelector('#listed')

colorsbox.forEach(function (colorbox) {
    colorbox.addEventListener('click', function (event) {
        console.log(event.target);
        let maincolor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = maincolor
    })
})
function generateNewNote(){
   if(inputElem.value.trim()===''){
    return
   }



   let NewNoteElem = $.createElement('div')
   NewNoteElem.className = 'card rounded shapdow-sm'
let inputbg =inputElem.style.backgroundColor
NewNoteElem.style.backgroundColor=inputbg 
NewNoteElem.addEventListener('click', removeNote)


   let newnotepelem =$.createElement('p')
   newnotepelem.className='p-3 card-text'
newnotepelem.innerHTML=inputElem.value

NewNoteElem.append(newnotepelem)
notescontainer.append(NewNoteElem)
inputElem.value=''
// console.log(newnotepelem)
   inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
    

}

function removeNote (event){

event.target.parentElement.remove()

}

btndeleteElem.addEventListener('click', function () {
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
})

inputElem.addEventListener('keydown', function (event) {
    
    if (event.keyCode === 13) {
   event.preventDefault();
         generateNewNote()

      
    }
})
btnsaveElem.addEventListener('click', generateNewNote)