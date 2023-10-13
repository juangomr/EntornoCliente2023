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

function abrir() {
  let nuevaVentana = window.open(
    "",
    "SegundaPag",
    "height=300, width=300, top=0, left=0"
  );

  nuevaVentana.document.write("<p>Reloj</p>");
  activarTemp();
  desactivarTemp();

}

function reloj() {
  actual = new Date();
  actual = actual.toLocaleTimeString();
  nuevaVentana.document.write(actual);
}

function activarTemp() {
  let temp = setInterval(reloj, 1000);
}

function desactivarTemp() {
  let temp = clearInterval(activarTemp, 5000);
}