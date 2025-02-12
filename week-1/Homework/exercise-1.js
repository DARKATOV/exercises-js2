/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return `${kinningParkHouse.currentOwner.firstName} ${house.currentOwner.lastName}.`;  // sirve tanto llamando al objeto con house como llamandole directamente , solo que asi no respetaria el llamado de la funcion dentro del console log
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  // return `${house1.currentOwner.email}, ${house2.currentOwner.email}.`; salida como dos elementos separados 
  return [house1.currentOwner.email, house2.currentOwner.email];   // salida como un array 
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {

  if( house1.price < house2.price) {
    return house1.address ; 
  }
  else 
    return `${house2.address}.`;
// Math.min (house1.price,house2.price)    funcion para conseguir los minimos de numeros 

// let pricehouse = [house1.price,house2.price]
// let adresshouse = [house1.adrress,hose2.address]
// let print = pricehouse.slice()sort()               resultado de toño 
// index = pricehouse.indexOf(print[0])
// return addresshouses[index]



// function getCheapestAddress(house1, house2) {
//   let array =[house1,house2]
//   let result = array.sort((a,b)=> {return a.price-b.price})         // para x cantidad de casas 
//   return result[0].address;
// }



// function getCheapestAddress(house1, house2) {
//   if (house1.price<house2.price){                              //   mas simple para solo dos casas 
//     return house1.address;
//   }return house2.address;
// }

}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);












// let cheescakePlatano= { 
//   tamaños: function (size) {
//     if ( size === '20cm'){ return ' La chesscake de platano cuesta: 15 Euros';}
//     else if ( size >'30cm') {return 'La chesscake de platano cuesta: 100 Euros' }
//     else {return 'La chesscake de platano cuesta: 10 Euros' ; }}, };


// console.log(cheescakePlatano.tamaños('31cm'))