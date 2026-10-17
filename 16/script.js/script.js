var usernumber = Number(prompt("enter the number",0))
var sum = 0

for(var i = 0 ; (usernumber/10) !=0 ;i++){

sum=sum +(usernumber%10)
usernumber= Math.floor(usernumber/10)
}
console.log(sum)