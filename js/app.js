let botonVerMas = document.querySelector("#btnVerMas");
let formulario = document.querySelector('form');
console.log(formulario);

//agregar un manejador de eventos
botonVerMas.addEventListener("click", verMas);
// formulario.addEventListener('submit', ()=>{
//     leerDatoFormulario(arg1,arg2)
// });
formulario.addEventListener('submit', leerDatoFormulario);
const colores = [
  "danger",
  "warning",
  "info",
  "primary",
  "dark",
  "light",
  "secondary",
  "success",
];

function cambiarTitulo() {
  console.log("Desde la funcion cambiar titulo");
  let titulo = document.querySelector("h1");
  // let titulo = document.getElementById('tituloPrincipal'); //retorna un objeto
  // let titulo = document.getElementsByClassName('container'); devuelve array
  // let titulo = document.getElementsByTagName('h1'); devuelve array
  console.log(titulo);
  //obtener el color aleatorio
  const posicion = getRandomIntInclusive(0, colores.length - 1);
  // console.log(posicion);
  titulo.className = "text-" + colores[posicion];
  titulo.innerHTML = "Titulo modificado con <b>DOM</b>";
  // titulo.innerText = 'Titulo modificado con DOM';
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function verMas() {
  //seccion padre
  let seccion = document.getElementById("seccionCrear");
  console.log(seccion);

  if (botonVerMas.innerHTML === "Ver mas") {
    //crear un nodo hijo
    let parrafo = document.createElement("p");
    //preparar el elemento
    parrafo.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis neque assumenda dicta, quo debitis, est cum possimus nisi et officia sapiente voluptatum ex, aperiam repudiandae voluptatibus harum accusantium quos molestiae dolorum temporibus? Sequi ex doloremque quae, cum voluptatum excepturi vitae possimus at veritatis, unde eaque asperiores autem repudiandae, deserunt et illo aut debitis laborum accusamus quos soluta? Et molestias excepturi deserunt odio, debitis inventore nisi magni iure totam reiciendis eligendi. Quibusdam dolor ab sint sit facilis perferendis iure ipsam veniam impedit, dolore, eum, ut voluptatem enim minus perspiciatis possimus ipsa? Saepe modi vitae esse distinctio voluptatibus quia atque labore fuga odit. Iusto optio magnam ut, quam amet molestiae nisi. Quaerat, ullam ad! Magnam recusandae accusantium amet iusto explicabo laborum excepturi inventore maiores molestiae iste accusamus assumenda magni similique reiciendis repellat, eaque, error, at consectetur voluptatem maxime quas. Tempore dolor autem alias delectus perspiciatis, repudiandae sit sint facilis cupiditate velit.";
    parrafo.className = "lead";
    //agregar el nodo hijo en la seccion padre
    //seccion.appendChild(parrafo); //agrega un nodo al final
    //seccion.prepend(parrafo); //permite agregar un nodo al principio
    seccion.insertBefore(parrafo, botonVerMas);
    
    // alternativa para crear nodos
    // seccion.innerHTML += `<p class='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis neque assumenda dicta, quo debitis, est cum possimus nisi et officia sapiente voluptatum ex, aperiam repudiandae voluptatibus harum accusantium quos molestiae dolorum temporibus? Sequi ex doloremque quae, cum voluptatum excepturi vitae possimus at veritatis, unde eaque asperiores autem repudiandae, deserunt et illo aut debitis laborum accusamus quos soluta? Et molestias excepturi deserunt odio, debitis inventore nisi magni iure totam reiciendis eligendi. Quibusdam dolor ab sint sit facilis perferendis iure ipsam veniam impedit, dolore, eum, ut voluptatem enim minus perspiciatis possimus ipsa? Saepe modi vitae esse distinctio voluptatibus quia atque labore fuga odit. Iusto optio magnam ut, quam amet molestiae nisi. Quaerat, ullam ad! Magnam recusandae accusantium amet iusto explicabo laborum excepturi inventore maiores molestiae iste accusamus assumenda magni similique reiciendis repellat, eaque, error, at consectetur voluptatem maxime quas. Tempore dolor autem alias delectus perspiciatis, repudiandae sit sint facilis cupiditate velit.</p>`

    botonVerMas.innerHTML = "Ocultar";
    botonVerMas.className = "btn btn-danger";
  } else {
    console.log("aqui quiero borrar");
    console.log(seccion.children[3]);
    seccion.removeChild(seccion.children[3]);
    //resetear el boton
    botonVerMas.innerHTML ='Ver mas';
    botonVerMas.className = 'btn btn-primary';
  }
}

function leerDatoFormulario(e){
    e.preventDefault();
    console.log(e);
    console.log('desde la funcion del formulario');
    let input = document.querySelector('input').value;
    // let datoIngresado = input.value;
    console.log(input)
}