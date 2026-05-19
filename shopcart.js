

console.log(document);


let cart = [

    {name:"Apple", price:40, quantity:1},
    {name:"Milk", price:60, quantity:1},
    {name:"Bread", price:35, quantity:1}
]

let total = 0
let cart_length=0
let discount = 0.1
let finalbill
document.getElementById("cartdata").innerHTML = cart.map((v)=>{

    console.log(v);
    total = total +v.price
    cart_length = cart_length + v.quantity
    discount_amount = discount * total
    finalbill = total - discount_amount



    return  ` <div id="container">
        <div>       
        <h4>${v.name} - ${v.price}</h4>   
        </div>
    </div>    `

}).join("")

   console.log(document.getElementById("total").innerHTML = total);
   console.log(document.getElementById("discount").innerHTML = discount_amount);
   console.log(document.getElementById("finalbill").innerHTML = finalbill);


   
