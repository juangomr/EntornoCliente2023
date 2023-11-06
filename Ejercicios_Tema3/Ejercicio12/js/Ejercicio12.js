let formulario, div, boton;

let mostrar = (e) => {
    e.preventDefault();
    let cadena;
    let opciones = document.getElementById("provincias").selectedIndex.value;
    let texto = document.getElementById("nombre").value;
    let area = document.getElementById("gustos").value;
    div.innerHTML = texto;

    for (let index = 0; index < formulario.elements.length; index++) {
        if (formulario.elements[index].checked == true && formulario.elements[index].type != "button") {
            cadena += formulario.elements[index].value;
        }
    }
    div.innerHTML = cadena + opciones + area;
}

let inicio = () => {
    formulario = document.getElementById("fname");
    div = document.getElementById("formulario");
    boton = document.getElementById("datos");
    boton.addEventListener("click", mostrar);
}

window.addEventListener("click", inicio);