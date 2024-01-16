let container, containerDatos, boton, titulo;

let inicio = () => {
  container = document.getElementById("recipeContainer");
  containerDatos = document.getElementById("datos");
  boton = document.getElementById("b1").addEventListener("click", conexion);
  titulo = document.getElementById("recipeTitle");
};

let conexion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
  xhr.send();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      json = JSON.parse(xhr.responseText);
      console.log(json);
      titulo.innerHTML = json.meals[0].strMeal;
      containerDatos.innerHTML = "<img src=" + json.meals[0].strMealThumb + ">";

      let contenedorLista = document.createElement("ul");
      let arr = json.meals[0];
      for (let index = 1; index <= 20; index++) {
        let ingr = "strIngredient" + index;
        if (arr[ingr] != "") {
          containerDatos.innerHTML += "<li>" + arr[ingr] + "</li>";
        }
      }
      containerDatos.appendChild(contenedorLista);

      containerDatos.innerHTML +=
        "<a href=" + json.meals[0].strSource + ">Web de la receta</a>";
    } else {
      console.log("Error al obtener la receta");
    }
  });
};

window.addEventListener("DOMContentLoaded", inicio);
