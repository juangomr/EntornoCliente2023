function abrir() {
  let nuevaVentana = window.open(
    "selectorColor.html",
    "blank",
    "height=300, width=300, top=0, left=0"
  );
}

function cambiarColor() {
  let c = formulario.color.value;
  window.opener.document.body.style.backgroundColor = c;
}
