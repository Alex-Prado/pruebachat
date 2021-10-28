// FUNCIONES NORMALES
function saludo(nombre) {
    console.log('hola ' + nombre);
}

// var saludo = 123

//FUNCION ANONIMA
const saludar = function (nombre) {
    console.log('hola ' + nombre);
}

//FUNCION DE FLECHA O LAMBDA
const saludos = (nombre) => {
    console.log('Hola ' + nombre);
}


saludo('Alex')
saludar('Alex Prado')
saludos('Junior')



//FUNCIONES CON RETUR
function datos(a, b, nombre, id) {
    console.log(a + b);
    return [nombre, id]
}

console.log(datos(4, 5, 'alex', 45));

function getAleatorio() {
    return Math.random();
}

console.log(getAleatorio());

//
let getAleatorio2 = () => Math.random();

console.log(getAleatorio2());