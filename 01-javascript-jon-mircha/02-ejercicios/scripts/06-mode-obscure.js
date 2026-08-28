export function theme(classElement) {
  const $main = document.querySelector(`main`)
  const $button = document.querySelector(`.${classElement}`)
  console.log(localStorage.getItem("theme"))
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
  }
  function lightMode() {
    $main.classList.remove("main-dark")
    localStorage.setItem("theme", "light")
  }
  function darkMode() {
    $main.classList.add("main-dark")
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
