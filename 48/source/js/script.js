// let $ = document

// const inputElem =$.querySelector('input')
// const spanElem = $.querySelector('.counter')
// const inputMaxlength=inputElem.getAttribute('maxlength')


// inputElem.addEventListener('keyup',function(){
//   spanElem.innerHTML=inputMaxlength-inputElem.value.length
   
// })










let $=document
const inputElem = $.querySelector('input')
const spanElem = $.querySelector('.counter')
const inputmaxlength= inputElem.getAttribute ('maxlength')




inputElem.addEventListener('keyup',function(){
  
  spanElem.innerHTML=inputmaxlength-inputElem.value.length
})















