var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const itemPrice = Math.floor(Math.random()*10)
 const newItem = {[item]: itemPrice}
 console.log (`${item} has been added to your cart.`)
 cart.push(newItem)
 return cart
}

function viewCart() {
  if (cart.length = 0){
    console.log( "Your shopping cart is empty.")
 }
    let cartItem = []
    let itemPrice = []
    let cartStatement = []
    for(let i=1; i < cart.length; i++){
      cartCheck[i] =` ${cart[i]} at $${cart[Object.keys(cart)[i]]},`
      cartStatement.push(`${cartCheck[i]}`)
    }
    switch(cart.length){
      case 1:
        break;
      case 2:
        cartStatement = cartStatement.join("and")
        break;
      default:
        cartStatement[cart.length-1] = "and ".concat(cartStatement[cart.length-1])
        cartStatement = cartStatement.join("and")
    }
  console.log(`In your cart, you have ${cartStatement}`)
}


function total() {
  var cartValue = 0
  for(let i=0; i < cart.length; i++){
    cartValue +=`${cart[Object.keys(cart)[i]]},`
  }
  return cartvalue
}

function removeFromCart(item) {
  var itemInCart = false;

  for(let i=0, n= cart.length; i< n; i++){
    if(cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart =cart.slice(0,i).concat(cart.slice(i+1))
      n--
    }
  }
  if(!itemInCart){
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you");
    return false;
  }
  console.log(`Your total cost is $${total()}, which wil be chard to the card ${cardNumber}.`)
  cart =[]
}
