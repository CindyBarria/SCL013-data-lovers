import data from './data/potter/potter.js';
import {
  filterDataHouse,
  filterDataEstudiante,
  filterDataProfesor,
  filterDataVarita,
  filterDataPatronus,
  filterDataOtros
} from "./data.js";

//Traer data a un const 
const datos = data;
// Map para recorrer y traer cada uno de los datos
const pintarPersonajes = (personajes) => {
  document.getElementById("tarjetas").innerHTML = "";
  document.getElementById("varitas").innerHTML = "";
  document.getElementById("mostrarPatronus").innerHTML = "";
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
    const divImgPersonajes = document.createElement("div");
    divImgPersonajes.setAttribute("id", "divimgPersonajes");
    newDiv.appendChild(divImgPersonajes)
    const imagenPersonaje = document.createElement('img');
    imagenPersonaje.setAttribute('src', dato.image);
    imagenPersonaje.setAttribute('class', 'imagePersonaje');
    //console.log(imagenPersonaje)
    divImgPersonajes.appendChild(imagenPersonaje)
    // para que se visualice en el id de la segunda pagina
    document.getElementById("tarjetas").appendChild(newDiv)

    //MODAL
    newDiv.addEventListener("click", () => {
      const divcontenedor = document.createElement("div");
      divcontenedor.setAttribute("id", "contenedorM");
      divcontenedor.setAttribute("class", "contenedorM");
      //modal imagen
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
//Varitas 
const pintarVaritas = (varitaPersonaje) => {
  varitaPersonaje.map(dato => {
    const varitaPersonaje = document.getElementById("varita");
    varitaPersonaje.addEventListener('click', () => {

      document.getElementById("tarjetas").innerHTML = "";
      document.getElementById("mostrarPatronus").innerHTML = "";


      const divVarita = document.createElement("div");
      divVarita.setAttribute("id", "contenedorVarita");
      divVarita.setAttribute("class", "contenedorVarita");
      const varitas = document.createElement('p');
      varitas.setAttribute('class', 'varitas');
      varitas.innerHTML = `Madera: ${dato.wand.wood}<br>
      <br>Nucleo: ${dato.wand.core}<br> 
      <br>Largo: ${dato.wand.length}<br>
      <br>Portador: ${dato.name}`;
      divVarita.appendChild(varitas)
      const divImgVaritas = document.createElement("div");
      divImgVaritas.setAttribute("id", "divimgVaritas");
      divVarita.appendChild(divImgVaritas)
      const varitaImagen = document.createElement("img");
      varitaImagen.setAttribute("src", dato.wandImage);
      varitaImagen.setAttribute("id", "imagenVarita")
      divImgVaritas.appendChild(varitaImagen);

      document.getElementById("varitas").appendChild(divVarita);

    })
  })
}

//pintar patronus 
const pintarPatronus = (patronusPersonaje) => {
  patronusPersonaje.map(dato => {
    const patronusPersonaje = document.getElementById("patronus");
    patronusPersonaje.addEventListener('click', () => {
      document.getElementById("tarjetas").innerHTML = "";
      document.getElementById("varitas").innerHTML = "";

      const divPatronus = document.createElement("div");
      divPatronus.setAttribute("id", "contenedorPatronus");
      divPatronus.setAttribute("class", "contenedorPatronus");
      const patronus = document.createElement('p');
      patronus.setAttribute('class', 'patronusP');
      patronus.innerHTML = ` Patronus : ${dato.patronus}<br> 
      <br>Creador: ${dato.name}`;
      divPatronus.appendChild(patronus);
      const divImagenPatronus = document.createElement("div");
      divImagenPatronus.setAttribute("id", "contenedorImagen");
      divPatronus.appendChild(divImagenPatronus);
      const imagenPatronus = document.createElement("img");
      imagenPatronus.setAttribute("src", dato.patronusImage)
      imagenPatronus.setAttribute("id", "imagenPatronus");
      divImagenPatronus.appendChild(imagenPatronus);

      document.getElementById("mostrarPatronus").appendChild(divPatronus);

    })
  })
}

//seleccionar casas

pintarPersonajes(datos)

const selectGry = document.getElementById("Gryffindor");
selectGry.addEventListener("click", (event) => {
  let resultGry = filterDataHouse(data, "Gryffindor");
  event.preventDefault();
  pintarPersonajes(resultGry)

});
const selectSly = document.getElementById("Slytherin");
selectSly.addEventListener("click", (event) => {
  //let guardarCasas = selectCasas.options[selectCasas.selectedIndex].text;
  let resultSly = filterDataHouse(data, "Slytherin");
  event.preventDefault();
  pintarPersonajes(resultSly)

});
const selectHuff = document.getElementById("Hufflepuff");
selectHuff.addEventListener("click", (event) => {
  //let guardarCasas = selectCasas.options[selectCasas.selectedIndex].text;
  let resultHuff = filterDataHouse(data, "Hufflepuff");
  event.preventDefault();
  pintarPersonajes(resultHuff)

});
const selectRev = document.getElementById("Ravenclaw");
selectRev.addEventListener("click", (event) => {
  //let guardarCasas = selectCasas.options[selectCasas.selectedIndex].text;
  let resultRev = filterDataHouse(data, "Ravenclaw");
  event.preventDefault();
  pintarPersonajes(resultRev)

});
const selectAll = document.getElementById("Todos");
selectAll.addEventListener("click", (event) => {
  document.getElementById("rol").style.display = "block";
  document.getElementById("ordenar").style.display = "block";
  document.getElementById("encabezadoPersonajes").style.display = "block";
  document.getElementById("encabezadoVaritas").style.display = "none";
  document.getElementById("encabezadoPatronus").style.display = "none";
  event.preventDefault();
  pintarPersonajes(datos)

});

//seleccionar Rol
const selectRol = document.getElementById("rol");
selectRol.addEventListener("change", () => {
  let guardarRol = selectRol.options[selectRol.selectedIndex].value;
  let resultEstudiante = filterDataEstudiante(data, guardarRol);
  let resultProfesor = filterDataProfesor(data, guardarRol);
  let resultOtros=filterDataOtros(data , guardarRol);

  if (guardarRol === "alumnos") {
    pintarPersonajes(resultEstudiante)
  } 
  if (guardarRol === "profesor") {
    pintarPersonajes(resultProfesor)
  } else if (guardarRol==="otros"){
    pintarPersonajes(resultOtros)
  }

})

//filter patronus
let resultadoPatronus = filterDataPatronus(data);
pintarPatronus(resultadoPatronus);
//filter Varitas
let resultVarita = filterDataVarita(data);
pintarVaritas(resultVarita)

//ORDEN
let ordenar = document.getElementById("ordenar");
ordenar.addEventListener("change", () => {
  let guardarOrden = ordenar.options[ordenar.selectedIndex].value;
  if (guardarOrden === "a") {
    const ascendente = (datos.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1
      }
      return 0

    }));
    pintarPersonajes(ascendente)

  } else if (guardarOrden === "d") {
    const descendente = (datos.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1
      }
      return 0

    }));
    pintarPersonajes(descendente)
  }

})

//ocultar y mostrar
document.getElementById("portada").style.display = "block";
document.getElementById("pag2").style.display = "none";
document.getElementById("encabezadoVaritas").style.display = "none";
document.getElementById("encabezadoPatronus").style.display = "none";

const botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", siguiente);

function siguiente() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("pag2").style.display = "block";
}

const varitaBoton = document.getElementById("varita");
varitaBoton.addEventListener("click", cambiarVarita);

function cambiarVarita() {
  document.getElementById("rol").style.display = "none";
  document.getElementById("ordenar").style.display = "none";
  document.getElementById("encabezadoPersonajes").style.display = "none";
  document.getElementById("encabezadoPatronus").style.display = "none";
  document.getElementById("encabezadoVaritas").style.display = "block";
}

const patronusBoton = document.getElementById("patronus");
patronusBoton.addEventListener("click", cambiarPatronus);

function cambiarPatronus() {
  document.getElementById("rol").style.display = "none";
  document.getElementById("ordenar").style.display = "none";
  document.getElementById("encabezadoPersonajes").style.display = "none";
  document.getElementById("encabezadoVaritas").style.display = "none";
  document.getElementById("encabezadoPatronus").style.display = "block";
}