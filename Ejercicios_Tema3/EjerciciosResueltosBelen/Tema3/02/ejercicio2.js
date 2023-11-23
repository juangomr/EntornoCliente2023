convertirMayusculas = () => {
  /*
		En este ejemplo accedemos a la propiedad value de un objeto con id nombre y le asignamos 
		su contenido actual pero convertido a mayúsculas con el método toUpperCase() del objeto String.
	*/
  $nombre = document.getElementById("nombre");
  $nombre.value = $nombre.value.toUpperCase();

  $nombre.select();
};

let $inp, $sonido, $b1, $b2;

playSound = (e) => {
  e.preventDefault();

  $sonido.play();
};

stopSound = (e) => {
  e.preventDefault();
  $sonido.pause();
  $sonido.currentTime = 0;
};
inicio = () => {
  $inp = document.getElementById("nombre");
  $inp.addEventListener("blur", convertirMayusculas);
  $sonido = document.getElementById("myAudio");

  $b1 = document.getElementById("b1").addEventListener("click", playSound);
  $b2 = document.getElementById("b2").addEventListener("click", stopSound);
};

window.addEventListener("DOMContentLoaded", inicio);
