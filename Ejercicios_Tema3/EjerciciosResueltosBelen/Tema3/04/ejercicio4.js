inicio = () => {
  const $b1 = document.getElementById("b1");
  $b1.addEventListener("click", consultar);
  const $b2 = document.getElementById("b2");
  $b2.addEventListener("click", consultarMultiple);
};

consultar = () => {
  var objProvincias = document.getElementById("provincias");

  alert(objProvincias.selectedIndex);
  var texto = objProvincias.options[objProvincias.selectedIndex].text;
  var valor = objProvincias.options[objProvincias.selectedIndex].value;
  alert(
    "Datos de la opción seleccionada:\n\nTexto: " + texto + "\nValor: " + valor
  );
};

consultarMultiple = () => {
  var f = document.getElementById("provinciasM");

  for (i = 0; i < f.options.length; i++)
    if (f.options[i].selected) {
      alert(f.options[i].text);
    }
};

window.addEventListener("DOMContentLoaded", inicio);
