export function statusNetwork(classSpan) {
  const $container = document.querySelector(`.${classSpan}`)
  const showStatus = () => {
    if (navigator.onLine) {
      $container.innerText = "Conectado";
      $container.classList.add("status--connect")
    }
    else {
      $container.innerText = "Desconectado";
      $container.classList.add("status--disconnect")
    }
  }
  showStatus()
  window.addEventListener("online", () => {
    showStatus()
  })
  window.addEventListener("offline", () => {
    showStatus()
  })
}
