/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person = {
    name: "Alice",
    friends: ["John", "Nina"],
  };
    
// person.friends [2]='Bob';
// console.log(person.friends);

function personmakeFriend (newFriend){
  person.friends[person.friends.length] = newFriend;
}

  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  personmakeFriend('Bob'); // aqui tenia un punto no entiendo la razon , pero no me dejaba colocarlo asi en la funcion 
  
  console.log(
    `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
  );