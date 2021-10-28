const frutas = ['manzana', 'fresa', 'uva'];

// const otrasFrutas = frutas
const otrasFrutas = [...frutas]
otrasFrutas.push('mango');

console.log(frutas, otrasFrutas);
console.table({frutas, otrasFrutas});

//NOTACION -> PARA ROMPER LA RELACION UTILIZAS LOS TRES PUNTOS ...
//SI ES UN ARREGLO LO PONES DENTRO DE []
//SI ES UN OBJETO LO PONES DENTRO DE {}