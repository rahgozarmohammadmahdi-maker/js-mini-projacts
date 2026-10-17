var cities = {
    tehran: ['Tehran', 'Shahryar', 'rudehen', 'bumehen'],
    shiraz: ['shiraz', 'fars', 'jamshid', 'shiraz pars'],
    mashhad: ['Mashhad', 'Fariman', 'Guchan'],
    tabriz: ['Tabriz', 'Marand', 'Jolfa', 'Ahar'],
}


var starteprovine= prompt(' enter the provine: ')

var mainprovinecities=cities[starteprovine]

   mainprovinecities.forEach(function(city){
    console.log(city)
})



  