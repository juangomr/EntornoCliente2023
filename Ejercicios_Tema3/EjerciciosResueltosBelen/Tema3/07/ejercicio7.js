cargaPagina = () => {
  document.getElementById("text1").addEventListener("focus", tomarfoco1);
  document.getElementById("text2").addEventListener("focus", tomarfoco2);
  document.getElementById("text1").addEventListener("blur", perderfoco1);
  document.getElementById("text2").addEventListener("blur", perderfoco2);

  document.getElementById("text3").addEventListener("focus", tomarfoco3);
  document.getElementById("text3").addEventListener("blur", perderfoco3);

  document.getElementById("mienlace").addEventListener("click", alertar);

  document.getElementById("cambia").addEventListener("mouseover", cambiar);
  document.getElementById("cambia").addEventListener("mouseout", cambiar);
};

cambiar = (e) => {
  if (e.type == "mouseover") e.target.style.color = "green";
  else if (e.type == "mouseout") e.target.style.color = "orange";
};

alertar = (e) => {
  alert(e.type);
  alert(e.target);
  e.target.style.color = "blue";
};
tomarfoco1 = () => {
  //document.getElementById("text1").style.color = "#ff0000";
  document.getElementById("text1").setAttribute("class", "rojo");
};

tomarfoco2 = () => {
  //document.getElementById("text2").style.color = "#ff0000";
  document.getElementById("text2").setAttribute("class", "rojo");
};

perderfoco1 = () => {
  //document.getElementById("text1").style.color = "#000000";
  document.getElementById("text1").setAttribute("class", "negro");
};

perderfoco2 = () => {
  //document.getElementById("text2").style.color = "#000000";
  document.getElementById("text2").setAttribute("class", "negro");
};

let tomarfoco3 = (e) => {
  //alert(this.target)
  console.log(e);

  console.log(e.type);
  console.log(e.target);
  e.target.className = "rojo";
};

let perderfoco3 = (e) => {
  e.target.className = "negro";
};

window.addEventListener("DOMContentLoaded", cargaPagina);
