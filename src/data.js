
export const filterData=(data,condition)=>{
  let house = data.filter((dato) => dato.house === condition);
  return house
};
