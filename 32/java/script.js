var  userdatw =[
    {id:1 ,username:'ali' , password:'010101',email:'mohamdrahgozar@email.cim'},
    {id:1 ,username:'amir' , password:'amir90',email:'mohamdrahgozar@email.cim'},
    {id:1 ,username:'hosein' , password:'hoseinchitoz',email:'mohamdrahgozar@email.cim'},
    {id:1 ,username:'hasen' , password:'hasan123',email:'mohamdrahgozar@email.cim'},
    {id:1 ,username:'zahra' , password:'zahra83',email:'mohamdrahgozar@email.cim'},
    {id:1 ,username:'mohamad' , password:'mohamad945',email:'mohamdrahgozar@email.cim'},
]


var username = prompt( "enter your username")

var mainuserdata= userdatw.find(function(user){
    return user.username===username
})

if (mainuserdata===undefined){
    alert("شما هنوز توسایت ثبتنام نکردین ")
}else(
    alert("youre password"+ mainuserdata.password)
)




// console.log(mainuserdata)
