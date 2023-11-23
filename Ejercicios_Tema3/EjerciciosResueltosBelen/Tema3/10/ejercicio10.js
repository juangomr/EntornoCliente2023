inicio = () => {
  // 1 forma. Dando id a los botones
  /*
  for (let x = 0; x <= 9; x++) {
    document.getElementById("boton" + x).addEventListener("click", presion);
  }
*/

  let miform = document.forms[0];
  //2 forma. recorriendo el formulario

  for (i = 0; i < miform.elements.length; i++) {
    if (miform.elements[i].type == "button") {
      miform.elements[i].addEventListener("click", presion);
    }
  }
};

// evt es objeto que representa el evento, y uno de sus atributos es el target, que viene a ser el elemento que recibió el evento.
presion = (evt) => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").innerHTML += evt.target.value;
};

window.addEventListener("DOMContentLoaded", inicio);
