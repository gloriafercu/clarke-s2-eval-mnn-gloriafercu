# Proyecto de evaluacion de Adalab del Sprint-2

El ejercicio consiste en desarrollar una página web con un juego de "Adivinar el número". Este juego consiste en que el juego genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. El juego le da pistas de si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final el jugador acierta el número. El juego tendrá las siguientes funcionalidades: 
* Generar un número aleatorio con la ayuda de Math.random y Math.ceil.
* Al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado").
* Actualizamos el contador de intentos cada que el usuario pruebe.
* Cuando el jugador acierte el número, aparece una sección para introducir su nombre y un botón para guardar en el histórico.
* Cuando el jugador escriba su nombre y pulse en guardar, almacenaremos el nombre del jugador y el número de intentos en una estructura de datos; recomendamos usar un objeto para almacenar la información de cada elemento del histórico (nombre e intentos).
* Una vez guardado en el histórico, automáticamente la sección de histórico se repinta para mostrar los nuevos datos
* Después de lo anterior, también automáticamente, se prepara el juego para una nueva partida
1. se oculta la sección para introducir el nombre
2. se genera un nuevo número aleatorio
3. se pone el contador de intentos a 0
4. se limpia el campo de feedback
5. se limpian los inputs
6. podremos jugar varias partidas y ver cómo se genera la información de históricoPero 
7. esta información se perderá al recargar la página
