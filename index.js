var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const price = Math.floor(Math.random() * 100) + 1;
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here

  if (cart.length === 0)
  {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1)
  {
    var item = Object.keys(cart[0])[0]
    var price= Object.values(cart[0])[0]
    console.log(`In your cart, you have ${item} at $${price}.`)
  }
  else if (cart.length === 2)
  {
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[cart.length-1])[0]} at $${Object.values(cart[cart.length-1])[0]}.`)
  }
  else if (cart.length > 2){
    var string = `In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}`;
    for (var i = 1; i < (cart.length-1); i++) {
        string += `, ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`;
      }
    string += `, and ${Object.keys(cart[cart.length-1])[0]} at $${Object.values(cart[cart.length-1])[0]}.`;
    console.log(string)
  }
}

function total() {
  // write your code here
  var total = 0;
  if (Object.values(cart).length === 1){
    total += Object.values(cart[0])[0]
  } else {
    for (var i = 0; i < cart.length; i++){
        total += Object.values(cart[i])[0];
      }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      return cart.splice(i,1);
    }
  }
  console.log("That item is not in your cart.")

}

function placeOrder(cardNumber) {
  // write your code here
  debugger

  if ( cardNumber ){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  } else {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  
  }
}
