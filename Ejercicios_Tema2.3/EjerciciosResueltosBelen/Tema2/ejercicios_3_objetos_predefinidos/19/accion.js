var nuevaVentana;

function selector() {
  nuevaVentana = open(
    "./selector_COLOR.html",
    "Selecciona Color",
    "width=300px, height=300px"
  );
}

function cambiarColor() {
  color = formulario.color.value;
  window.opener.document.body.style.background = color;

  //para  cerrar la subventana
  window.close();
}
