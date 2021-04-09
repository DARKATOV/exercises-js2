// Write your code here

const autoback = document.getElementById("autoback");
const back = document.getElementById("back");
const stopButton = document.getElementById("stop");
const forward = document.getElementById("forward");
const autoforward = document.getElementById("autoforward");
const img = document.getElementById("img");
const data = ['1.jpg','2.jpg','3.jpg','4.jpg'];
let counterImg = 0;

autoforward.addEventListener("click", autoNextImg);
forward.addEventListener("click", nextImg);
stopButton.addEventListener("click", stopAuto);
back.addEventListener("click", previousImg);
autoback.addEventListener("click", autoPreviousImg);

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

let intervalNext = -1;
let intervalPrevious = -1;

function autoNextImg(){
    clearInterval(intervalNext);
    clearInterval(intervalPrevious);
    intervalNext = setInterval(nextImg,1000);
}

function autoPreviousImg(){
    clearInterval(intervalNext);
    clearInterval(intervalPrevious);
    intervalPrevious = setInterval(previousImg,1000);
}

function stopAuto(){
    clearInterval(intervalNext);
    clearInterval(intervalPrevious);
}