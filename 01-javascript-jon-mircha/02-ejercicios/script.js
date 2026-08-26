import { countdown } from "/scripts/04-countdown.js";
import { scrollTop } from "/scripts/05-button-scroll.js"
import { menu } from "/scripts/01-menu-hamburguer.js"

document.addEventListener("DOMContentLoaded", () => {
  countdown("section__countdown")
  scrollTop("button-arrow")
  menu("button-burger", "menu")
})
