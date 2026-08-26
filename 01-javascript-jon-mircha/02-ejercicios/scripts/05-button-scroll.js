export function scrollTop(elementHTML) {
  const $button = document.querySelector(`.${elementHTML}`)
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 450) {
      $button.classList.add("button-arrow-active")
    }
    else {
      $button.classList.remove("button-arrow-active")
    }
  })
  $button.addEventListener("click", () => {
    window.scrollTo(0, 0)
  })
}
