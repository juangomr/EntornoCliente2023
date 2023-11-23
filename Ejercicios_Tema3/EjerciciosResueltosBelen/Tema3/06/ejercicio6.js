cargaPagina = () => {
  document.getElementById("idtexto").focus();
  //Asignar foco al elemento

  const $b1 = document.getElementById("b1");
  $b1.addEventListener("click", muestraInformacion);
};

muestraInformacion = () => {
  //inicializamos
  document.getElementById("resultado").innerHTML = "";

  //-----------------TEXT-----------------------------------------
  var valor = document.getElementById("idtexto").value;
  //valor.innerHTML = "";

  document.getElementById("resultado").innerHTML +=
    "idtexto=" + valor + " </br>";

  //------------------TEXTAREA ---------------------------------------

  var valor = document.getElementById("idparrafo").value;
  //hola//   var valor = document.nameform1.nameparrafo.value;

  document.getElementById("resultado").innerHTML +=
    "idparrafo=" + valor + " </br>";
  //------------------RADIOBUTTONS ---------------------------------------
  var elementos = document.getElementsByName("namepregunta");
  //let elem = document.querySelectorAll('[name="namepregunta"]:checked');

  elementos.forEach((element) => {
    if (element.checked == true)
      document.getElementById("resultado").innerHTML +=
        " RadioButton Seleccionado con foreach: " + element.value + " </br>";
  });

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].checked == true)
      document.getElementById("resultado").innerHTML +=
        " RadioButton Seleccionado sin foreach: " +
        elementos[i].value +
        " </br>";
  }
  //--------------CHECKBOX---------------------------------------------------

  var elemento = document.getElementById("idcondiciones");
  if (elemento.checked == true)
    document.getElementById("resultado").innerHTML +=
      " CheckBox Seleccionado: " + elemento.value + " </br>";

  elemento = document.getElementById("idprivacidad");
  if (elemento.checked == true)
    document.getElementById("resultado").innerHTML +=
      " CheckBox Seleccionado: " + elemento.value + " </br>";
  //------------------SELECT----------------------------------------------------
  // Obtener la referencia a la listavar
  lista = document.getElementById("idopciones");
  // Obtener el índice de la opción que se ha seleccionadovar
  indiceSeleccionado = lista.selectedIndex;
  // Con el índice y el array "options", obtenerla opción seleccionadavar
  opcionSeleccionada = lista.options[indiceSeleccionado];
  // Obtener el valor y el texto de la opción seleccionadavar
  textoSeleccionado = opcionSeleccionada.text;
  var valorSeleccionado = opcionSeleccionada.value;
  //alert("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);
  document.getElementById("resultado").innerHTML +=
    " Opción Select seleccionada: " +
    textoSeleccionado +
    "<br> Valor de la opción: " +
    valorSeleccionado +
    "</br>";
};

window.addEventListener("DOMContentLoaded", cargaPagina);
