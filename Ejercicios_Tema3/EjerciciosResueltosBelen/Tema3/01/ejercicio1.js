//recorremos el formulario.
alert("MOSTRAMOS TODOS LOS ELEMENTOS DEL FORMULARIO");
miform = document.forms[0];

for (i = 0; i < miform.elements.length; i++) alert(miform.elements[i].name);

// mostramos solo los input text
alert("MOSTRAMOS SOLO LOS INPUT TEXT");
for (i = 0; i < miform.elements.length; i++) {
  if (miform.elements[i].type == "text") alert(miform.elements[i].name);
}

alert("DATOS DE TEXTO CON ID:");
let nombreCompleto = document.getElementById("n1").value;
nombreCompleto +=
  " " +
  document.getElementById("a1").value +
  " " +
  document.getElementById("a2").value;
alert(nombreCompleto);

alert("DATOS DE TEXTO CON NAME:");
nombreName = document.DatosPersonales.nombre;
nombreName +=
  " " + document.DatosPersonales.ape1 + " " + document.DatosPersonales.ape2;
alert(nombreName);

alert("¿QUé es lo que falta?");

nombreName = document.DatosPersonales.nombre.value;
nombreName +=
  " " +
  document.DatosPersonales.ape1.value +
  " " +
  document.DatosPersonales.ape2.value;
alert(nombreName);

// OPCION CON QUERYSELECTOR
/*
    let $a1 = document.querySelectorAll("input");   
    $a1.forEach(element => { 
                
        console.log(element.name);        
    });*/
