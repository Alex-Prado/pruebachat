const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

//--------------VERFIFICAR EL DIA
// if (dia === 0 || dia ===6) {
//     console.log('dia laborable');
//     horaApertura = 9;
// }else{
//     console.log('dia de semana');
//     horaApertura = 12;
// }

// OPERACION TERNARIA
horaApertura = ([0, 6].includes(dia)) ? 9 : 12;

//--------------VERIFICAR LA HORA DE ATENCION 
// if (horaActual >= horaApertura) {
//     mensaje = 'ya estamos atendiendo'
// }
// else {
//     mensaje = `El horaria de atencion es a las ${horaApertura}`
// }

// OPERACION TERNARIA
mensaje = (horaActual >= horaApertura) ? 'Ya estamos atendiendo' : `Hoy atendemos a las ${horaApertura}`;

console.log({horaApertura, mensaje});