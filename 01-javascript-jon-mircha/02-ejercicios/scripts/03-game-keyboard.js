export function gameKeyboard(IDObject, IDMap, classContainerStart, classContainerEnd) {
  const $circle = document.getElementById(`${IDObject}`)
  const $map = document.getElementById(`${IDMap}`)
  const $containerStart = document.getElementById(`${classContainerStart}`)
  const $containerEnd = document.getElementById(`${classContainerEnd}`)
  let x = 0;
  let y = 0;
  let limiteX = $map.offsetWidth - $circle.offsetWidth
  let limiteY = $map.offsetHeight - $circle.offsetHeight

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

  function moveCircle(posX, posY) {
    $circle.style.transform = `translate(${posX}px, ${posY}px)`
  }

  document.addEventListener("keydown", e => {
    if (window.scrollY > $containerStart.offsetTop && window.scrollY < ($containerStart.offsetTop + window.innerHeight)) {
      let key = e.key;
      switch (key) {
        case "ArrowUp":
          e.preventDefault()
          y -= 10;
          break;
        case "ArrowDown":
          e.preventDefault()
          y += 10;
          break;
        case "ArrowRight":
          e.preventDefault()
          x += 10;
          break;
        case "ArrowLeft":
          e.preventDefault()
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
    }
    else {
      return
    }
  })

}

