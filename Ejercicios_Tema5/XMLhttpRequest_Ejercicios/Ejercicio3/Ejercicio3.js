let boton, parrafo, json;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.yesno.wtf/api");

xhr.send();

xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) {
        return;
    }

    if (xhr.status >= 200 && xhr.status < 300) {
        console.log("exito");
        json = JSON.parse(xhr.responseText);
        console.log(json);

    } else {
        console.log("error");
        let message = xhr.statusText || "ocurrió un error";
        xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

});

let insertar = () => {
    parrafo.innerHTML = json.answer;
}


let inicio = () => {
    boton = document.getElementById("boton").addEventListener("click", insertar);
    parrafo = document.getElementById("parrafo");

}



window.addEventListener("DOMContentLoaded", inicio);