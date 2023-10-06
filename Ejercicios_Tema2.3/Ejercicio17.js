function empezar() {
  console.log("En un lugar de la mancha");
}

function parar() {
  clearInterval(temporizador);
}

function empezar2() {
  var temporizador2 = setTimeout(empezarF2, 3000);
}

function empezarF2() {
  console.log("Han pasado tres segundos");
}

function parar2() {
  clearTimeout(temporizador2);
}

let temporizador = setInterval(empezar, 2000);
