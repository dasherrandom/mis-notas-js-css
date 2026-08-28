export function contentResponsive(idContainer, mediaQuerie, desktopContent, mobileContent) {
  const $container = document.getElementById(idContainer)
  const defineContent = window.matchMedia(mediaQuerie);
  console.log(defineContent)
  if (defineContent.matches) {
    $container.innerHTML = desktopContent
  } else {
    $container.innerHTML = mobileContent
  }
}
