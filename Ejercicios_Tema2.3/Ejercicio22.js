function abrir() {
  window.open("ej22datos.html", "blank", "width=1024, height=1024");
}

function mostrar() {
  let nombre = formulario.nombre.value;
  let apellidos = formulario.apellidos.value;
  let fecha = new Date(formulario.fecha.value);

  a = fecha.getFullYear();
  m = fecha.getMonth();
  d = fecha.getDate();
  if (a < 10) a = "0" + a;
  if (m + 1 < 10) m = "0" + m;
  if (d < 10) d = "0" + d;

  window.opener.document.write(
    `<h1>Datos introducidos:</h1> <br> ${nombre} <br> ${apellidos} <br> ${d}/${m}/${a}`
  );
}
