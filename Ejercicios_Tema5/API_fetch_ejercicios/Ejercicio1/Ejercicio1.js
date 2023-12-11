fetch("https://jsonplaceholder.typicode.com/users/5")
  .then((response) => response.json())
  .then((response) => {
    var div = document.getElementById("usuario");
    div.innerHTML = "Nombre usuario: " + response.username;
  });
