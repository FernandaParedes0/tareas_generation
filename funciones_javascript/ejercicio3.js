/*Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx».*/

function generar_caracteres(caracter,n)

{return caracter.repeat(n);}
  
console.log(generar_caracteres("R",10)) 