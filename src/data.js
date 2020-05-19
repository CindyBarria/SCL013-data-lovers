export const filterDataHouse = (data, condition) => {
  let house = data.filter((dato) => dato.house === condition);
  return house
};

export const filterDataEstudiante = (data) => {
  let estudiante = data.filter((dato) => dato.hogwartsStudent === true);
  return estudiante

};

export const filterDataProfesor = (data) => {
  let profesor = data.filter((dato) => dato.hogwartsStaff === true);
  return profesor

};
export const filterDataOtros = (data) => {
  let otros = data.filter((dato) => dato.hogwartsStaff === false && dato.hogwartsStudent === false);
  return otros

};

export const filterDataVarita = (data) => {
  let varita = data.filter((dato) => dato.wand.wood !== '' || dato.wand.core !== '' || dato.wand.length !== '');
  return varita

};

export const filterDataPatronus = (data) => {
  let patronus = data.filter((dato) => dato.patronus !== '');
  return patronus;
};

export const buscador = (data,nombre) => {
  return data.filter((dato) => dato.name.toLowerCase().includes(nombre) || dato.name.toUpperCase().includes(nombre) || dato.name.includes(nombre.charAt(0).toUpperCase()+nombre.slice(1).toLowerCase()));
}

export const orden = (data) =>  {
 let ordenName = data.sort((a, b) => { 
   if (a.name > b.name) {
   return 1;
  } else {
    return -1;
  }
 })
 return(ordenName)
}

