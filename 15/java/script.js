var numbers= null
var sum =0
for(var i=0 ; i<5 ; i++){

numbers=Number(prompt("enter tde" +(i+1)+ " number"))

	sum = sum + numbers
}


console.log("Average: " + (sum / 5))