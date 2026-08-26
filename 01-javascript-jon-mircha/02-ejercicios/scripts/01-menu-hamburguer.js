// Menú de Hamburguesa

export function menu(buttonClass, menuClass) {
  const $button = document.querySelector(`.${buttonClass}`)
  const $menu = document.querySelector(`.${menuClass}`)
  $button.addEventListener("click", () => {
    $menu.classList.toggle("menu--active");
  })
  $menu.addEventListener("click", e => {
    const target = e.target
    if (target.classList.contains("menu__link")) {
      $menu.classList.remove("menu--active")
    }
  })
}
