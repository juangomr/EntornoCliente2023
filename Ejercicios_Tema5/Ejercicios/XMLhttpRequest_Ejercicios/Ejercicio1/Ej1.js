const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
xhr.send();

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("éxito");

    let json = JSON.parse(xhr.responseText);
    console.log(json);
    var div = document.getElementById("usuario");
    const $p = document.createElement("p");
    $p.innerHTML = "Nombre usuario: " + json.username;
    div.appendChild($p);
  } else {
    console.log("error");
    let message = xhr.statusText || "Ocurrió un error";
    xhr.innerHTML = `Error ${xhr.status}: ${message}`;
  }
});
