/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person = {
    name: "Alice",
    friends: ["John", "Nina"],
    makeFriend: function (newFriend){                            //    una forma mas sencilla con el push 
      this.friends.push(newFriend);   
      // this.friends[person.friends.length] = newFriend;      //  mi manera con el leght 
    }

    // makeFriend : function(params) {
    //   this.friends = this.friends.concat (params);    //  solucion de toño , .concat 
    //   return this.friends;
    // }

  };
    
// person.friends [2]='Bob';
// console.log(person.friends);



// function personmakeFriend (newFriend){
//   person.friends[person.friends.length] = newFriend;
// }

  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  person.makeFriend('Bob'); // aqui tenia un punto no entiendo la razon , pero no me dejaba colocarlo asi en la funcion 
  
  console.log(
    `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
  );