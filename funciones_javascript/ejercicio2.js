/*Escriba una función con el nombre de esVocal() que tome un carácter, devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.*/

function esVocal(caracter){
caracter= caracter.toLowerCase()
if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u")
{return true;}

else {return false;}
}

console.log(esVocal("I"));
