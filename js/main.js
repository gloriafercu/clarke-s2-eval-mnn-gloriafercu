'use strict';

// GENERAR NÚMERO ALEATORIO

var min = 0;
var max = 100;
function getRandomNumber (min,max) {
  return Math.ceil(Math.random()*(max-min+1)) + min;
}
var randomNumber = getRandomNumber (min,max);
// Invocamos función desde variable para generar número aleatorio entre 0-100 y me redondee a un nº entero
function stopRandomNumber () {
  clearTimeout(randomNumber);
}
// Para que solamente me genere un número y se pare la función
console.log("Número generado: " + randomNumber);

// CONTADOR DE INTENTOS

// Añade intentos
var counter = 0;
function addTry (){
  counter++;
  var numberTries = document.querySelector('.counterNumber');
  numberTries.innerHTML=counter;
}
// Reseteo de contador cuando has acertado
function resetCounter(){
  var counter = 0;
  var numberTries = document.querySelector('.counterNumber');
  numberTries.innerHTML=counter;
}

// PISTAS

var message = [{}]

// JUEGO: COMPARAR EL NÚMERO INTRODUCIDO CON EL NÚMERO GENERADO ALEATORIAMENTE
    // Si aciertas muestra en pistas que has acertado y se resetea contador de intentos.
    // Si no aciertas te muestra una pista y te aumenta en el contador el número de intentos y ademas se resetean los campos para introducir un nuevo número.
function compareToRandomNumber(userNumber){
  if (userNumber===randomNumber) {
    alert ('¡ENHORABUENA! ¡Has acertado!');
    resetCounter();
  } else if (userNumber < randomNumber) {
    alert ('¡ Lo siento :( !' +'\n'+ 'El número introdudido es DEMASIADO BAJO');
    addTry();
  } else {
    alert ('¡ Lo siento :( !' +'\n'+ 'El número introdudido es DEMASIADO ALTO');
    addTry();
  }
  var contentNumber = document.getElementById('number');
  contentNumber.value="";
}

// COMPROBAR QUE EL NÚMERO INTRODUCIDO POR EL USUARIO ES CORRECTO Y SE ENCUENTRA EN EL RANGO 0-100
    // Selecciono el número introducido por el usuario en el input mediante el value para comprobar si es correcto (0-100)
    // Selecciono el botón de Prueba y le añado el evento CLICK que me ejecuta la función checkNumber y comprueba si el número es correcto
    // Si es correcto empieza el juego (comparación del userNumber con randomNumber) sino sale un alert.

function checkNumber() {
  var userNumber = document.getElementById('number').value;
  userNumber = parseInt(userNumber);
  console.log("Número usuario: " + userNumber);

  if ((userNumber >= 0) && (userNumber <= 100) && (userNumber != "")) {
    compareToRandomNumber(userNumber);
  } else {
    alert('El número introducido por el usuario no es correcto' + '\n' + '¡Inténtalo de nuevo con un número del 0 al 100!');
  }
}
var buttonTry = document.querySelector('#try');
buttonTry.addEventListener('click', checkNumber);
