var usernumber = Number(prompt("enter the number",0))
var counter = 0

if(usernumber==0){
    counter =1;
}else{

for(var i = 0 ; usernumber/10 !=0;i++){

 counter++

usernumber= Math.floor(usernumber/10 )

}  
}
alert(counter)