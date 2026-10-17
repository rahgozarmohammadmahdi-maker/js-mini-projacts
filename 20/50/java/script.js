 var usernumber= 0

 var sum= 0

 var counter =0

 while (usernumber !=-1) {
     sum= sum + usernumber
    usernumber = Number(prompt("enter the number /n if you dont have nummber enter -1"))
    if(usernumber !=-1)
      counter++

      avreg= sum/counter
 }
 console.log(sum)
 console.log(counter)
 
 alert(avreg)