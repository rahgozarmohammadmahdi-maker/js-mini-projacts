let countryselectBox = document.querySelector('.countrySelect')
let cityselect=document.querySelector('.citySelect')

let countrisedata = {
    Iran: ['tabrez', 'tehran', 'shiraz'],
    Turkey: ['istanbul', 'ezmir', 'ankara', 'anyaliya'],
    us: ['los angles', 'san diedo', 'chicago'],
}



countryselectBox.addEventListener('change', function () {

    if(countryselectBox.value==="Please Select"){
cityselect.innerHTML="",
 cityselect.innerHTML += '<option>'+'select city'+'<option>'
    }
    else{
       let mainConutryName = countryselectBox.value
    let mainCountryCities = countrisedata[mainConutryName]

    cityselect.innerHTML=''

    mainCountryCities.forEach(function (city) {
        // console.log(city)

        cityselect.innerHTML += '<option>'+city+'<option>'
    }) ; 
    } 
});