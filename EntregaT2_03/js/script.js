//Declaro mis variables para las imágenes de los caballos
var caballo1 = document.getElementById("c1");
var caballo2 = document.getElementById("c2");
//Declaro variables para las posiciones de las imágenes en pantalla
var posicionC1 = 0;
var posicionC2 = 0;
//Declaro variable para controlar el temporizador
var temporizador;

/*Función que coloca las imágenes a la posición inicial y vuelve a 
habilitar los botones Empate y Correr.*/
let comenzar = () => {
  caballo1.style.left = "0%";
  caballo2.style.left = "0%";
  posicionC1 = 0;
  posicionC2 = 0;
  document.getElementById("botonGanar").disabled = false;
  document.getElementById("botonEmpate").disabled = false;
};
/*Función que mueve las imágenes hacia la izquierda al mismo tiempo.
La condición para que se muevan es si las imágenes se encuentran entre el 0 y
el 100% del ancho de la pantalla se aumenta en un 1% en cada iteración del 
temporizador, y si no se encuentran en esa condición vuelven a su posición inicial.
También deshabilita el boton Correr.*/
let empate = () => {
  document.getElementById("botonGanar").disabled = true;
  if (
    posicionC1 < 95 && //Belén. Bajo a 95
    posicionC1 >= 0 &&
    posicionC2 < 95 &&
    posicionC2 >= 0
  ) {
    posicionC1 += 1;
    caballo1.style.left = posicionC1 + "%";
    posicionC2 += 1;
    caballo2.style.left = posicionC2 + "%";
  } else {
    posicionC1 = 0;
    caballo1.style.left = posicionC1 + "%";
    posicionC2 = 0;
    caballo2.style.left = posicionC2 + "%";
  }
};
/*Función que mueve las imágenes hacia la izquierda pero cambiando que la
imágen inferior va el doble de rápido que la superior.
También deshabilita el boton Empate.*/
let ganar = () => {
  document.getElementById("botonEmpate").disabled = true;
  if (posicionC1 < 95 && posicionC1 >= 0) {
    //Belén. Bajo a 95
    posicionC1 += 1;
    caballo1.style.left = posicionC1 + "%";
  } else {
    posicionC1 = 0;
    caballo1.style.left = posicionC1 + "%";
  }
  if (posicionC2 < 95 && posicionC2 >= 0) {
    //Belén. Bajo a 95
    posicionC2 += 2;
    caballo2.style.left = posicionC2 + "%";
  } else {
    posicionC2 = 0;
    caballo2.style.left = posicionC2 + "%";
  }
};

//Función que inicia un temporizador que llama a la función empate
let correrEmpate = () => {
  temporizador = setInterval(empate, 100);
};
//Función que inicia un temporizador que llama a la función ganar
let correrGanar = () => {
  temporizador = setInterval(ganar, 100);
};
//Función que para el temporizador
let parar = () => {
  clearInterval(temporizador);
};

/*

Muy bien Juan, 
Te he bajado a 95 la comparación del if porque al tener 100 + lo que ocupa la imagen, te salía la barra de 
desplazamiento horizontal, ya que se pasaba del 100%.
*/
