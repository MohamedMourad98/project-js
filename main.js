let bar = document.getElementById("bar")
let nav = document.getElementById("navbar")
let close = document.getElementById("close")


if(bar){
  bar.addEventListener("click", ()=>{
    nav.classList.toggle("active")
  })
}
  if(close){
    close.addEventListener("click", ()=>{
      nav.classList.toggle("active")
    })

}




// toggle  img
// let mainImage = document.getElementById("mainImage")
//  function toggleImg(img){
//   mainImage.src = img;
  
// }




// loading
let lod = document.getElementById("lod")

window.addEventListener("load", function(){
  lod.style.display = "none"
})



// .زرار بيطلعني 
let up = document.querySelector(".up")
window.onscroll = function(){
  this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show")
}

up.onclick = function (){
  window.scrollTo({
    top:100,
    behavior: "smooth",
  })
}







// لم افتح من اللاب

let pagShopping = document.querySelector('.fa-bag-shopping')
pagShopping.addEventListener('click', function(){
  let cartPage = document.querySelector('.cart__product')
  cartPage.style.transform = 'scale(1)'
})



// لم افتح من الموبايل
let pagShoppingMobile = document.querySelector('.ico-x')
pagShoppingMobile.addEventListener('click', function(){
  let cartPage = document.querySelector('.cart__product')
  cartPage.style.transform = 'scale(1)'


})



// لم اقفل الصفحه
let closePage = document.querySelector('.icon-x')
closePage.addEventListener('click', function(){
  let cartPage = document.querySelector('.cart__product')
  cartPage.style.transform = 'scale(0)'


})



// الداتا ال خزنتها وندهت عليها من سيكشن شووب
const items = [{
  id:0,
  title:"Cartoon Astronaut T-Shirt-1",
  price:100,
  img:"image/products/f1.jpg",
  amount:1
},
{
  id:1,
  title:"Cartoon Astronaut T-Shirts-2",
  price:200,
  img:"image/products/f2.jpg",
  amount:1
},
{
  id:2,
  title:"Cartoon Astronaut T-Shirts-3",
  price:300,
  img:"image/products/f3.jpg",
  amount:1
},
{
  id:3,
  title:"Cartoon Astronaut T-Shirts-4",
  price:150,
  img:"image/products/f4.jpg",
  amount:1
},
{
  id:4,
  title:"Cartoon Astronaut T-Shirts-5",
  price:130,
  img:"image/products/f5.jpg",
  amount:1
},
{
  id:5,
  title:"Cartoon Astronaut T-Shirts-6",
  price:110,
  img:"image/products/f6.jpg",
  amount:1
},
{
  id:6,
  title:"Cartoon Astronaut T-Shirts-7",
  price:210,
  img:"image/products/f7.jpg",
  amount:1
},
{
  id:7,
  title:"Cartoon Astronaut T-Shirts-8",
  price:220,
  img:"image/products/f8.jpg",
  amount:1
}]

/* render items */
let showShop = document.getElementById('shopItems')
function renderItems(){
  
  for(let i=0; i<items.length; i++){
    let item = items[i]
    let setItemShop = `
    <div class="pro product">
      <img class="img" src="${item.img}"  alt="">
      <div class="des">
        <span>adidas</span>
        <h5 class="title">${item.title}</h5>
        <h4 class="price">${item.price}.00$</h4>
      </div>
      <div class="cart" data-id="${item.id} ">
        <button class='btn0'>ADD</i></button>
      </div>
    </div>
    `
    showShop.innerHTML += setItemShop   
  }
  
}
renderItems()




//لم بخفي ايكونه
let carIcon = document.querySelector(".mobile a")
let carIcon2 = document.querySelector(".cart-count")
carIcon.style.transform = 'scale(0)'
pagShopping.style.transform = 'scale(0)'
carIcon2.style.transform = 'scale(0)'




let addButton = document.querySelectorAll(".btn0");
let cartItems = document.getElementById("tbody");
let myShoppingProduct = document.getElementsByClassName("tbody-cart")[0];
// loop get button add 
for (let i = 0; i < addButton.length; i++) {
  let clickedButton = addButton[i];
  clickedButton.addEventListener("click", function (e) {
    let button = e.target;

    // لم بضغك علي الايكونه
    carIcon.style.transform = 'scale(1)'
    pagShopping.style.transform = 'scale(1)'
    carIcon2.style.transform = 'scale(1)'

    // الزرار بيتغير لم بضغط علي الزرار 
    button.innerText =('Item Added')
    button.classList.add('disabled')
    button.setAttribute("disabled", " ")
    
    // Bring items to add in the table
    let productCard = button.parentElement.parentElement;
    let productImg = productCard.getElementsByClassName("img")[0].getAttribute("src");
    let productTitle = productCard.getElementsByClassName("title")[0].innerText;
    let productPrice = productCard.getElementsByClassName("price")[0].innerText;
    let productId = productCard.getElementsByClassName("cart")[0].getAttribute("data-id");

    cartItems.innerHTML += `
      <tr class="tbody-cart">
            <td>${+productId + 1}</td>
            <td><img src="${productImg}" alt=""></td>
            <td class='name-dell'>${productTitle}</td>
            <td class='price-num'>${productPrice}</td>
            <td>
            <input type="number" value='1' >

            </td>
            <td class='sub-total'>78:00$</td>
            <td><button class='dell'>delete</button></td>

          </tr>
      `;


    // The number of products in the cart
    let allPro = document.getElementsByClassName("tbody-cart");
    document.querySelector(".cart-count").innerText = allPro.length;
    document.querySelector(".cart-count2").innerText = allPro.length;
    

    updateCart();
    changeAmount()
    deleteCart();
    
  });
}



// لم بحذف المنتج من التيبل 
let allPro = document.getElementsByClassName("tbody-cart")[0];
let dell = document.getElementsByClassName("dell");
let buttonCart = document.querySelector(".btn0");

function deleteCart() {
  for (let i = 0; i < dell.length; i++) {
    let del = dell[i];
    del.addEventListener("click", function (e) {
      let deleteAll = e.target;

      let row = deleteAll.parentElement.parentElement;
      row.remove();



      // get the name delete
      let nameDelete = row.getElementsByClassName('name-dell')[0].innerText

      // loop for product container to find name card
      let cards = document.getElementsByClassName('product')
      for(let i=0; i<cards.length; i++){
        let eachCard = cards[i]
        let cardProductName = eachCard.getElementsByClassName('title')[0].innerText
        if(nameDelete == cardProductName ){
          let theAddButton = eachCard.getElementsByClassName('btn0')[0]
          theAddButton.innerText ='ADD'
          theAddButton.classList.remove('disabled')
          theAddButton.removeAttribute("disabled")

        }
      }

      // Hide the cart icon When there are no products
      let allPro = document.getElementsByClassName("tbody-cart");
      document.querySelector(".cart-count").innerText = allPro.length;
      document.querySelector(".cart-count2").innerText = allPro.length;
      if(allPro.length == 0){
        carIcon.style.transform = 'scale(0)'
        pagShopping.style.transform = 'scale(0)'
        carIcon2.style.transform = 'scale(0)'
      }

      

      updateCart()
    });
  }
}


// function update the price
function updateCart() {
  let total = 0;
  let proRowAll = document.getElementsByClassName("all-pro")[0];
  let eachRow = proRowAll.getElementsByClassName("tbody-cart")
  for (let i = 0; i < eachRow.length; i++) {
    let proRow = eachRow[i];
    let subTotal = proRow.getElementsByClassName("sub-total")[0];

    let amount = proRow.getElementsByTagName("input")[0].value;
    let priceCart = proRow.getElementsByClassName("price-num")[0];
    let thePrice = parseFloat(priceCart.innerText.replace(".00$", ""));
    subTotal.innerHTML = (thePrice * amount) + ".00$";
    changeAmount()
    total = total + (thePrice * amount);
  }
  let totalAll = document.getElementById("totall");
  totalAll.innerHTML = total + ".00$";
}
  
// function change amount and update the price

function changeAmount(){
  let cartContainer = document.getElementsByClassName("all-pro")[0]
  let myProduct = cartContainer.getElementsByClassName("tbody-cart")
  for(let i = 0; i < myProduct.length; i++){
    let eachRow = myProduct[i]
    let quantity = eachRow.getElementsByTagName("input")[0]
    
    
    quantity.addEventListener("change", function(e){
      let targetInput = e.target
      if(targetInput.value <= 0 || isNaN(targetInput.value)){
        targetInput.value = 1
      }
      updateCart()
    })
  }
}
changeAmount()










