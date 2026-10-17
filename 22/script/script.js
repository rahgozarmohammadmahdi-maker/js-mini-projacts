
var yusenumbers = []
var yusenumber = 0
var sum=0
while (yusenumber !=-1) {
    yusenumber = Number(prompt('enter the number /n enrer -1 if you dont enter any number'))
if(yusenumber !=-1){
yusenumbers.push(yusenumber)
}

}
for(var i=0;i<yusenumbers.length;i++ ){
    sum = sum +yusenumbers[i]
}
console.log(yusenumber)
console.log(sum / yusenumbers.length)