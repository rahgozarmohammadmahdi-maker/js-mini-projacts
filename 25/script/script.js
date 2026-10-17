var allproducts = [
    { id: 1, name: "laptap", price: 1700000 },
    { id: 2, name: "phone", price: 120000 },
    { id: 3, name: "milk", price: 350000 },
    { id: 4, name: "pen", price: 1700000 },
    { id: 5, name: "pencil", price: 10000 },
    { id: 6, name: "cable", price: 1700000 },
    { id: 7, name: "wather", price: 1000 },
    { id: 8, name: "softdrink", price: 900000 },
];

var userbasket = [
    { id: 2, name: " milk", price: 350000 },
    { id: 1, name: " wather", price: 1000 },
];

var userreqest = prompt("1.add product \n 2. remove products")

if (userreqest === '1') {
    //   alert("add")
    var userproductname = prompt('enter youer name');

    var productdata;

    var isinshop = allproducts.some(function (produtc) {
      if ( produtc.name === userproductname){
         productdata=produtc
         return true;
     }
    });
      if (isinshop == true) {
        var newprodutc = {
            id: 3,
            name: productdata.name,
            price: productdata.price,
        };
        userbasket.push(newprodutc);
        console.log("  basket   ", userbasket);
    } else {
        alert('همچین محصولی موجود نمیباشد');
    }
} else if (userreqest === '2') {
    // alert('remove')

      var userProductname = prompt("Enter Your Product Name: ");

  var productIndex = userbasket.findIndex(function (product) {
    return product.name === userProductname});

  userbasket.splice(productIndex, 1);

  console.log("Basket: ", userbasket);


} else {

    alert("للطفا گزینه صحیح را انتخاب کنید ")
}