
a = 5;
if (a > 10) {
    console.log(' es mayor a 10');
}
else {
    console.log('es menor');
}
console.log('fin');

let dia = new Date();
let hoy = dia.getDay();

if (hoy === 5) {
    console.log('hoy es viernes');
}
else {
    console.log('no es viernes');
}


//EJERCICIO XD

let diaNro = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

let diaNro2 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',]


let nro = new Date();
let valor = nro.getDay();

console.log(diaNro[valor] || 'DIA NO DEFINIDO');
console.log(diaNro2[valor] || 'DIA NO DEFINIDO');