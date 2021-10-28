

//LENGTH   -> OBTENER CANTIDAD DE ELEMENTOS
//PUSH     -> PARA AGREGAR AL ULTIMO
//UNSHIFT  -> PARA AGREGAR AL INICIO
//POP      -> ELIMINAR EL ULTIMO ELEMENTO
//SPLICE   -> ELIMINAR VARIOS ELEMENTOS
//INDEXOF  -> BUSCAR UN ELEMENTO EN EL ARREGLO


let juegos = [
    'mario',
    'x-men',
    'killzone',
    'pacman'
]
console.log({ juegos });

juegos.push('avatar');
console.log(juegos);

juegos.unshift('pokemon');
console.log(juegos);

juegos.pop();
console.log(juegos);

let buscado = juegos.indexOf('pacman');
console.log(buscado);

let inicio = 2;
juegos.splice(inicio, 2);
console.log(juegos);

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});