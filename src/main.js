//import {example} from './data.js';
//import data from './data/potter/potter.js';
//console.log(example, data);

import data from './data/potter/potter.js';

console.log(data);
const datos= data;

datos.forEach(dato =>{
//Para nombre personaje
var newDiv= document.createElement("div");
newDiv.setAttribute('id', 'contenido');
newDiv.setAttribute('class', 'contenido');
//console.log(newDiv)

const personaje = document.createElement('p');
personaje.setAttribute('class', 'nombre');
personaje.innerHTML = dato.name;
//console.log(divNombrePersonaje)
newDiv.appendChild(personaje)
// PARA LA IMAGEN
const imagenPersonaje = document.createElement('img');
imagenPersonaje.setAttribute('src', dato.image);
imagenPersonaje.setAttribute('class', 'imagePersonaje');
//console.log(imagenPersonaje)
personaje.appendChild(imagenPersonaje)
var currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv); 
        })

//Esconder y mostrar pagina
document.getElementById("portada").style.display = "block";
document.getElementById("pag2").style.display = "none";

const botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", siguiente);

function siguiente() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("pag2").style.display = "block";
}
