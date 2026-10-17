var userbasket=[
    {id: 1 , name:"labtob",price:1700000},
    {id: 2 , name:"pen",price:120000},
    {id: 3 , name:"wather",price:30000},
    {id: 4 , name:"milk",price:50000},
    {id: 5 , name:"mause",price:2000000},
    {id: 6 , name:"cable",price:9000},
    
]

var filterproduct= userbasket.filter(function(product){    
    
return product.price <100000

}
)

 var postcost =filterproduct.length *1000




var sum = 0

userbasket.forEach(function(product){

sum = sum + product.price
})
var totalprice= sum+postcost
console.log ("totalprice", totalprice )