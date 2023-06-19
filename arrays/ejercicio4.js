/* Diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.
     ejemplo : Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14*/
    
 function sumaLista(ejercicio) {
 let suma = 0;
      
        for (let i = 0; i < ejercicio.length; i++) {
          suma += ejercicio[i];
        }
      
        return suma;
      }

let numeros = [1, 7, 2, 1, 2];
let resultado = sumaLista(numeros);
console.log(resultado);