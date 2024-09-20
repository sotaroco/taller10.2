document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");
  
    buttonText.addEventListener("click", function () {
      const text = inputText.value;
  
      // Guardamos el valor en el localStorage
      localStorage.setItem("dato", text);
  
      // Vaciar el campo de texto después de guardar
      inputText.value = "";
    });
  });