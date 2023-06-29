/* 
Funcionalidades:
1. Recibir el valor de la nueva tarea por input text. El campo debe mostrar un placeholder de identificación.
2. Agregar la tarea a la lista al presionar un botón.
3. Listar las tareas en una lista ordenada y las nuevas tareas deben aparecer a medida se agregan.
4. Botón para borrar todas las tareas.
5. Desplegar un mensaje de advertencia si se presiona el botón de agregar tareas si el campo está vacío.
6. El input debe limpiarse al presionar el botón de agregar.
7. Estilos quedan a criterio del grupo.
 */


let addNewTask = document.getElementById('añadir');
let taskList = document.getElementById('lista-de-tareas');
let deleteTask = document.getElementById('borrar');
 


loadEventListener();
function loadEventListener () {
  
  //se añade evento al botón añadir
  addNewTask.addEventListener('click', addTask);

  //se añade evento al botón borrar
  deleteTask.addEventListener('click', delTask);


}

//función boton añadir
function addTask () {

  //Recibir el valor de la nueva tarea por input text.
  let writeTask = document.getElementById('escribirTarea').value;

  //Se crea la lista
  let newLi = document.createElement('li');

  //Se índica que el contenido de la lista proviene del input
  newLi.textContent = writeTask; 

  //Se agrega lo escrito al último índice de la lista
  taskList.appendChild(newLi);
  sincronizarStorage()
}

//agrega los elementos a local storage

function sincronizarStorage() {
  localStorage.setItem('writeTask', JSON.stringify(writeTask));
}

//funcion boton borrar
 function delTask() {


  // Elimina el primero "hijo" hasta que no quede ninguno :(, es decir, hasta que la condición se cumpla,
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);}
  
  
    
  /* innerHTML permite modificar el contenido HTML al dejarlo vacio elimina todo el contenido, 
  incluyendo etiquetas. No recomendable en códigos grandes. 

  taskList.innerHTML = '';

 */
}

