
// let colersaraye = ['red', 'yellow', 'green', 'bule', 'pink']
// let randomcolorindex

// setInterval(function () {

//     randomcolorindex = Math.floor(Math.random() * colersaraye.length)

//     document.body.style.backgroundColor = colersaraye[randomcolorindex ]
// }, 1000)


//////////////////////////////


let  redValue , greenValue ,blueValue
setInterval(function () {

    redValue= Math.floor(Math.random() * 255)
    greenValue= Math.floor(Math.random() * 255)
    blueValue= Math.floor(Math.random() * 255)

    document.body.style.backgroundColor = 'rgb('+redValue +','+greenValue +','+ blueValue+ ')'
}, 1000)