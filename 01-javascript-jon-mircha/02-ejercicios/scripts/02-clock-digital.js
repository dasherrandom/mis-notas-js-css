const $startClock = document.getElementById("start_clock")
const $stopClock = document.getElementById("stop_clock")
const $startAlarm = document.getElementById("start_alarm")
const $stopAlarm = document.getElementById("stop_alarm")
const $clock = document.querySelector(".section__clock")

let showClock = null;
let playAlarm = null;

$stopAlarm.setAttribute("disabled", true)
$stopClock.setAttribute("disabled", true)

$startClock.addEventListener("click", e => {
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

$stopClock.addEventListener("click", e => {
  console.log("Reloj detenido")
  $startClock.removeAttribute("disabled")
  $stopClock.setAttribute("disabled", true)
  clearInterval(showClock)
  $clock.classList.remove("section__clock--move")
  setTimeout(() => {
    $clock.innerText = ""
  }, 300)
})

const alarm = new Audio("./../assets/alarm.mp3")

$startAlarm.addEventListener("click", e => {
  console.log("Alarma iniciada")
  $startAlarm.setAttribute("disabled", true)
  playAlarm = setInterval(() => {
    alarm.play()
  }, 100)
  $stopAlarm.removeAttribute("disabled")
})

$stopAlarm.addEventListener("click", e => {
  console.log("Alarma Detenida")
  $stopAlarm.setAttribute("disabled", true)
  $startAlarm.removeAttribute("disabled")
  clearInterval(playAlarm)
})

