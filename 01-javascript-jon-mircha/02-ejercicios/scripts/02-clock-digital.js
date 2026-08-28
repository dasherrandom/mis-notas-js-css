export function clockDigital(buttonStart, buttonStop, buttonStartAlarm, buttonStopAlarm, spaceClock) {
  const $startClock = document.getElementById(`${buttonStart}`)
  const $stopClock = document.getElementById(`${buttonStop}`)
  const $startAlarm = document.getElementById(`${buttonStartAlarm}`)
  const $stopAlarm = document.getElementById(`${buttonStopAlarm}`)
  const $clock = document.querySelector(`.${spaceClock}`)

  const alarm = new Audio("./../assets/alarm.mp3")

  let showClock = null;
  let playAlarm = null;

  $stopAlarm.setAttribute("disabled", true)
  $stopClock.setAttribute("disabled", true)

  $startClock.addEventListener("click", () => {
    let time = new Date
    $clock.innerText = time.toLocaleTimeString()
    console.log("Reloj mostrado")
    $startClock.setAttribute("disabled", true)
    $stopClock.removeAttribute("disabled")
    showClock = setInterval(() => {
      let time = new Date
      $clock.innerText = time.toLocaleTimeString()
    }, 1000)
    $clock.classList.add("section__clock--move")
  })

  $stopClock.addEventListener("click", () => {
    console.log("Reloj detenido")
    $startClock.removeAttribute("disabled")
    $stopClock.setAttribute("disabled", true)
    clearInterval(showClock)
    $clock.classList.remove("section__clock--move")
    setTimeout(() => {
      $clock.innerText = ""
    }, 300)
  })

  $startAlarm.addEventListener("click", () => {
    console.log("Alarma iniciada")
    $startAlarm.setAttribute("disabled", true)
    playAlarm = setInterval(() => {
      alarm.play()
    }, 100)
    $stopAlarm.removeAttribute("disabled")
  })

  $stopAlarm.addEventListener("click", () => {
    console.log("Alarma Detenida")
    $stopAlarm.setAttribute("disabled", true)
    $startAlarm.removeAttribute("disabled")
    clearInterval(playAlarm)
  })

}
