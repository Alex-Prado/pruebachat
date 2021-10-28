//CONGELAR LOS OBJETOS        -> Object.freeze
//VALORES DE LOS OBJETOS      -> Object.values
//PROPIEDADES DE LOS OBJETOS  -> Object.getOwnPropertyNames
//ELIMINAR ALGUNA PROPIEDAD   -> Object.getOwnPropertyNames




//OBJETOS CON {} CORCHETES
const personaje = {
    nombre: 'tony stark',
    codeName: 'ironman',
    edad: 40,
    cords: {
        lat: 152142,
        long: 152021
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    'ultima-pelicula': 'Avengers',
}
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('coordenada lat', personaje.cords.lat);
console.log('trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);
console.log(personaje['ultima-pelicula']);

// MAS DETALLES
// ELIMINAR UNA PROPIEDAD O ELEMENTO
console.log(personaje);
delete personaje.edad
console.log(personaje);

personaje.casado = true;

const entriePares = Object.entries(personaje)

Object.freeze(personaje);
personaje.casado = false;
personaje.dinero = 1000210;

console.log(entriePares);

const propiedades = Object.getOwnPropertyNames(personaje);
const  valores     = Object.values(personaje);

console.log(propiedades, valores);