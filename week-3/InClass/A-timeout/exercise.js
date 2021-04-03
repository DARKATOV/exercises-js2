/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).


*/

const backgroundPage = document.querySelector('body');
// setTimeout(function () {
//     backgroundPage.style.backgroundColor = "red";
// },
// 5000
// );


/*Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const colors = ['yellow', 'blue', 'red', 'orange', 'green', 'white', 'tomato', 'grey', 'black'];
    let index = 0;
setInterval(function () {
    backgroundPage.style.backgroundColor = colors[index];
    index ++
    if (index === colors.length){
        index = 0;    
    }
},
1000
);

