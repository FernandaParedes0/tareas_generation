const valorProducto =

{precio: 3000,
descuento: 0.10,
neto: function ()

{const descuento = (this.precio - (this.precio * this.descuento));
console.log(`el precio final con descuento es ${descuento}`)}}

valorProducto.neto()