
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
// Crear un <tr>
const tr = document.createElement("tr");
tr.setAttribute("id",producto.id);

// Creamos el <td> para checkbox
let tdCheck = document.createElement("td");
let check = document.createElement("input");
check.setAttribute("type", "checkbox");
check.setAttribute("id", "checkbox"+ producto.id);
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