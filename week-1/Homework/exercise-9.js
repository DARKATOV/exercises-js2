/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays,
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have?
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];


var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};

var product3 = {
  id: 3,
  name: "Xbox360",
  price: 250,
  stock: 5
};

var product4 = {
  id: 4,
  name: "PS5",
  price: 300.53,
  stock: 50,                            // test with zero for step 6 
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);


var shoppingCart = {
  totalPrice: 0,
  selectedProducts: [],
};


// 3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
// the function will add the product to the selectedProduct list, and add the price to the totalPrice

function addToShoppingCart(id){
  products.forEach(productOfList => {
    if ( productOfList.id === id && productOfList.stock > 0 ){   // added the && condicion for step 6 
      shoppingCart.totalPrice = shoppingCart.totalPrice + productOfList.price;
      shoppingCart.selectedProducts.push(productOfList);
    }})

};


// 4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore


function removeFromShoppingCart(id){
  // console.log(products);
  shoppingCart.selectedProducts = shoppingCart.selectedProducts.filter(product => product.id !== id );
  // console.log(products);
};
//                  -.- el error era que estaba modificando products y no el carrito de compras :(

  //   let savePosition = products.forEach(product => {
//     if (product.id === id) {
//       let checkPosition = products.indexOf(product);
//       console.log(checkPosition);
//       console.log(products[checkPosition]);
//       return checkPosition;}
//     }
//     )
//   console.log(savePosition);
//   if (savePosition >= 0){
//     return products.splice(savePosition,1);}
// };




  //   const check = product => { product.id === id};
//   let checkProduct = products.forEach(check);
//   console.log(checkProduct);
//   // if ( checkProduct.length >=1){ }

// };


  //   // const toDelete = (deleteAct) => {deleteAct === id}
//   // let positionProduct =
//   let originalArray = products;
//   products.forEach(product => {
//     if (product.id === id) {
//       let checkPosition = products.indexOf(product);
//       console.log(checkPosition);
//       console.log(products[checkPosition]);
//       products = products.splice(checkPosition,1);
//   }
// }
// )
// };


// function deleteSkill (skill){
//   const toDelete = (deleteAct) => deleteAct === skill;
//   let positionSkill = this.skills.findIndex(toDelete);      // esto no se puede hacer como un array function ????
//   // console.log(positionSkill)                                // y por que
//   if (positionSkill >= 0) {
//     return this.skills.splice(positionSkill,1)
//   }
//   else {
//     return this.skills;
//   }};


// function removeFromShoppingCart(id){
//                                                   // console.log(products);
//   products.forEach(productOfList => {
//                                                     // console.log(productOfList);
//     if ( productOfList.id === id){
//       let tempProduct = productOfList.id;
//                                                      // let check = productOfList.(tempProduct)
//         if (products.forEach(product => products.id.include(id)===true)){
//         return productOfList.splice(check,1);
//       }
//     }
//   }
// )
// };


// 5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
// In addition will substract 1 in the product stock of bought products



function shop(){
  shoppingCart.totalPrice = 0;
  console.log(product4.stock);     // test 
  shoppingCart.selectedProducts.forEach( product => {
    product.stock = product.stock - 1;
  })
  shoppingCart.selectedProducts = [];
  console.log(product4.stock);     //test 
}

// 6. If there is not enough stock, the product cannot be added to the shopping cart
// */









//results



addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

console.log("");
console.log("");


addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

console.log("");
console.log("");


addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

console.log("");
console.log("");

removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

console.log("");
console.log("");

shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));