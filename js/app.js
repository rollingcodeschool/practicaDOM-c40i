let botonVerMas = document.querySelector('#btnVerMas');
console.log(botonVerMas);
//agregar un manejador de eventos
botonVerMas.addEventListener('click', verMas);

function cambiarTitulo(){
    console.log('Desde la funcion cambiar titulo');
    let titulo = document.querySelector('h1');
    // let titulo = document.getElementById('tituloPrincipal'); //retorna un objeto
    // let titulo = document.getElementsByClassName('container'); devuelve array
    // let titulo = document.getElementsByTagName('h1'); devuelve array
    console.log(titulo);
    titulo.className = 'text-primary';
    titulo.innerHTML = 'Titulo modificado con <b>DOM</b>';
    // titulo.innerText = 'Titulo modificado con DOM';
}

function verMas(){
    //seccion padre
    let seccion = document.getElementById('seccionCrear');
    console.log(seccion);
    //crear un nodo hijo
    let parrafo = document.createElement('p');
    console.log(parrafo);
}