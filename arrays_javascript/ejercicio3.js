/*Deberás crear un array para guardar los nombres de los meses del año , empezando por 0 para enero . Para comprobar el funcionamiento pide al usuario un número entre 0 y 11 y devuelve el nombre del mes del año . Se supone que el dato tecleado estará entre 0 y 11 ejemplo : Si tecleo el número 4 me deberá decir que el mes es mayo.*/

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let numMes = parseInt(prompt("Ingresa un numero entre 0 y 11;"));

if (numMes >= 0 && numMes <= 11)

{ let nombreMes = meses[numMes];
    console.log(`El mes del año es ${nombreMes}`);}

else 

{alert('Debe ingresar un numero entre 0 y 11')}