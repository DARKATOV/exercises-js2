// answers paper 
    
    // first part    

const jumbotron = document.querySelector("div.jumbotron");  // por que aqui no lleva numeral ??
const donate = document.querySelector("div.jumbotron .btn-primary");
const volunteer = document.querySelector("div.jumbotron .btn-secondary");

const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");  // por que tineen que ser ajuro constantes para pdoer cambair mas abajo los estilos 
const greenBtn = document.querySelector("#greenBtn");     

let colorPallets = [
    {
        jumbotron: '#588fbd', 
        donate: '#ffa500',    
        volunteer: 'black',
        volunteerText: 'white',  
    }, 
    {
        jumbotron: '#f0ad4e', 
        donate: '#5751fd',    
        volunteer: '#31b0d5',
        volunteerText: 'white',  
    }, 
    {
        jumbotron: '#87ca8a', 
        donate: 'black',    
        volunteer: '#8c9c08',
    },  
];

function changeColorStep1(pallet){
    jumbotron.style.backgroundColor = pallet.jumbotron;
    donate.style.backgroundColor = pallet.donate;
    volunteer.style.backgroundColor = pallet.volunteer;
    volunteer.style.color = pallet.volunteerText; 
};

blueBtn.addEventListener('click', () => changeColorStep1(colorPallets[0]));
orangeBtn.addEventListener('click', () => changeColorStep1(colorPallets[1]));
greenBtn.addEventListener('click', () => changeColorStep1(colorPallets[2]));


    // second part

const submit = document.querySelector("#submitBtn");
const inputEmail = document.querySelector("#exampleInputEmail1");
const inputName = document.querySelector("#example-text-input");
const inputDescription = document.querySelector("#exampleTextarea");

function formVerefication(event){
    event.preventDefault();
    alert("si");
};

submit.onclick = (event) => {}