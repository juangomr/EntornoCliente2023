inicio = () => {
  document
    .getElementById("checkbox1")
    .addEventListener("change", cambiocheckbox);
  document.getElementById("radioa").addEventListener("change", cambioradio);
  document.getElementById("radiob").addEventListener("change", cambioradio);
  document.getElementById("radioc").addEventListener("change", cambioradio);
  document.getElementById("select1").addEventListener("change", cambioselect);
  document.getElementById("text1").addEventListener("change", cambiotext);
  document
    .getElementById("textarea1")
    .addEventListener("change", cambiotextarea);
};

cambiocheckbox = () => {
  if (document.getElementById("checkbox1").checked) alert("Check marcado");
  else alert("Check no marcado");
};

cambioradio = () => {
  alert(
    (document.getElementById("radioa").checked ? true : false) +
      " " +
      (document.getElementById("radiob").checked ? true : false) +
      " " +
      (document.getElementById("radioc").checked ? true : false)
  );
};

cambioselect = () => {
  alert(document.getElementById("select1").value);
};

cambiotext = () => {
  alert(document.getElementById("text1").value);
};

cambiotextarea = () => {
  alert(document.getElementById("textarea1").value);
};

window.addEventListener("DOMContentLoaded", inicio);
