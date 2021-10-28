class Rectangulo {
    altura = '';
    base = '';
    #area = 0;
    constructor(altura = 0, base = 0) {
        this.altura = altura;
        this.base = base;
        // this.#area = base * altura;

    }
   calcularArea() {
        // console.log(this.#area);
        this.#area = this.base * this.altura;
        return this.#area;
    }
    get getMostrarArea() {
        return `el area es: ${Rectangulo.calcularArea}`;
    }
}
const cuadrado = new Rectangulo(10, 10);
// cuadrado.#area = 150000;
console.log(cuadrado);
console.log(cuadrado.getMostrarArea);
// cuadrado.#calcularArea();