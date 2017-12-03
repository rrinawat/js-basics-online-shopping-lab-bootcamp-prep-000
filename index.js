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
  const n = cart.length
  if (n = 0){
    console.log( "Your shopping cart is empty.")
 }

    let cartStatement = []
    for(let i=1; i < n; i++){
      let cartHolder =cart[i]
      let cartItem = Object.keys(cartHolder)[0]
      let price = cartHolder[item];
      cartStatement.push(`${cartItem} at \$${price}`)
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
  for(let i=0, n = cart.length; i < n; i++){
    for(let item incart[i]){
    cartValue += cart[i][item]
    }
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
