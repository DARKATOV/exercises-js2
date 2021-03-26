/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE

//1
let mentorsBCN = mentors.filter( function (person) { 
  if (person.job.city === "Barcelona"){ 
  return true ; 
}})
// console.log(mentorsBCN);
mentorsBCN.forEach(person => { console.log(`Hi, my name is ${person.firstName} ${person.lastName}. I work in Barcelona and i know React.`)});


// 2. To those that work in Barcelona, set "Jun1" in the class attribute, 
// and add a new skill to the list "SQL".
// To add elements in an array you can use .push()
// var animals = ["dog","cat"];
// animals.push("horse"); //["dog","cat","horse"]


// let barcelonaPeople = mentors.forEach.filter( people => {people === 'Barcelona'})

mentorsBCN.forEach(person => {person.class="Jun1"; person.skills.push("SQL")});
mentorsBCN.forEach(person => {console.log(person.class); console.log(person.skills)});


// 3. Create an object method with the name .addSkill() to be able to add skills from it
//y 
// 4. Create a function to add a skill to all members in a list of mentors

// function addSkill(mentors,newSkill){
//   //your code here
// }


console.log('');

function newSkill (skill){
  this.skills.push(skill);
};

mentors.forEach(person=>{person['addSkills'] = newSkill; 
person.addSkills('newElementAdded'); // una propiedad de un obeto puede tener dos dfunciones? osea dos metodos jutnos ? 
console.log(person.skills);
}
);

// function addSkill (newSkill){
//   this.skills.push(newSkill);  
// }
// console.log(mentors);
// var newSkillForObject = [];
// mentors.forEach( function newSkill (person){
//   console.log(person);
//   person.push(newSkillForObject);
//   console.log(person);
// })
// mentors.forEach(person => {
//   let newSkillForObject= 0; 
//   person.push(newSkillForObject); 
//  console.log(person)});
// mentors.forEach(person => {person.newSkillForObject.push(addSkill), console.log(person)});
// console.log();
// console.log(mentors.addSkill(3));


// 5. Create a function to remove a skill to all members in a list of mentors

// function removeSkill(mentors,newSkill){
//   //your code here
// }


console.log('');

// let propietyToRemove = "Node";


function deleteSkill (skill){
  const toDelete = (deleteAct) => deleteAct === skill;
  let positionSkill = this.skills.findIndex(toDelete);      // esto no se puede hacer como un array function ???? 
  // console.log(positionSkill)                                // y por que 
  if (positionSkill >= 0) {
    return this.skills.splice(positionSkill,1)
  }
  else {
    return this.skills;
  }};
  
  // if ( (this.skills.findIndex(deleteAccion => {
  //   if (deleteAccion === skill){
  //   return true;}
  //   else{  
  //   return false;} })) === true ) {
       
  //   }



// function deleteSkill (skill){
//   this.skills.findIndex(deleteAccion => {
//     if (deleteAccion === skill){
//     return this.skills[] === null;}
//     else{  
//     return deleteAccion;} 
// }
//   )}; 

  // this.skills.forEach( function (valueskill){
  // console.log(valueskill);
  // if (valueskill===skill){

  // this.skills.findIndex(delete { => delete = skill});
  // return
    
    // delete this.skills[skill];

    // let position = this.skill 
    // this.skills.splice();

    // console.log("yes");
    // let nothing = null;
    // console.log(nothing); 
    // valueskill=nothing;
    // console.log(valueskill);
  // }
  // else 
  // return valueskill;


  //   includes(skill)===true){
  // return this.skills[skill]= ""; 
  // }
// console.log(mentors);

let toRemove = "Node";
mentors.forEach(person => { person["removeSkills"]= deleteSkill; 
// console.log(person);
person.removeSkills(toRemove);
console.log(person.skills);
}); 



// 6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

console.log("");


function mentorWithMoreSkills(data) {
  // console.log(data);
  let max = 0; 
  let nameMax = [];
  let lengthOfMentors = data.length;
  // console.log(data.length);
  // console.log(data[0].skills);
  for (i = 0; i < lengthOfMentors ; i++) {
    if (max < data[i].skills.length){ 
      // console.log(data[i])
      max = data[i].skills.length;
      // console.log(max);
      // return max ;
    }    
  }
  data.forEach(people => { if (people.skills.length === max){
  nameMax.push(`${people.firstName} ${people.lastName}`);
  }})

return nameMax ;

};
  
  // mentors.forEach(person =>{
  //   let count = 0;
  //   let max = person.skill.length; 
  // })


// console.log(mentors[1]);
// console.log(mentors.length);

console.log(mentorWithMoreSkills(mentors));





// 7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes


// function mentorWithMoreSkills(data) {
//   // console.log(data);
//   let max = 0; 
//   let nameMax = [];
//   let lengthOfMentors = data.length;
//   // console.log(data.length);
//   // console.log(data[0].skills);
//   for (i = 0; i < lengthOfMentors ; i++) {
//     if (max < data[i].skills.length){ 
//       // console.log(data[i])
//       max = data[i].skills.length;
//       // console.log(max);
//       // return max ;
//     }    
//   }

// console.log(mentorWithMoreSkills(mentors));

function addLike (like){
  if (like === true ) {
    this.studentLikes ++; 
  }
};

mentors.forEach (person=>{person['addStudentLikes'] = addLike; 
person.addStudentLikes(true);  
console.log(person.studentLikes);
}
);


// 8. Create a function that adds a student like to all mentors in the array

console.log("");


let numberOfPersons = mentors.length;
mentors.forEach (person=>{
person.studentLikes = person.studentLikes + numberOfPersons; 
console.log(person.studentLikes);
}
);




// function addStudentLikes(mentors){
//   //your code here
// }
// */ 





