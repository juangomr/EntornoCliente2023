let semana = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO",
];
let mayor = 0;
let dia;
semana.forEach((e) => {
  document.write(`Longitud de ${e} : ${e.length} <br>`);
  if (e.length > mayor) {
    mayor = e.length;
    dia = e;
  }
});

document.write(`El día de la semana con más letras es ${dia}`);
