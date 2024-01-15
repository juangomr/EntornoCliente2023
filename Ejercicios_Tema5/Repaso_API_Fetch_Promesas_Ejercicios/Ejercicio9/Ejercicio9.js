let contenedor, lista, detalles, botonCargar, botonBuscar, pagina;

let inicio = () => {
    contenedor = document.getElementById("blog-container");
    lista = document.getElementById("posts-list");
    detalles = document.getElementById("post-details");
    botonCargar = document.getElementById("load-more-btn").addEventListener("click", mostrarNuevosPosts);
    botonBuscar = document.getElementById("search-btn");
    pagina = 1;
    mostrarPosts(pagina);

}

let mostrarPosts = (pagina) => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=" + pagina + "&_limit=5").
        then((respuesta) => respuesta.json()).
        then((json) => {
            console.log(json);
            json.forEach(element => {
                lista.innerHTML += element.title + "<br>" + element.body + "<br><br>";
            });

        })
}

let mostrarNuevosPosts = () => {
    pagina++;
    mostrarPosts(pagina);
}


window.addEventListener("DOMContentLoaded", inicio);