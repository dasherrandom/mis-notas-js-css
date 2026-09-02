import { menu } from "/scripts/01-menu-hamburguer.js"
import { clockDigital } from "./scripts/02-clock-digital.js";
import { gameKeyboard } from "./scripts/03-game-keyboard.js";
import { countdown } from "/scripts/04-countdown.js";
import { scrollTop } from "/scripts/05-button-scroll.js"
import { theme } from "./scripts/06-mode-obscure.js";
import { contentResponsive } from "./scripts/07-content-responsive.js";
import { responsiveTester } from "./scripts/08-responsive-tester.js";
import { userAgent } from "./scripts/09-user-agent.js";
import { statusNetwork } from "./scripts/10-network-status.js";
import { detectWebcam } from "./scripts/11-detection-webcam.js";

document.addEventListener("DOMContentLoaded", () => {
  menu("button-burger", "menu")
  clockDigital("start_clock", "stop_clock", "start_alarm", "stop_alarm", "section__clock")
  gameKeyboard("circle", "map", "section3", "section4")
  countdown("section__countdown")
  scrollTop("button-arrow")
  theme("button-oscure")
  contentResponsive("content-MQ",
    "(min-width:1024px)",
    `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU?si=c4Ei18M4fQxnvwbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/aNeEreY5yIY?si=a5_T67OPEwi17PFx" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy = "strict-origin-when-cross-origin" allowfullscreen ></iframe >`,
    `
  <a href="https://www.youtube.com/embed/2SetvwBV-SU?si=c4Ei18M4fQxnvwbj">Curso de JS - Jonathan Mircha</a>
  <a href=https://www.youtube.com/embed/aNeEreY5yIY?si=a5_T67OPEwi17PFx>Playlist para programar (por alguna razón tiene a Mr. Robot)</a>

  `)
  responsiveTester("form", "height", "width", "url")
  userAgent("section__userAgent")
  statusNetwork("status")
  detectWebcam("video")
})
