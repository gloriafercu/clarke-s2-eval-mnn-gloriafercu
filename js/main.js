'use strict';

// GENERAR NÚMERO ALEATORIO

/* Invocamos función desde variable para generar número aleatorio entre 0-100 y me redondee a un nº entero, después del return se para la ejecución del número aleatorio.
 */

var min = 0;
var max = 100;
function getRandomNumber (min,max) {
  return Math.ceil(Math.random()*(max-min+1)) + min;
}
var randomNumber = getRandomNumber(min,max);
console.log("Número generado: " + randomNumber);


// CONTADOR DE INTENTOS
var counter = 0;
var triesHistoric = 0;

// Reseteo de contador cuando has acertado y actualizo el html del marcador
function resetCounter() {
  counter = 0;
  var numberTries = document.querySelector('.counterNumber');
  numberTries.innerHTML=counter;
}

// RESETEAR NOMBRE Y OCULTAR INPUT name
function resetName() {
  document.querySelector('#name').value= "";
  document.querySelector('.saveName').classList.add('opacityZero');
}

// RECARGAR EL JUEGO
function rePlay(){
  randomNumber = getRandomNumber(min,max);
  console.log("Número generado: " + randomNumber);
  document.querySelector('.textClue').style.color= 'blue';
  document.querySelector('.textClue').innerHTML= messageClue[3];
}

// GUARDAR NOMBRE y Nº INTENTOS EN HISTÓRICO
var buttonSave = document.querySelector('#save');
buttonSave.addEventListener('click', updateHistoric);

function updateHistoric() {
  var inputName = document.querySelector('#name').value;
  triesHistoric = counter + 1;
  document.querySelector('.record').innerHTML += '<li>' + inputName +
  ': '+ triesHistoric + ' intentos</li>';
  resetCounter();
  resetName();
  rePlay();
}

/* JUEGO: COMPARAR EL NÚMERO INTRODUCIDO CON EL NÚMERO GENERADO ALEATORIAMENTE

 Si aciertas muestra en pistas que has acertado, sale un campo nuevo para guardar tu nombre, se lanzan al histórico tu nombrey y el número de intentos y finalmente se resetea contador de intentos.

 Si no aciertas te muestra una pista y te aumenta en el contador el número de intentos y ademas se resetean los campos para introducir un nuevo número.
*/

var messageClue = [
  '¡ENHORABUENA! ¡Has acertado! :D',
  '¡Lo siento! El número introducido es DEMASIADO BAJO :(',
  '¡Lo siento! El número introducido es DEMASIADO ALTO :(',
  'Escribe un número y dale a Prueba'
];
function compareToRandomNumber(userNumber){

  if (userNumber===randomNumber) {
    document.querySelector('.textClue').style.color= 'green';
    document.querySelector('.textClue').innerHTML= messageClue[0];
    document.querySelector('.saveName').classList.remove('opacityZero');
  } else if (userNumber < randomNumber) {
    document.querySelector('.textClue').style.color= 'red';
    document.querySelector('.textClue').innerHTML= messageClue[1];
    counter++;
  } else {
    document.querySelector('.textClue').style.color= 'red';
    document.querySelector('.textClue').innerHTML= messageClue[2];
    counter++;
  }
  // Resetea campo number
  var contentNumber = document.getElementById('number');
  contentNumber.value="";

  // Actualiza el marcador
  var numberErrors = document.querySelector('.counterNumber');
  numberErrors.innerHTML=counter;
}

/* COMPROBAR QUE EL NÚMERO INTRODUCIDO POR EL USUARIO ES CORRECTO Y SE ENCUENTRA EN EL RANGO 0-100

Selecciono el número introducido por el usuario en el input mediante el value para comprobar si es correcto (0-100)

Selecciono el botón de Prueba y le añado el evento CLICK que me ejecuta la función checkNumber y comprueba si el número es correcto.

Si es correcto empieza el juego (comparación del userNumber con randomNumber) sino sale un alert.

 */

function checkNumber() {
  var userNumber = document.getElementById('number').value;
  userNumber = parseInt(userNumber);
  console.log("Número usuario: " + userNumber);

  if ((userNumber >= 0) && (userNumber <= 100)) {
    compareToRandomNumber(userNumber);
  } else {
    alert('El número introducido por el usuario NO ES CORRECTO' + '\n' + '¡Inténtalo de nuevo con un número del 0 al 100!');
  }
}
var buttonTry = document.querySelector('#try');
buttonTry.addEventListener('click', checkNumber);
