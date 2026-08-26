export function countdown(elementHTML) {
  const $container_countdown = document.querySelector(`.${elementHTML}`)
  let tiempo_final = new Date(1798761600 * 1000)
  const intervalCountdown = setInterval(() => {
    let diferencia = tiempo_final.getTime() - Date.now()
    let dias = (diferencia >= 86400000) ? Math.floor(diferencia / 86400000) : 0
    let horas = diferencia >= 3600000 ? Math.floor(diferencia / 3600000) % 24 : 0
    let minutos = diferencia >= 60000 ? Math.floor(diferencia / 60000) % 60 : 0
    let segundos = Math.floor(diferencia / 1000) % 60
    horas = horas < 10 ? `0${horas}` : horas
    minutos = minutos < 10 ? `0${minutos}` : minutos
    segundos = segundos < 10 ? `0${segundos}` : segundos
    $container_countdown.innerHTML = `
      <h4 class="section__days">Faltan ${dias} dias</h4>
      <div class="section__time">
        <span>${horas} : ${minutos} : ${segundos}</span>
      </div>
    `
    if (diferencia <= 0) {
      clearInterval(intervalCountdown)
      console.log("Fin del tiempo")
      return
    }
  }, 1000)
}
