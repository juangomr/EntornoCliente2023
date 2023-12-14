async function realizarFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  var json = await response.json();
  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  } else {
    var div = document.getElementById("usuario");
    const $p = document.createElement("p");
    for (let index = 0; index < json.length; index++) {
      $p.innerHTML += "Nombre usuario: " + json[index].username + "<br>";
    }

    div.appendChild($p);
  }
}

realizarFetch();
