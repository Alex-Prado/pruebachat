class HeroeMarvel {
    nombre = '';
    clave = '';
    frase = '';
    comida = '';

    static _conteo = 0;

    static get conteo() {
        return HeroeMarvel._conteo + ' instancias';
    }
    static mensaje(){
        console.log('metodo statico');
    }

    constructor(nombre, clave, frase, _conteo) {
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

const spiderman = new HeroeMarvel('peter parker', 'spiderman', 'tu amigable vecino el hombre araña');
const ironman = new HeroeMarvel('tony stark', 'ironman', 'yo soy ironman')

// console.log(ironman);
// spiderman.MiFrase();
// ironman.MiFrase();
// spiderman.setComidaFavorita = 'pastel de la tia May'
console.log(spiderman);
console.log(HeroeMarvel.conteo);
HeroeMarvel.mensaje()
// console.log(spiderman.getMostrarComida);