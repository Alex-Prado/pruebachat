const variable = (nombre) => {

    const boton = document.querySelector('.boton');
    const carro = document.querySelector('.carro');
    const experiencia = document.querySelector('.experiencia');
    const contenido = document.querySelector('.contenido');
    const contenido2 = document.querySelector('.contenido2');
    const contenido3 = document.querySelector('.contenido3');
    const caja = document.querySelector('.caja');

    boton.addEventListener('click', () => {

        if (boton.innerHTML == 'CHAT' && carro.innerHTML == 'CARRITO' && experiencia.innerHTML == 'EXPERIENCIA' ||
            carro.innerHTML == 'CERRAR' || experiencia.innerHTML == 'CERRAR') {
            boton.innerHTML = 'CERRAR';
            carro.innerHTML = 'CARRITO';
            experiencia.innerHTML = 'EXPERIENCIA';

            contenido.style.display = 'block';
            contenido2.style.display = 'none';
            contenido3.style.display = 'none';

            caja.style.transform = 'translateY(0%)';
            // boton.style.background = '#00bcd4';
            // boton.style.color = '#fff';

            caja.classList.add('active');


        } else {
            boton.innerHTML = 'CHAT';
            caja.classList.toggle('active');

            caja.style.transform = 'translateY(89.5%)';
        }

    });



    carro.addEventListener('click', () => {
        if (carro.innerHTML == 'CARRITO' && boton.innerHTML == 'CHAT' && experiencia.innerHTML == 'EXPERIENCIA' ||
            boton.innerHTML == 'CERRAR' || experiencia.innerHTML == 'CERRAR') {
            carro.innerHTML = 'CERRAR'
            boton.innerHTML = 'CHAT';
            experiencia.innerHTML = 'EXPERIENCIA';


            contenido.style.display = 'none';
            contenido3.style.display = 'none'
            contenido2.style.display = 'block'

            caja.style.transform = 'translateY(0%)';

            // carro.style.background = '#ff9800';
            // carro.style.color = '#fff';

            caja.classList.add('active');

        } else {
            carro.innerHTML = 'CARRITO';
            caja.classList.toggle('active');

            caja.style.transform = 'translateY(89.5%)'
        }

    });



    experiencia.addEventListener('click', () => {
        if (boton.innerHTML == 'CHAT' && carro.innerHTML == 'CARRITO' && experiencia.innerHTML == 'EXPERIENCIA' ||
            boton.innerHTML == 'CERRAR' || carro.innerHTML == 'CERRAR') {
            boton.innerHTML = 'CHAT';
            carro.innerHTML = 'CARRITO';
            experiencia.innerHTML = 'CERRAR';

            contenido.style.display = 'none';
            contenido2.style.display = 'none';
            contenido3.style.display = 'block';

            caja.style.transform = 'translateY(0%)';
            // experiencia.style.background = '#ff006a';
            // experiencia.style.color = '#fff';

            caja.classList.add('active');
        } else {
            experiencia.innerHTML = 'EXPERIENCIA';
            caja.classList.toggle('active');

            caja.style.transform = 'translateY(89.5%)';
        }

    })


}
variable('Alex');