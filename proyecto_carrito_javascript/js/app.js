const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    //cuando agregas un curso presionando "agregar"
  listaCursos.addEventListener('click', agregarCurso);

  //elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso);
  //muestra los cursos de local storage
  document.addEventListener('DOMContentLoaded',() => {articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
  || [];
  carritoHTML();
  })
  //vaciar carrito 
  vaciarCarritoBtn.addEventListener('click', () =>
  {articulosCarrito = []; 
  limpiarHTML(); //eliminamos todo el html
 })// reseteamos arreglo 
}

function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//elimina un curso del carrito funcion
function eliminarCurso(e) {
    console.log('desde eliminarCurso');
    if (e.target.classList.contains('borrar-curso')) {
      const cursoId = e.target.getAttribute('data-id');
  
      // Eliminar del arreglo de articulosCarrito por el data id
      articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
      carritoHTML(); // Iterar sobre el carrito y mostrar su html
    }
  }
  

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };

  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
      }
      return curso;
    });

    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  carritoHTML();
}

function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${imagen}" width="100"></td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
    `;

    contenedorCarrito.appendChild(row);
  });
  // sincronizar con storage 
  // agregar carrito de compra al storage
  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
function limpiarHTML() {
  contenedorCarrito.innerHTML = '';
}

