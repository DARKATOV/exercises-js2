/*
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats,
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns
all the restaurant names which have the required number of seats available at the moment.

2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
all the restaurant names serving this dish.

3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west),
and returns the number of restaurants in this area.
*/

let restaurant1 = {
    name: "Paesano",
    totalSeats: 10,
    numberOfCustomers: 8,
    address: {
      city: "Glasgow",
      area: "center",
    },
    menu: ["pizza", "calzone", "salad"],
  };
  
  let restaurant2 = {
    name: "Ubiquitous Chip",
    totalSeats: 20,
    numberOfCustomers: 10,
    address: {
      city: "Glasgow",
      area: "west",
    },
    menu: ["salad", "chocolate cake", "roast lamb"],
  };
  
  let restaurant3 = {
    name: "Monkeyz",
    totalSeats: 15,
    numberOfCustomers: 8,
    address: {
      city: "Glasgow",
      area: "center",
    },
    menu: ["stew", "chocolate cake", "panini"],
  };
  
  let restaurants = [restaurant1, restaurant2, restaurant3];
  
  
  /*
  DO NOT EDIT ANYTHING ABOVE THIS LINE
  WRITE YOUR CODE BELOW
  */
  
  let restaurantFinderApplication = {
    
    applicationName: "Restaurant Finder",
    applicationVersion: "1.0",
    restaurants: restaurants,
    findAvailableRestaurants: function (numberOfPeople) {
      const local = restaurants.filter( (restaurant) => 
          // return check.name // por que no me deja con check.name
          // propiedad de 'filter' subconjunto , con tu me devuelve los que cumplen 
          (restaurant.totalSeats-restaurant.numberOfCustomers)>=(numberOfPeople)
        )
      return local.map( x => x.name);
    
      
      // let tSeats = this.restaurants.totalSeats
      // let numpeoples = this.restaurants.filter ( x => (x.totalSeats - x.numberOfCustomers) >= numberOfPeople) // no puedo usar arrow functions aqui cierto ? 
      // return numpeoples  },
    // };
    //   let numpeoples = this.restaurants.filter( 
    //   function (check) {
    //   if ((check.totalSeats-check.numberOfCustomers)<=(numberOfPeople)){
    //     return check; }
    //   return numberOfPeople;
    //   })} ,

      // Complete here,
    
      findRestaurantServingDish: function (dish) {
          let plate = restaurants.filter( function(check) {
            if ((check.menu.includes(dish))) {
            // return check.name // por que no me deja con check.name, me devuelve object object 
            return check   
          } 
        }
      )  
      return plate.map( x => x.name) ; 
    },

    // findRestaurantServingDish: function (dishName) {
    //   let dishplate = this.restaurants.filter (x => x.menu === dishName ) 
    //   return dishplate  },
    //   // Complete here

    countNumberOfRestaurantsInArea: function (area) { 
      let plate = restaurants.filter( function(check) {
        if ((check.area.includes(center))) {
        // return check.name // por que no me deja con check.name, me devuelve object object 
        return check   
      } 
    }
  )  
  return plate.map( x => x.name) ; 
},
  }


    // countNumberOfRestaurantsInArea: function (area) {
    //   let restaurantInArea = this.restaurants.filter (x => area >= numberOfPeople ) 
    //   return restaurantInArea ; 
    // },


      // Complete here
  
  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
    5
  );
  console.log(
    `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
  );
  
  let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
    "salad"
  );
  console.log(
    `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
  );
  
  let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
    "center"
  );
  console.log(
    `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
  );