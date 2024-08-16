
let BancDados = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Lara', age: 15 },
];

const getAllBancDados = () => {
  return BancDados.sort((a , b) => a.age - b.age );
}

const addUserBancDados = (name, age) =>{
  const id = BancDados.length + 1;
  BancDados.push({ id, name, age });
}

module.exports = { getAllBancDados, addUserBancDados };