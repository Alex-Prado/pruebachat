class Persona {
    
    static nuevoConstrutor({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }
    constructor(nombre, apellido, pais) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }
    Perfil() {
        return `mi nombre es: ${this.nombre} y mi pais es: ${this.pais}`;
    }
}

// const dato = new Persona("alex", "prado", "peru");
// console.log(dato.Perfil());

const Alex = {
    nombre:   'Alex',
    apellido: 'Lopez',
    pais:     'Chile'
}
const Luis = {
    nombre:   'Luis',
    apellido: 'montes',
    pais:     'Ecuador'
}
const dato2 = Persona.nuevoConstrutor(Alex);
const dato3 = Persona.nuevoConstrutor(Luis)
console.log(dato2.Perfil());
console.log(dato3.Perfil());