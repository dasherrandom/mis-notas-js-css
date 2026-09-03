export function geolocation(classElemenet) {
  const $container = document.querySelector(`.${classElemenet}`)
  navigator.geolocation.getCurrentPosition(
    (position) => {
      $container.innerHTML = `
        <h3>Latitud: <mark>${position.coords.latitude}</mark></h3>
        <h3>Longitud: <mark>${position.coords.longitude}</mark></h3>
        <h3>Precisión: <mark>${position.coords.accuracy}</mark></h3>
        <a target="_blank" href="https://google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}">Ver ubicación en Google Maps</a>
        `
    },
    (error) => {
      $container.innerHTML = `<mark>Error: ${error}</mark>`
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    }
  )
}
