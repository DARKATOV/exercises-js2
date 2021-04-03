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

blueBtn.addEventListener('click', () => changeColorStep1(colorPallets[0]));     //  porque no me devuelve al inicio de la pagina ? sin usar prevenTDefault 
orangeBtn.addEventListener('click', () => changeColorStep1(colorPallets[1]));
greenBtn.addEventListener('click', () => changeColorStep1(colorPallets[2]));


    // second part
                
const submitBtn = document.querySelector("#submitBtn");                           
let inputEmail = document.querySelector("#exampleInputEmail1");
let inputName = document.querySelector("#example-text-input");
let inputDescription = document.querySelector("#exampleTextarea");

// console.log(inputEmail.values);
// console.log(inputEmail);
                                               // que es ARIA like aria-describedby= "emailHelp"; con el mismo formato de un id o class 

submitBtn.onclick = (eventClick) => {
    eventClick.preventDefault();              // el preventDefault me lleva a la condicion previa al click ? 
    inputEmail.style.backgroundColor = "white";
    inputName.style.backgroundColor = "white";
    inputDescription.style.backgroundColor = "white";
    if (inputEmail.value.includes("@") && inputEmail.value.length > 6 ){
        if ( inputName.value.length >=5){
            if ( inputDescription.value.length >= 15){
                inputEmail.value = "";
                inputName.value = "";
                inputDescription.value = "";
                alert('Thank you for filling out the form :D');
                return;
            }
            else 
                inputDescription.value = "";
                inputDescription.style.backgroundColor = "red"
                alert('Thank you for filling out the form :D, but your description can be longer');
                return;
        }
        else if ( inputDescription.value.length >= 15){
            inputName.value = "";
            inputName.style.backgroundColor = "red";
            alert('Thank you for filling out the form :D, but your name is very short');
            return;
        }
        else
            inputName.value = "";
            inputName.style.backgroundColor = "red"; 
            inputDescription.value = "";
            inputDescription.style.backgroundColor = "red"
            alert('Thank you for filling out the form :D, but your name is very short and your description can be longer');
            return;
    }

    else if ( inputName.value.length >=5) {
        if ( inputDescription.value.length >= 15){
            inputEmail.value = "";
            inputEmail.style.backgroundColor = 'red';
            alert('Thank you for filling out the form :D, but you inserted an invalid value to email address');
            return;
        }
        else 
            inputEmail.value = "";
            inputEmail.style.backgroundColor = 'red';
            inputDescription.value = "";
            inputDescription.style.backgroundColor = "red"
            alert('Thank you for filling out the form :D, but you inserted an invalid value to email address and your description can be longer');
            return;
    }
    else if ( inputDescription.value.length >= 15){
        inputName.value = "";
        inputName.style.backgroundColor = "red";
        inputEmail.value = "";
        inputEmail.style.backgroundColor = 'red';
        alert('Thank you for filling out the form :D, but you inserted an invalid value to email address and your name is very short ');
        return;
    }
    else {
        inputName.value = "";
        inputName.style.backgroundColor = "red"; 
        inputEmail.value = "";
        inputEmail.style.backgroundColor = 'red';
        inputDescription.value = "";
        inputDescription.style.backgroundColor = "red"    
        alert('Thank you for filling out the form :D, but all it´s bad. You inserted an invalid value to email address, your name is very short and your description can be longer ');
        return; }
};

    // if ( inputEmail.value.includes(condition1) && inputEmail.value.length > 6 ){
    //     if ( inputName.value.length >=5){
    //         if ( inputDescription.value.length >= 15){
    //             alert('Thank you for filling out the form :D');
    //         }
    //     }
    // }
    // else if (inputName.value.length >=5) {
    //     if ( inputDescription.value.length >= 15){   
    //         alert('Thank you for filling out the form, but you did not enter a valid value like as an email address');
    //     } 
    //     else  alert('Thank you for filling out the form, but you did not enter a valid value like as an email address and your name is very short');
    // }
    // else if ( inputDescription.value.length >= 15){
    //     alert('Thank you for filling out the form, but you have an error in the first and second entry');
    // }
    
    // else alert('no');

// console.log(inputEmail.includes(condition1));