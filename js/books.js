const libros = [{
    titulo: "Cien años de soledad",
    autor:"Gabriel Garcia Marquez",
    precio:1000,
    url: "https://wmagazin.com/wp-content/uploads/2017/05/ES-ppal-ciena%C3%B1osportada.jpg"
},{
    titulo: "El señor de las moscas",
    autor:"William Golding",
    precio:800,
    url: "https://images.cdn2.buscalibre.com/fit-in/360x360/a8/4d/a84d259b23e91c3b3f5cd7534515d1fc.jpg"
},{
    titulo: "Viaje al centro de la tierra",
    autor:"Julio Verne",
    precio:600,
    url: "https://images.cdn3.buscalibre.com/fit-in/360x360/83/b7/83b710ae34cb8fafcd2d3bf7587b2580.jpg"
},
{
    titulo: "Don Quijote de la Mancha",
    autor:"Miguel de Cervantes",
    precio:1000,
    url: "https://www.loqueleo.com/mx/uploads/2018/07/resized/800_portada-quijote-web.jpg"
},
{
    titulo: "Moby Dick",
    autor:"Herman Melville",
    precio:400,
    url: "https://i.pinimg.com/474x/ac/c1/7e/acc17edf7784ecc24b3cdaa52516e092.jpg"
},
{
    titulo: "El viejo y el mar",
    autor:"Ernest Hemingway",
    precio:800,
    url: "https://www.penguinlibros.com/es/352422/el-viejo-y-el-mar-edicion-escolar.jpg"
},
{
    titulo: "Veinte mil leguas de viaje submarino",
    autor:"Julio Verne",
    precio:400,
    url: "https://images-na.ssl-images-amazon.com/images/I/51R4Y1300RL.jpg"
}];

//Tu codigo JS va acá

/* 2. Filtrando libros: Crea una función llamada filtrarAutor que reciba como
parámetro un arreglo y autor y returne los libros filtrados. Fíjate que en el
archivo JS tiene un array de objetos precreados que es el que tendrás que
utilizar. */

//funcion para filtrar los autores
function filtrarAutor(array, autor) {
    const filtrados = array.filter((item) => 
        item.autor === autor);
        return filtrados;
    }
    

/* 3. Mostrando el resultado: Crea una función llamada MostrarFiltrados que
llame la función filtrarAutor y pasale como argumentos el array libros y
valor seleccionado por el usuario del select. Finalmente que se setee en el
elemento div#libros el resultado de los libros filtrados. */

function mostrarFiltrados() {
    // 1. conseguir los elementos de manera local:

    let select = document.getElementById('autor');
    let div = document.getElementById('libros');

    // Llamo a la funcion filtrarAutor y la pongo en una constante para poder reutilizarla:
    // le paso como parámetros las variables de los elementos que acabo de traer.  Recordar q select va con .value
    const arrayLibros = filtrarAutor(libros, select.value);

    // Voy a limpiar los datos filtrados anteriormente: 
    // (si lo pongo dentro del forEach no funciona porque no me trae los 2 de Verne)
    // Si lo pongo al final me borra todo
    div.innerHTML = "";

// renderizamos recorriendo con un forEach

arrayLibros.forEach((libro) => {
    // Voy a pedirle que se setee en el div y para eso me traigo una card de Bootstrap, la adapto para que me traiga la informacion del recorrido, y uso template literals:
    // Uso
    div.innerHTML += ` 
    <div class="card" style="width: 18rem;">
  <img src="${libro.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${libro.titulo}</h5>
    <p class="card-text">Autor: ${libro.autor}</p>
    <p class="card-text">Precio: $${libro.precio}-</p>
  </div>
</div>
    `
})
}

  /* 4. Evento change: Vincula la función MostrarFiltrados al select a través del
método onchange. */

// puse onchange="mostrarFiltrados()" en el input select

/* 
si lo hago sin bootstrap:

array.forEach((libro) => {
    div.innerHTML += ` 
    <img src="${libro.url}" alt="">
    <h4>${libro.titulo}</h4>
    <p>Autor: ${libro.autor}</p>
    <p>Precio: $${libro.precio}</p>
    `
    */

    // con el for no funciona!!