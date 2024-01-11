let boton, parrafo;

let contestacion = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://yesno.wtf/api");
    xhr.send()

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            json = JSON.parse(xhr.responseText);
            parrafo.innerHTML = "Respuesta: " + json.answer;
        } else {
            console.log(xhr.status + "," + xhr.statusText);
        }
    }) 
}


let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", contestacion);
    parrafo = document.getElementById("parrafo");
}



window.addEventListener("DOMContentLoaded", inicio);