function abrir() {
  window.open("ej22datos.html", "blank", "width=1024, height=1024");
}

function mostrar() {
  let nombre = formulario.nombre.value;
  let apellidos = formulario.apellidos.value;
  let fecha = new Date(formulario.fecha.value);

  a = fecha.getFullYear();
  m = fecha.getMonth() + 1;
  d = fecha.getDate();
  if (a < 10) a = "0" + a;
  if (m < 10) m = "0" + m;
  if (d < 10) d = "0" + d;

  window.opener.document.write(
    `<h1>Datos introducidos:</h1> <br>Su nombre es: ${nombre} <br>Su apellido es: ${apellidos} <br>Fecha de nacimiento: ${d}/${m}/${a} <br> Años bisiesto desde su fecha de nacimiento:`
  );

  for (let index = Number(a); index < 2023; index++) {
    if ((index % 4 == 0 && index % 100 != 0) || index % 400 == 0) {
      window.opener.document.write(index + "<br>");
    }
  }
}
