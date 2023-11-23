set_background = () => {
  // FORMA 1
  let todos_p = document.body.getElementsByTagName("p");
  todos_p[1].style.background = "rgb(255,0,0)";

  // FORMA 2

  let primero = document.body.firstElementChild;
  let segundo = primero.nextElementSibling;
  let tercero = segundo.nextElementSibling;
  // tercero.style.background = "blue";

  // FORMA 3: ojo no funciona con live server!!!!!
  //Porque Live Server agrega etiqueta <script> al final del html
  //alert(document.body.lastElementChild);
  document.body.lastElementChild.style.background = "yellow";
};

inicio = () => {
  let $b = document.getElementById("boton");
  $b.addEventListener("click", set_background);
};

window.addEventListener("load", inicio);
