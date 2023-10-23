const array = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

array.forEach((element) => {
  document.write(element + ", Longitud: " + element.length + "<br>");
});

maximo = array[0].length;

array.forEach((e) => {
  if (e.length > maximo) {
    maximo = e.length;
  }
});

document.write("La longitud maxima es de: " + maximo);
/*
for (let index = 0; index < array.length; index++) {
  if (array[index].length > maximo) {
    maximo = array[index].length;
  }
}
document.write("La longitud maxima es de: " + maximo);*/
