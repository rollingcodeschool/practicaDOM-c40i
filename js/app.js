let botonVerMas = document.querySelector('#btnVerMas');
console.log(botonVerMas);
//agregar un manejador de eventos
botonVerMas.addEventListener('click', verMas);
const colores = ['danger', 'warning', 'info', 'primary','dark', 'light','secondary','success']

function cambiarTitulo(){
    console.log('Desde la funcion cambiar titulo');
    let titulo = document.querySelector('h1');
    // let titulo = document.getElementById('tituloPrincipal'); //retorna un objeto
    // let titulo = document.getElementsByClassName('container'); devuelve array
    // let titulo = document.getElementsByTagName('h1'); devuelve array
    console.log(titulo);
    //obtener el color aleatorio
    const posicion = getRandomIntInclusive(0, colores.length-1)
    // console.log(posicion);
    titulo.className = 'text-'+colores[posicion] ;
    titulo.innerHTML = 'Titulo modificado con <b>DOM</b>';
    // titulo.innerText = 'Titulo modificado con DOM';
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function verMas(){
    //seccion padre
    let seccion = document.getElementById('seccionCrear');
    console.log(seccion);
    //crear un nodo hijo
    let parrafo = document.createElement('p');
    console.log(parrafo);
}