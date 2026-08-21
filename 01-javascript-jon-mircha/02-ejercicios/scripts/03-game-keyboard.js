const $circle = document.getElementById("circle")
const $map = document.getElementById("map")
let x = 0;
let y = 0;
let limiteX = $map.offsetWidth - $circle.offsetWidth
let limiteY = $map.offsetHeight - $circle.offsetHeight

console.log($circle.offsetWidth)

console.log(limiteX, limiteY)

window.addEventListener("resize", () => {
  limiteX = $map.offsetWidth - $circle.offsetWidth;
  limiteY = $map.offsetHeight - $circle.offsetHeight;
})

function comprobePosition(posX, posY) {
  if (posX >= 0 && posX < limiteX && posY >= 0 && posY < limiteY) {
    return true;
  }
  else {
    return false;
  }
}


document.addEventListener("keydown", e => {
  e.preventDefault()
  let key = e.key;
  switch (key) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
  }
  if (!comprobePosition(x, y)) {
    // Se pueden simplificar los condicionales si solo es una instrucción, eliminando las llaves {}
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > limiteX) x = limiteX
    if (y > limiteY) y = limiteY
  }
  moveCircle(x, y);
})

function moveCircle(posX, posY) {
  $circle.style.transform = `translate(${posX}px, ${posY}px)`
}
