const variable = (nombre) => {
    const boton = document.createElement('button');
    const dato = document.createElement('h2');
    const agregar = document.querySelector('.boton');

    agregar.addEventListener('click', () => {

        if (agregar.innerHTML == 'CHAT') {
            agregar.innerHTML = 'CERRAR';
        } else {
            agregar.innerHTML = 'CHAT';
        }

        const mas = document.querySelector('.caja');
        mas.classList.toggle('active');
    })

    dato.innerHTML = `Bienvenido ${nombre}`;
    // boton.innerHTML = 'TITULO';

    boton.addEventListener('click', () => {

        boton.classList.toggle('colorboton');

    })

    document.body.append(boton);
    document.body.append(dato);
}
variable('Alex');