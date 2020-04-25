//Recover the date
let date = new Date();
date = date.toLocaleString('fr-FR');

//insert date
document.getElementById('date').textContent = date;


//URL for API
const url = 'https://blockchain.info/ticker';

//created a query
let requete = new XMLHttpRequest();
requete.open('GET',url); //first param is GET/POST, second is URL
requete.responseType = 'json'; //We want response in format Json
requete.send(); // We send the query

//as soon as we receive a response, we execute the function
requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE){

    }
}