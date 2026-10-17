var word = prompt("enter your word")
 var charectersaray =word.split('')
 var resevchareters =charectersaray.reverse()
 var reversword = resevchareters.join('')


if(word===reversword){
    alert(" از هر دوطرف یه شکله ")
}else{
    alert('از هر دوطرف یه شکل نیست')
}