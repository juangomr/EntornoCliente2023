cargaPagina = () => {
  const $b1 = document.getElementById("b1");
  $b1.addEventListener("click", escribeNombre);
};

escribeNombre = () => {
  let nombre = document.getElementById("idtexto").value;

  document.getElementById("idtexto").value = "";
  document.getElementById("idtexto").focus();

  document.getElementById("resultado").innerHTML = nombre;

  // 1 forma
  // document.getElementById("resultado").style.color = "blue";
  //document.getElementById("resultado").style.fontWeight = "bold";

  //2 forma
  //document
  //  .getElementById("resultado")
  //  .setAttribute("style", "color:blue;font-weight:bold");
};

window.addEventListener("DOMContentLoaded", cargaPagina);
