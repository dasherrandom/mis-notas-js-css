export function responsiveTester(form, heightInput, widthInput, urlInput) {
  const $form = document.getElementById(form);
  $form.addEventListener("submit", e => {
    e.preventDefault()
    const regex = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/
    const url = document.getElementById(urlInput).value;
    const height = document.getElementById(heightInput).value || 0;
    const width = document.getElementById(widthInput).value || 0;
    if (height < 100 || width < 100) {
      alert("Ingrese un ancho y alto válidos")
      return;
    }
    if (!url || regex.test(url) == false) {
      alert("Ingrese una URL válida")
      return;
    }
    window.open(url, "_blank", `width=${width},height=${height}`)
  })
}
