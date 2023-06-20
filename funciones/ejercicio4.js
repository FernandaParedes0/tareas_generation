/*Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.
ej [1,2,3,4] = longitud = 4*/

function sumaArreglo(numeros) {
    let sumar = 0;
    for (let i = 0; i < numeros.length; i++)
    {sumar += numeros[i];}
    
    console.log(`esta es la suma de los numeros : ${sumar} y este es el largo : ${numeros.length}`);
    return sumar;}
  
  let numeros = [10, 5, 10, 15, 52];
  console.log(sumaArreglo(numeros));