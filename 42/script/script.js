let $ = document

const firstValue = $.querySelector('.C')
const secondValue = $.querySelector('.F')
const converter = $.querySelector('#converter')
const result = $.querySelector('.result')
const convertButton = $.querySelector('.convertButton')
const resetButton = $.querySelector('.resetButton')
const changeButton = $.querySelector('.changeButton')

function convert() {
    // console.log('Convert')
    if (converter.value === '') {
        result.innerHTML = 'insert correct value'
        result.style.color = '#993300'
    } else {
        if (firstValue.innerHTML == '  °C ') {

            let resultvalue = (converter.value*1.8) +32

           result.innerHTML= converter.value+'°C to '+resultvalue+'°F'
           
        } else {
            let resultvalue =(converter.value-32)*5/9
            result.innerHTML= converter.value+'°F to '+resultvalue.toFixed+'°C'

        }
    }
 




}

function reset() {
    // console.log('Reset')
    result.innerHTML = ''
    converter.value = ''

}

function swap() {
    if (firstValue.innerHTML === '°C') {
        firstValue.innerHTML = '°F'
        secondValue.innerHTML = '°C'
        converter.setAttribute('placeholder', '°F')
        document.title = 'SalzLearn| Js | °F to °C'

    } else {
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        converter.setAttribute('placeholder', '°C')
        document.title = 'SalzLearn| Js | °C to °F'
    }
}

convertButton.addEventListener('click', convert)
resetButton.addEventListener('click', reset)
changeButton.addEventListener('click', swap)