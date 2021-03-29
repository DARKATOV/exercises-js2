/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach(people => {
  let content = document.querySelector("#content");
  let paragraph = document.createElement("p"); 
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  content.appendChild(paragraph);
  h1.textContent = people.name;
  paragraph.appendChild(h1);
  h2.textContent = people.job;
  paragraph.appendChild(h2); 
  });}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {

  let content = document.querySelector("#content");
  let paragraph = document.createElement("p");
  let listObjects = document.createElement("ul");
  
  content.appendChild(paragraph);
  paragraph.appendChild(listObjects);
    // objectInlist.innerHTML = article;
    // objectInlist.innerHTML = "<li>article</li>";
    for (let index = 0; index < shopping.length; index++) {
      let objectInlist = document.createElement("li");
      listObjects.appendChild(objectInlist);
      // console.log(shopping.length);
      // console.log(index);
      objectInlist.textContent = shopping[index]; 
      // objectInlist.textContent = shopping[index] ;
      // beforebegin
      // objectInlist.insertAdjacentText("afterend",shopping[index]);
      // objectInlist.insertAdjacentText("beforeend",shopping[index]);
      // objectInlist.insertAdjacentText("afterbegin",shopping[index]);
      // objectInlist.appendChild(shopping[index]);
  }};
  //Write your code in here


    //I'd like to display my three favorite books inside a nice webpage!

    // const books = [
    //     {
    //         title: "The Design of Everyday Things",
    //         author: "Don Norman",
    //         alreadyRead: false
    //     },
    //     {
    //         title: "The Most Human Human",
    //         author: "Brian Christian",
    //         alreadyRead: true
    //     },
    //     {
    //         title: "The Pragmatic Programmer",
    //         author: "Andrew Hunt",
    //         alreadyRead: true
    //     }
    // ];
 


    /*Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
  

function exerciseThree(books) {
  let h1 = document.createElement("h1");
  h1.textContent = "BookList";
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.appendChild(h1);
  content.appendChild(ul);
  let img1 = "./img/descarga.jpg";
  let img2 = "./img/descarga2.jpg ";
  let img3 = "./img/descarga3.jpg ";
  let imgs = [img1,img2,img3];
  ul.style.listStyle = "none";      // cambio de valores en style de ul directamente asignando un valor 
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  ul.style.padding = "20px";
  books.forEach((book,index) => {      // doble indice para la iteracion 
    // declarar objetos  
    let paragraph = document.createElement("p");
    let li = document.createElement("li");
    let img = document.createElement("img");
    //cambiar valores 
    paragraph.textContent = `${book.title} - ${book.author} `;
    img.src = imgs[index]; // condicion comentada por Jaider // no entendida 
    li.style.margin = "15px";
    li.style.padding = "10px";
    li.style.minWidth = "350px";     // modificacion de class con class creada en style 
    li.id = `li-${index}`;        // modificacion de id 
    // imgs[index].style.display =block;
    // img.style.marginLeft = auto;
    // img.style.marginRight = auto;             // por que no puedo modificar estos valores sin cargarme la pagina 
    // img.style.width = "50%";  
     
    // if (book.alreadyRead){
    //   li.style.backgroundColor = "green";
    // } else {
    //   li.style.backgroundColor = "red";
    // }
    li.style.backgroundColor = book.alreadyRead ? "green" : "red"; 
    // li.className = book.alreadyRead ? "read" : "unread";
    // appends 
    ul.appendChild(li);
    li.appendChild(paragraph); 
    li.appendChild(img);
  });
  //Write your code in here
};










//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
