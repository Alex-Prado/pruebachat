
class HeroeMarvel {
    nombre = '';
    clave = '';
    frase = '';
    comida = '';

    static _conteo = 0;

    static get conteo() {
        return HeroeMarvel._conteo + ' instancias';
    }
    static mensaje() {
        console.log('metodo statico');
    }

    constructor(nombre = 'sin nombre', clave = 'sin clave', frase = 'sin frase', _conteo) {
        this.nombre = nombre;
        this.clave = clave;
        this.frase = frase;
        HeroeMarvel._conteo++;
    }
    set setComidaFavorita(comida) {
        this.comida = comida;
    }
    get getMostrarComida() {
        return `la comida favorita de ${this.nombre} es ${this.comida}`;
    }
    QuienSoy() {
        console.log(`mi nombre es ${this.nombre} y soy ${this.clave}`);
    }
    MiFrase() {
        this.QuienSoy();
        console.log(`soy ${this.clave} ${this.frase}`);
    }
}

class Heroe extends HeroeMarvel {
    clan = 'sin clan';
    constructor(nombre, clave, frase) {
        super(nombre, clave, frase);
        this.clan = 'los avengers'
    }
    QuienSoy() {
        super.QuienSoy();
        console.log('soy un heroe');
    }

}
// const spiderman = new HeroeMarvel('peter parker', 'spiderman', 'tu amigable vecino el hombre araña');
const ironman = new Heroe('tony stark', 'ironman', 'yo soy ironman')
// const spiderman = new Heroe();
console.log(ironman);
ironman.QuienSoy();