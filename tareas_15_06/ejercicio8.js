//Escribe un programa que pida un número y diga si es divisible por 2(consola)
function divisiblePor ()
{
    let numero1 = parseInt(prompt("Agrega un numero"));
   
    if(numero1 % 2 === 0)
    {console.log (`el numero ${numero1} es divisible por 2`)};

    if(numero1 % 2 !== 0)
    {console.log (`el numero ${numero1} no es divisible por 2`)};
}

divisiblePor();