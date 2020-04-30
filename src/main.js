import data from './data/potter/potter.js';
import {
  filterData
} from "./data.js";

//Traer data a un const 

const datos = data;
// forEach para recorrer y traer cada uno de los datos
const pintarPersonajes = (personajes) => {
  document.getElementById("tarjetas").innerHTML = "";
  personajes.map(dato => {
    //Crear div contenedor , y luego colocar nombre de un id y class
    var newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'contenido');
    newDiv.setAttribute('class', 'contenido');

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

    //MODAL
    newDiv.addEventListener("click", () => {
      const divcontenedor = document.createElement("div");
      divcontenedor.setAttribute("id", "contenedorM");
      divcontenedor.setAttribute("class", "contenedorM");
      //modal
      const contenedorimg = document.createElement("div");
      contenedorimg.setAttribute("id", "contenedorimg");
      contenedorimg.setAttribute("class", "contenedorimg");
      divcontenedor.appendChild(contenedorimg)

      //foto de la casa
      const divModal = document.createElement("img");
      divModal.setAttribute("src", dato.houseImage);
      divModal.setAttribute("class", "modal")
      contenedorimg.appendChild(divModal)


      //foto personaje
      const foto = document.createElement("img");
      foto.setAttribute("src", dato.image);
      foto.setAttribute("class", "foto")
      contenedorimg.appendChild(foto);

      // Salir
      const span = document.createElement('span');
      span.setAttribute('id', 'close');
      span.setAttribute('class', 'close');
      span.innerHTML = '&times;';
      contenedorimg.appendChild(span)
      //  escritura P
      const parrafo = document.createElement('p');
      parrafo.setAttribute('id', 'parrafo');

      // llenando las caracterisiticas
      const arrayCaracteristicas = [
        `Nombre: ${dato.name}<br>
        Casa: ${dato.house}<br>
        Especie: ${dato.species}<br>
        Fecha de nacimiento: ${dato.dateOfBirth}<br>
        Ascendencia: ${dato.ancestry}<br>
        Color de ojos: ${dato.eyeColour}<br>
        Color de cabello: ${dato.hairColour}<br>
        Actor: ${dato.actor}`,
      ];
      parrafo.innerHTML = arrayCaracteristicas;
      contenedorimg.appendChild(parrafo)
      //mostrar en pantalla
      document.getElementById("tarjetas").appendChild(divcontenedor);
      //funcion cerrar y abrir modal
      divcontenedor.classList.add("contenedorMActivo");
      span.addEventListener('click', () => {
        divcontenedor.classList.remove("contenedorMActivo");
      })

    })
  })
}
//seleccionar casas
const selectCasas = document.getElementById("casas");

pintarPersonajes(datos)
selectCasas.addEventListener("change", () => {
  let guardarCasas = selectCasas.options[selectCasas.selectedIndex].text;
  let result = filterData(data, guardarCasas);
  pintarPersonajes(result)

  //  contenedorTarjetas.innerHTML =result;

});

//ocultar y mostrar
document.getElementById("portada").style.display = "block";
document.getElementById("pag2").style.display = "none";

const botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", siguiente);

function siguiente() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("pag2").style.display = "block";
}