let regresaTrue = () => {
    console.log('regresa true');
    return true
}

let regresaFalse = () => {
    console.log('regresa false');
    return false
}

console.warn('AND');
console.log(true && true); //true
console.log(true && false); //true
console.log(regresaTrue() && !regresaFalse());

console.log('===== OR ======');
console.log(true || true);
console.log(true || false);
console.log(!true || false);


console.log('===== ASIGNACIONES ======');
a1 = true && 'hola' && false
// a1 = true && 'hola' && !false
a2 = false || 'hola mundo' || regresaFalse();
console.log(a1, a2);