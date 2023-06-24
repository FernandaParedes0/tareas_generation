/*Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos. Si son iguales, devolver un String «Los números son iguales».*/
function numeroMayor(a,b,c) {
    
    if (a > b && a > c)
    {return a;}

    else if (b > a && b > c)
    {return b;}

    else if (c > a && c > b)
    {return c;}

    else { (a === b === c)
        return "Los números son iguales";
      }}

console.log(numeroMayor(7,10,7))
console.log(numeroMayor(7, 7, 7));