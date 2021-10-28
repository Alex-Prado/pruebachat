function Persona(nombre, clave) {
    this.nombre = nombre;
    this.clave = clave;
    this.imprimir = () => {
        console.log(`nombre: ${nombre} - clave: ${clave}`);

    }

}
const benja = new Persona('Maria', 'vendo patos');
console.log(benja);