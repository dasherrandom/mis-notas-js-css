export function theme(classElement) {
  const $main = document.querySelectorAll(`[data-dark]`)
  const $button = document.querySelector(`.${classElement}`)
  console.log(localStorage.getItem("theme"))
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
  }
  function lightMode() {
    $main.forEach(elemento => {
      elemento.classList.remove("dark")
    })
    localStorage.setItem("theme", "light")
  }
  function darkMode() {
    $main.forEach(elemento => {
      elemento.classList.add("dark");
    })
    localStorage.setItem("theme", "dark")
  }
  if (localStorage.getItem("theme") == "light") {
    lightMode()
  }
  if (localStorage.getItem("theme") == "dark") {
    darkMode()
  }
  $button.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "light") {
      darkMode()
    } else {
      lightMode()
    }
  })
}
