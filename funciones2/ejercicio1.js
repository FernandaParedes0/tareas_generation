/*Ejercicio #5 Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.*/

function multiplicarArreglo(numerosArray) {
   //spread operator 
    let menor = Math.min(...numerosArray);
    let mayor = Math.max(...numerosArray);
 // retornar operacion mayor por menor
    return menor * mayor;
}

let numerosArray = [2, 5, 8, 10, 24, 2, 6] 
console.log(multiplicarArreglo(numerosArray))
