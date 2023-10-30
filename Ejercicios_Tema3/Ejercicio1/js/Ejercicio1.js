let formulario = document.getElementById("formulario");

/*for (let index = 0; index < formulario.elements.length; index++) {
  alert(formulario.elements[index].name);
}*/

/*for (let index = 0; index < formulario.elements.length; index++) {
  if (formulario.elements[index].type == "text") {
    alert(formulario.elements[index].name);
  }
}*/

for (let index = 0; index < formulario.elements.length; index++) {
  if (formulario.elements[index].type == "text") {
    alert(formulario.elements[index].value);
  }
}
