// // Clase #1 - Propiedades y métodos del BOM (Browser Object Model).
//
// // Evento al redimensionar la página
// // window.addEventListener("resize", (e) => {
// //   console.clear()
// //   console.log(window.innerWidth) // --> Ancho de la ventana.
// //   console.log(window.innerHeight) // --> ALto de la ventana
// //   console.log(window.outerWidth) // --> Ancho del navegador
// //   console.log(window.outerHeight) // --> Alto del navegador
// //   console.log(window.scrollX)
// //   console.log(window.scrollY)
// //   console.log(e)
// // })
//
// // Evento al hacer scroll
// // window.addEventListener("scroll", (e) => {
// //   console.clear()
// //   console.log("------------ Evento Scroll ------------")
// //   console.log(window.scrollY) // -> Distancia en px del scrollY con respecto al margen superior del navegador
// //   console.log(window.scrollX) // -> Distancia en px del scrollX con respecto al margen izquierdo del navegador
// // })
//
// // Evento al cargarse por completo la página (HTML + CSS + Recursos + Imágenes)
// // window.addEventListener("load", (e) => {
// //   console.log("------- Evento Load ---------")
// //   console.log(window.screenY)
// //   console.log(window.screenX)
// //   console.log(e)
// // })
//
// // Evento al cargarse por completo el DOM (documento HTML)
// // document.addEventListener("DOMContentLoaded", e => {
// //   console.log("------- Evento DOMContentLoaded ---------")
// //   console.log(window.screenY)
// //   console.log(window.screenX)
// //   console.log(e)
// // })
//
// // --------------------------------------------
//
// // Clase #2 - Métodos
//
// // window.alert("Mensaje + Botón de aceptar")
// // window.confirm("Mensaje + Botón de aceptar y cancelar (true y false)")
// // window.prompt("Mensaje + Botón de aceptar y cancelar + Valor ingresado por el usuario")
//
// // Cuando te refieres a objetos o métodos de window, no es necesario expresarlo
//
// const $botonAbrir = document.getElementById("abrir-ventana"),
//   $botonCerrar = document.getElementById("cerrar-ventana"),
//   $botonImprimir = document.getElementById("imprimir-ventana")
//
// let ventana;
//
// $botonAbrir.addEventListener("click", e => {
//   ventana = window.open("https://github.com") // -> Abre una nueva ventana y la guarda en ventana.
// })
// $botonCerrar.addEventListener("click", e => {
//   ventana.close(); // -> Tomando la referencia de ventana, cerramos dich ventana (parece que no funciona bien en Firefox)
// })
// $botonImprimir.addEventListener("click", e => {
//   window.print() // -> Imprime dicha ventana o sitio
// })

// -----------------------------------------------------------

// Clase #3 - URLs,  Historial y navegador

// Objeto location

// console.log(location) // -> Objeto URLs
// console.log(location.origin) // -> Origen o ruta de la cual se origina
// console.log(location.protocol) // -> Protocolo http o https
// console.log(location.host) // -> Host o dominio junto al puerto
// console.log(location.hostname) // -> Lo mismo que el host pero sin el puerto
// console.log(location.port) // -> El puerto
// console.log(location.href) // -> URL completo
// console.log(location.hash) // -> ID o ancla interna 
// console.log(location.pathname) // -> Ruta actual
// console.log(location.search) // -> Paso de parámetros por la URL (método GET en PHP)
// console.log(location.reload()) // -> Método que recarga la página

// Objeto Historial

// console.log(history.length) // -> Páginas visitadas
// history.back(3) // -> El método back devuelve la cantidad de páginas especificadas desde la página actual, tomando en cuenta el historial
// history.forward() // -> Vuelve hacia adelante la cantidad de páginas especificadas desde la página actual, tomando en cuenta el historial
// history.go() // -> Es una combinación del back y el forward (<- negativos | positivos ->)

// Objeto Navigator

console.log(navigator)
console.log(navigator.connection) // -> No lo soporta Firefox
console.log(navigator.geolocation) // -> Devuelve el objeto geolocation que permite acceder a datos de la posición geográfica del dispositivo del usuario
console.log(navigator.mediaDevices) // Devuelve el objeto mediaDevices el cual permite acceder a datos de los dispositivo del hardware
console.log(navigator.mimeTypes) // -> Permite acceder a los tipos de formatos que los plugins del navegador soportaban (prácticamente está muerto)
console.log(navigator.onLine) // -> Devuelve un boolean si el dispositivo está conectado o no a la red
console.log(navigator.serviceWorker) // -> Permite ir y comunicarse con un service Worker (un script que puede correr en el fondo de mi navegador separado de mi página web)
console.log(navigator.storage) // -> Permite acceder al almacenamiento del navegador
console.log(navigator.usb)
console.log(navigator.userAgent) // -> Devuelve un string con información del browser y del OS.
