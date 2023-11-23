const productos = [
  {
    id: 1,
    nombre: "Mouse Logitech",
    precio: 20,
    codigo: "123",
  },
  {
    id: 2,
    nombre: "Xiaomi Mi A1",
    precio: 5000,
    codigo: "123444",
  },
  {
    id: 3,
    nombre: "Galletas",
    precio: 10,
    codigo: "20205",
  },
  {
    id: 4,
    nombre: "Computadora portátil",
    precio: 30000,
    codigo: "7700545",
  },
];

// Ahora dibujamos la tabla

cuertoTabla = document.getElementById("cuerpoTabla");
// Recorrer todos los productos
productos.forEach((producto) => {
  // Crear un <tr>
  const tr = document.createElement("tr");
  tr.setAttribute("id", producto.id);

  // Creamos el <td> para checkbox
  let tdCheck = document.createElement("td");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "checkbox" + producto.id);
  check.setAttribute("name", "marcar");

  tdCheck.appendChild(check);
  tr.appendChild(tdCheck);

  // Creamos el <td> de nombre y lo adjuntamos a tr
  let tdNombre = document.createElement("td");
  tdNombre.innerHTML = producto.nombre;
  tr.appendChild(tdNombre);
  // El td de precio
  let tdPrecio = document.createElement("td");
  tdPrecio.innerHTML = producto.precio;
  tr.appendChild(tdPrecio);
  // El td del código
  let tdCodigo = document.createElement("td");
  tdCodigo.innerHTML = producto.codigo;
  tr.appendChild(tdCodigo);
  // Finalmente agregamos el <tr> al cuerpo de la tabla
  cuerpoTabla.appendChild(tr);
  // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
});

// Agregar un evento de clic al botón Seleccionar todo
document.getElementById("selectAll").onclick = function () {
  // Obtener todos los cb
  var cb_All = document.getElementsByName("marcar");
  // Cada cb está seleccionado
  for (var i = 0; i < cb_All.length; i++) {
    cb_All[i].checked = true;
  }
};
// Agrega un evento de clic al botón deseleccionar todo
document.getElementById("unSelectAll").onclick = function () {
  // Obtener todos los cb
  var cb_All = document.getElementsByName("marcar");
  // Cada cb está seleccionado
  for (var i = 0; i < cb_All.length; i++) {
    cb_All[i].checked = false;
  }
};

document.getElementById("del").onclick = function () {
  // Obtener todos los cb
  var cb_All = document.getElementsByName("marcar");

  //cuidado que si lo hacemos asi no funciona porque se mueve la tabla dinamicamente
  /*
    for(var j=1 ; j<=cb_All.length; j++) {

        let $c= document.getElementById("checkbox"+j);
        
        if($c.checked)
        {
            var table_node = $c.parentNode.parentNode.parentNode; // me pongo al nivel de tbody
            table_node.removeChild($c.parentNode.parentNode);
        }
    }*/

  //cuidado que si lo hacemos asi no funciona porque se mueve la tabla dinamicamente
  /*
  for (var j = 0; j < cb_All.length; j++) {
    alert(cb_All.length);
    if (cb_All[j].checked) {
      var table_node = cb_All[j].parentNode.parentNode.parentNode; // me pongo al nivel de tbody
      table_node.removeChild(cb_All[j].parentNode.parentNode);
    }
  }*/

  // habria que hacerlo empezando por abajo

  for (var j = cb_All.length - 1; j >= 0; j--) {
    if (cb_All[j].checked) {
      var table_node = cb_All[j].parentNode.parentNode.parentNode; // me pongo al nivel de tbody
      table_node.removeChild(cb_All[j].parentNode.parentNode);
    }
  }
};
