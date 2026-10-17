let bulbimg = document.getElementById("bubl")

let bulbflag =false

function turnofforon()
{

    if(bulbflag){
        bulbimg.setAttribute('src','emag/off.jpg')
        bulbflag=false
    }else{
        bulbimg.setAttribute('src','emag/one.jpg')
        bulbflag=true
    }
}