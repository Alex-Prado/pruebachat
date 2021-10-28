function crearPersona(nombre, apellido) {
    return {
        // nombre: nombre,
        // apellido: apellido

        nombre,
        apellido
    }
}

//  se debe encerrar entre parentesis
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });


const dato = crearPersona2('Alex', 'Prado');
console.log(dato);

//ARGUMENTOS
function imprimeArgumentos() {
    console.log(arguments);
}

let imprimeArgumentos2 = (...arg) => {
    console.log(arg);
}


imprimeArgumentos2(14, 10, true, 'alex');


const tony = {
    nombre: 'tony stark',
    codeName: 'ironman',
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    'ultima-pelicula': 'Avengers',
}

// const imprimeDatos = (dato) => {
//     console.log(dato.nombre);
//     console.log(dato.codeName);
//     console.log(dato.edad);
// }

const imprimeDatos = ({nombre, codeName, edad = 15}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({edad});
}

imprimeDatos(tony);