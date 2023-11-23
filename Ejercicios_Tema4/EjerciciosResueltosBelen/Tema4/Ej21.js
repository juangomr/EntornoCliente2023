
 const productos = [{
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
productos.forEach(producto => {

crearProducto(producto.id,producto.nombre, producto.precio, producto.codigo );

});



 // Agregar un evento de clic al botón Seleccionar todo
 document.getElementById("selectAll").onclick = function () {
    // Obtener todos los cb
    var cb_All = document.getElementsByName("marcar");
    // Cada cb está seleccionado
    for(var i=0 ; i<cb_All.length; i++){
        cb_All[i].checked = true;
    }
}
// Agrega un evento de clic al botón deseleccionar todo
document.getElementById("unSelectAll").onclick = function () {
    // Obtener todos los cb
    var cb_All = document.getElementsByName("marcar");
    // Cada cb está seleccionado
    for(var i=0 ; i<cb_All.length; i++){
        cb_All[i].checked = false;
    }
}

document.getElementById("del").onclick = function () {
    // Obtener todos los cb
    var cb_All = document.getElementsByName("marcar");

    for(var j=1 ; j<=cb_All.length; j++) {

        let $c= document.getElementById("checkbox"+j);
        if($c.checked)
        {
            var table_node = $c.parentNode.parentNode.parentNode; // me pongo al nivel de tbody
            table_node.removeChild($c.parentNode.parentNode);
        }
    }
        //cuidado que si lo hacemos asi no funciona porque se mueve la tabla dinamicamente
        /*
        if (cb_All[j].checked) {
            var table_node = cb_All[j].parentNode.parentNode.parentNode; // me pongo al nivel de tbody
            table_node.removeChild(cb_All[j].parentNode.parentNode);
        }*/

        // habria que hacerlo empezando por abajo
        /*
        for(var j=cb_All.length-1 ; j>=0; j++) {
            if (cb_All[j].checked) {
                var table_node = cb_All[j].parentNode.parentNode.parentNode; // me pongo al nivel de tbody
                table_node.removeChild(cb_All[j].parentNode.parentNode);
            }
        }*/
    }

      
      // Agrega un evento de clic al botón
      document.getElementById("add").onclick = function () { 
            // Obtiene el valor del cuadro de entrada
            let nombreN = document.getElementById("nombreN").value;
            let precioN = document.getElementById("precioN").value;
            let codigoN = document.getElementById("codigoN").value;

          

            let $tabla = document.getElementById("cuerpoTabla");
            let numHijos= $tabla.children.length;
            let nuevoId = numHijos +1;

            crearProducto(nuevoId,nombreN, precioN, codigoN );

            }

            function crearProducto(nuevoId,nombreN, precioN, codigoN )
            {
                const tr = document.createElement("tr");
                tr.setAttribute("id",nuevoId);

                tr.addEventListener("mouseover", (e)=>{

                    e.target.style.backgroundColor='yellow';
                });
                tr.addEventListener("mouseout", (e)=>{

                    e.target.style.backgroundColor='white';
                });
              

                // Creamos el <td> para checkbox
                let tdCheck = document.createElement("td");
                let check = document.createElement("input");
                check.setAttribute("type", "checkbox");
                check.setAttribute("id", "checkbox"+nuevoId);
                check.setAttribute("name", "marcar");

                tdCheck.appendChild(check);
                tr.appendChild(tdCheck);

                // Creamos el <td> de nombre y lo adjuntamos a tr
                let tdNombre = document.createElement("td");
                tdNombre.innerHTML = nombreN;
                tr.appendChild(tdNombre);
                // El td de precio
                let tdPrecio = document.createElement("td");
                tdPrecio.innerHTML = precioN;
                tr.appendChild(tdPrecio);
                // El td del código
                let tdCodigo = document.createElement("td");
                tdCodigo.innerHTML = codigoN;
                tr.appendChild(tdCodigo);

                
                // Finalmente agregamos el <tr> al cuerpo de la tabla
                cuerpoTabla.appendChild(tr);
            }

         