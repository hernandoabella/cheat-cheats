const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
let colorIndex = 0;
const colors = ["red", "green", "blue", "orange", "purple"]; // Puedes agregar más colores según tus preferencias

function changeColors() {
  logo.style.color = colors[colorIndex];
  container.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

// Cambia los colores cada 2 segundos (2000 milisegundos)
setInterval(changeColors, 2000);
