import data from './data/potter/potter.js';
//Traer data a un const 
console.log(data);
const datos= data;
// forEach para recorrer y traer cada uno de los datos
datos.forEach(dato =>{
//Crear div contenedor , y luego colocar nombre de un id y class
var newDiv= document.createElement("div");
newDiv.setAttribute('id', 'contenido');
newDiv.setAttribute('class', 'contenido');
console.log(dato)
//traer dato del nombre del personaje y colocar el ombre de una clase
const personaje = document.createElement('p');
personaje.setAttribute('class', 'nombre');
personaje.innerHTML = dato.name;
//console.log(divNombrePersonaje)
newDiv.appendChild(personaje)
// Traer imagen crear etiqueta img 
const imagenPersonaje = document.createElement('img');
imagenPersonaje.setAttribute('src', dato.image);
imagenPersonaje.setAttribute('class', 'imagePersonaje');
//console.log(imagenPersonaje)
personaje.appendChild(imagenPersonaje)
// para que se visualice en el id de la segunda pagina
document.getElementById("tarjetas").appendChild(newDiv)
//primer div modal contenedor
newDiv.addEventListener("click",() =>{
  const divcontenedor = document.createElement("div");
  divcontenedor.setAttribute("id","contenedorM");
  divcontenedor.setAttribute("class","contenedorM");
//modal
  const divModal = document.createElement("div");
  divModal.setAttribute("id","modal");
  divModal.setAttribute("class","modal");
  divcontenedor.appendChild(divModal)

  console.log(divcontenedor)

// Salir
const span = document.createElement('span');
span.setAttribute('id', 'close');
span.setAttribute('class', 'close');
span.innerHTML = '&times;';
divModal.appendChild(span)
//  escritura P
const parrafo = document.createElement('p');
parrafo.setAttribute('id', 'parrafo');

// llenando las caracterisiticas
const arrayCaracteristicas = [
  `Nombre:${dato.name}<br>
  Casa: ${dato.house}<br>
  Especie: ${dato.species}<br>
  Fecha de nacimiento: ${dato.dateOfBirth}<br>
  Ascendencia: ${dato.ancestry}<br>
  Color de ojos: ${dato.eyeColour}<br>
  Color de cabello: ${dato.hairColour}<br>
  Actor: ${dato.actor}`,
];
parrafo.innerHTML = arrayCaracteristicas;
divModal.appendChild(parrafo)
//mostrar en pantalla
document.getElementById("tarjetas").appendChild(divcontenedor);
//funcion cerrar y abrir modal
divcontenedor.classList.add("contenedorMActivo");
span.addEventListener('click', () =>{
divcontenedor.classList.remove("contenedorMActivo");
})

})
})



//ocultar y mostrar
document.getElementById("portada").style.display = "block";
document.getElementById("pag2").style.display = "none";

const botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", siguiente);

function siguiente() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("pag2").style.display = "block";
}