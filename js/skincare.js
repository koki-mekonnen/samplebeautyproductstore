let carts=document.querySelectorAll(".addcart")
products=[

{
    name:"Kylie Skin",
    price:"95",
    tag:"mo3",
    incart:0
}
,
{
    name:"Catapil",
    price:"50",
    tag:"mois2",
    incart:0
}
,
{
    name:"Nutrogena",
    price:"20",
    tag:"mois",
    incart:0
}
,
{
    name:"kaya Sunscreen",
    price:"75",
    tag:"sunsce1",
    incart:0
}
,
{
    name:"Cera Ve Sunscreen",
    price:"125",
    tag:"sunscree",
    incart:0
}
,
{
    name:"COOLA Sunscreen",
    price:"125",
    tag:"sunscreen",
    incart:0
}
,
{
    name:"Dove Lotion",
    price:"200",
    tag:"dovelot",
    incart:0
},
{
    name:"Amalactin Lotion",
    price:"300",
    tag:"amalactinlo",
    incart:0
},
{
    name:"Aveeno Lotion",
    price:"225",
    tag:"aveenomostjpg",
    incart:0
},
{
    name:"Vaseline Lotion",
    price:"250",
    tag:"vaslo",
    incart:0
},
{
    name:"Derma Body Lotion",
    price:"450",
    tag:"derlo",
    incart:0
},
{
    name:"Nevia",
    price:"125",
    tag:"nevlo",
    incart:0
},
{
    name:"Johnsons Baby Lotion",
    price:"230",
    tag:"bajolo",
    incart:0
},
{
    name:"Dove Baby Lotion",
    price:"100",
    tag:"badov",
    incart:0
},
{
    name:"Meril Baby Lotion",
    price:"80",
    tag:"Meril-Baby-Lotion",
    incart:0
}

]

for(let i=0;i<carts.length;i++){
carts[i].addEventListener('click',()=>{
    cartnumbers(products[i]);
    totalcost(products[i])
})
}

function onloadcartnumber(){
let productnumbers=localStorage.getItem("cartnumbers")
productnumbers=parseInt(productnumbers)

if(productnumbers){
document.querySelector(".cart span").textContent=productnumbers
}
}



function cartnumbers(product){
// console.log(product)
let productnumbers=localStorage.getItem("cartnumbers")
productnumbers=parseInt(productnumbers)
// console.log(productnumbers)
if(productnumbers){
    localStorage.setItem("cartnumbers",productnumbers+1)
    document.querySelector(".cart span").textContent=productnumbers+1
}
else{
localStorage.setItem('cartnumbers',1);
document.querySelector(".cart span").textContent=1
}
setitems(product);
}

function setitems(product){
let cartitems=localStorage.getItem('productsincart')
cartitems=JSON.parse(cartitems)
if(cartitems!=null){

    if(cartitems[product.price]==undefined){
        cartitems={
            ...cartitems,
            [product.price]:product
        }
    }
    cartitems[product.price].incart+=1
}else{
product.incart=1;
 cartitems={
    [product.price]:product
}}
localStorage.setItem("productsincart",JSON.stringify(cartitems))
}
function totalcost(product){
let cartcost=localStorage.getItem('totalcost')

if(cartcost!= null){
    cartcost=parseInt(cartcost)
  //  console.log(typeof  cartcost)
    product.price=parseInt(product.price)
  //  console.log(typeof product.price)
    localStorage.setItem("totalcost",cartcost +=
    product.price)
}
else{
localStorage.setItem('totalcost',product.price) }
}
function displaycart() {
let cartcost=localStorage.getItem('totalcost')
let cartitems=localStorage.getItem('productsincart')
cartitems=JSON.parse(cartitems);
// console.log(cartitems)

let productcont=document.querySelector('.products')
// productcont=JSON.parse(productcont)
console.log(cartitems)

if(cartitems && productcont){
    productcont.innerHTML='';
    Object.values(cartitems).map(item  => {
        productcont.innerHTML+= `
        <div class="product">
        <div class="pros>
        <ion-icon name="trash-outline"></ion-icon>
        <img src=img/${item.tag}.jpg>
       <span>  &nbsp &nbsp &nbsp &nbsp${item.name}</span>
            </div>
        <div class="price">$${item.price},00</div>
        <div class="quantity"><span>${item.incart}</div>
        <div class="total">$${item.incart*item.price}</div>
        </div> 
         ` 
    })
    productcont.innerHTML+=`
    <div class="totalcartcost">
    <h3 class=totalcosttitle>
    TOTAL CARTCOST : $${cartcost},00 </h3>
  ,
    
    `
}

}
onloadcartnumber();
displaycart();