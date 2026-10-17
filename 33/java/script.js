var minute = prompt("enter the minute")
var second = prompt("enter the second")

var timer = setInterval(function(){

if(second===-1){
    minute--
    second=59
}
if(minute == 0 && second ==0){
    clearInterval
}


    console.log('timer' +minute +':'+second)
    second--

},1000)