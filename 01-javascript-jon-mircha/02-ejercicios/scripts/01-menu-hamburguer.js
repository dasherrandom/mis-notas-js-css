// Menú de Hamburguesa

const $button = document.querySelector(".button")

const $menu = document.querySelector(".menu")

const $item = document.querySelectorAll(".menu__link")

$button.addEventListener("click", e => {
  $menu.classList.toggle("menu--active");
})

$menu.addEventListener("click", e => {
  const target = e.target
  if (target.classList.contains("menu__link")) {
    $menu.classList.remove("menu--active")
  }
})
