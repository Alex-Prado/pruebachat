const heroes = ['batman', 'spiderman', 'superman', 'ironman'];

console.warn('FOR TRADICIONAL');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
console.warn('FOR IN');
for (let heroe in heroes) {
    console.log(heroes[heroe])
}
console.warn('FOR OF');
for (let heroe of heroes) {
    console.log(heroe)
}