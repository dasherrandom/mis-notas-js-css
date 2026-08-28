export function contentResponsive(idContainer, mediaQuerie, desktopContent, mobileContent) {
  const $container = document.getElementById(idContainer)
  const defineContent = window.matchMedia(mediaQuerie);
  const changeContent = () => {
    console.log(defineContent)
    if (defineContent.matches) {
      $container.innerHTML = desktopContent
    } else {
      $container.innerHTML = mobileContent
    }
  }
  changeContent()
  defineContent.addEventListener("change", () => {
    changeContent()
  })
}
