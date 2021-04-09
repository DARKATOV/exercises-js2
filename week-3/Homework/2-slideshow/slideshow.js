// Write your code here

const back = document.getElementById("back");
const forward = document.getElementById("forward");
const img = document.getElementById("img");
const data = ['1.jpg','2.jpg','3.jpg','4.jpg'];
let counterImg = 0;

forward.addEventListener("click", nextImg);
back.addEventListener("click", previousImg);

function nextImg(){
    if ( counterImg <= data.length-2 ){
        img.style.backgroundImage = `url(${data[counterImg+1]})`;
        counterImg ++;
        return counterImg;
    }else{
        img.style.backgroundImage = `url(${data[0]})`;
        return counterImg = 0;
    }
};

function previousImg(){

    if ( counterImg > 0 ){
        img.style.backgroundImage = `url(${data[counterImg-1]})`;
        return counterImg --;
    }
    else{
        img.style.backgroundImage = `url(${data[data.length-1]})`;
        return counterImg = data.length-1;
    }
};
