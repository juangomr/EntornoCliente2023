let boton, parrafo;

let contestacion = () => {
    fetch("https://yesno.wtf/api")
        .then((respuesta) => respuesta.json())
        .then((json) => {
            parrafo.innerHTML = "Respuesta: " + json.answer;
        })
}


let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", contestacion);
    parrafo = document.getElementById("parrafo");
}

window.addEventListener("DOMContentLoaded", inicio);