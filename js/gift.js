let carts=document.querySelectorAll(".addcart")
products=[

{
    name:"Bauty Pack1",
    price:"80",
    tag:"gif1",
    incart:0
}
,
{
    name:"Bauty Pack2",
    price:"50",
    tag:"gift2",
    incart:0
}
,
{
    name:"Bauty Pack3",
    price:"60",
    tag:"gif3",
    incart:0
}
,
{
    name:"Bauty Pack4",
    price:"100",
    tag:"gif4",
    incart:0
}
,
{
    name:"Gucci Leather Bag",
    price:"1500",
    tag:"guubag",
    incart:0
}
,
{
    name:"Louis Vitious Bag",
    price:"1700",
    tag:"bag1",
    incart:0
}
,
{
    name:"Dior Leather Bag",
    price:"2500",
    tag:"diorbag",
    incart:0
}
,
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