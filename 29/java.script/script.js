var taskarray=
{
    ali: ['html','css','js'],
    amin: ['react','vue','building'],
    mohamad: ['seo','link building'],
    amir: ['admin','content'],
}

var newname =prompt("enter the nwe taske")
var employname =prompt("enter the nwe taske")

var employtask= taskarray[employname]
employtask.push(newname)

console.log(taskarray)