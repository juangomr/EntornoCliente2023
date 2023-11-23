validar = (e) => {
  e.preventDefault();
  alert("Entramos en la funcion validar. ¿Hay mas de 3 checkbox marcados?");
  var cont = 0;
  var opciones = document.f1.ch;

  for (var x = 0; x < opciones.length; x++) {
    if (opciones[x].checked) {
      cont = cont + 1;
    }
  }

  let message = `Hay marcadas ${cont}`;
  if (cont >= 3) alert(`${message}. Hay más de 3 opciones marcadas`);
  else alert(`${message}. No hay más de 3 opciones marcadas`);
};

let $boton = document.getElementById("comprobar");
$boton.addEventListener("click", validar);

marcar = (e) => {
  e.preventDefault();
  document.getElementById("verano").checked = true;
};
desmarcar = (e) => {
  e.preventDefault();
  document.getElementById("verano").checked = false;
};

let $botonM = document.getElementById("marcar");
let $botonD = document.getElementById("desmarcar");

$botonM.addEventListener("click", marcar);
$botonD.addEventListener("click", desmarcar);
