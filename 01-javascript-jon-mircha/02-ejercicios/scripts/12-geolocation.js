export function geolocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitud: ", position.coords.latitude)
      console.log("Longitud: ", position.coords.longitude)
      console.log("Precisión: ", position.coords.accuracy)
      window.open(`https://google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}`, "_blank")
    },
    (error) => {
      console.error("Error: ", error.message)
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  )
}
