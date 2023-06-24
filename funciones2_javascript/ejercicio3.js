/*Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].*/

function funcionArrays(list1, list2) {
    let nuevoArray = [...list1, ...list2]
    let resultado = []
for (let i = 0; i < nuevoArray.length; i++)
{resultado.push(nuevoArray[i]*2)}

return resultado

}
let list1 = [4,2,6,1]
let list2 = [1,6,3]
console.log(funcionArrays(list1, list2))