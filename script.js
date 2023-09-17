const textElement = document.getElementById("logo");
let colorIndex = 0;
const colors = ["red", "green", "blue"]; // Puedes agregar más colores según tus preferencias

function changeColor() {
  textElement.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

// Cambia el color cada 1000 milisegundos (1 segundo)
setInterval(changeColor, 100);
