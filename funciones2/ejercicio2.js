/*Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false*/

function booleanoArray(numArray, numArray2) 

{
//agrupar arrays para que quede en una sola línea y crear una sola variable con estos datos
let nuevoBooleano = [...numArray, ...numArray2];
console.log(nuevoBooleano);

if (nuevoBooleano.length >= 10) {return true;} 
else {return false;}
}


let numArray = [1,6,24,10,23,9,7];
let numArray2 = [13,5,8];

console.log(booleanoArray(numArray,numArray2))