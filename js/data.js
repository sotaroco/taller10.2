document.addEventListener("DOMContentLoaded", function () {
    const dataElement = document.getElementById("data");
  
    // Recuperamos el valor guardado en el localStorage con la clave "dato"
    const savedData = localStorage.getItem("dato");
  
    // Si hay un valor en localStorage, lo mostramos
    if (savedData) {
      dataElement.textContent = savedData;
    } else {
      dataElement.textContent = "No se encontró ningún dato guardado.";
    }
  });