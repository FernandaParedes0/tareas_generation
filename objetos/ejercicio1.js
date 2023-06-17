const persona = {
nombre : "Fernanda",
apellido : "Paredes",
edad : 25,
email : "fparedes@gmail.com",
direccion : "san jose maipú",

informacion: function () {
    
    console.log(`El nombre de la persona es ${this.nombre}, el apellido es ${this.apellido}, la edad es ${this.edad},su email es ${this.email}, su direccion es ${this.direccion}`)

}
}
persona.informacion()


