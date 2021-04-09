/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/

document.getElementById(`submitButton`).addEventListener('click', event =>{
    event.preventDefault();
    console.log(`submitButton`);
    const latitud = document.getElementById('lati').value;
    const longitud = document.getElementById('longi').value;
    if (longitud.length > 0 && latitud.length > 0) {
    let check1 = isNaN(longitud); 
    let check2 = isNaN(latitud)
    if (check1 == false && check2 == false) {
    const url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitud}&lon=${longitud}`;
    console.log(url);
    fetch(url)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        const h3 = document.createElement('h3');
        h3.textContent = data.main.temp;
        document.querySelector(`body`).appendChild(h3);
    });
    } else {
    alert("Ingrese un valor valido")
    }} else {
        alert("Ingrese un valor valido")
        // const h4 = document.createElement('h4');
        // h4.textContent = `Ingese un valor correcto`;
        // document.querySelector('body').appendChild(h4);
        // console.log(h4);
    }

});

