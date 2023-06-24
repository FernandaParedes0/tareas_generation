const alumno = {
nombre : "fernanda",
edad : 25,
materia :{
 ingles: 4,
 programacion: 5,
 html: 6,
},
promedioNotas:function () {const promedio = ((this.materia.ingles + this.materia.programacion + this.materia.html) / 3);
console.log(`El promedio de ${this.nombre} es ${promedio}`);}
}

alumno.promedioNotas();


