// Clase 1 - Event Handler
// Es una función que se va a ejecutar cuando cierta acción u evento ocurra.

function saludar() {
  alert("Bienvenido. Esto es una función disparada por un evento semántico")
}

// Esta es una forma correcta de usar funciones en eventos, a diferencia de usar el atributo on${evento}
const $botonSemantico = document.getElementById("evento-semantico");

console.log("Asignación de la función saluda al evento onclick")
$botonSemantico.onclick = saludar

console.log($botonSemantico.onclick)
// La desventaja es que no puedes ejecutar múltiples funciones debido a que el evento se va a reescribrir de una vez.

console.log("Asignación de la segunda función al evento onclick")
$botonSemantico.onclick = () => {
  alert("Hola, esta es la segunda función del evento. Como vez de ejecuta de primero porque el sobreescribió su función anterior por esta")
}

console.log($botonSemantico.onclick)

// Para poder usar múltiples funciones en eventos puedes usar el método addEventListener

const $eventoMultiple = document.getElementById("evento-listener")

$eventoMultiple.addEventListener("click", () => {
  alert("Hola, esta es la primera función ejecutada por el addEventListener. Próximamente verás la segunda")
})

$eventoMultiple.addEventListener("click", (e) => {
  alert("Esta es la segunda función ejecutada por el addEventListener. En la consola podrás ver las propiedades del evento")
  // El parámetro que recibe la callback es el evento en sí. Puedes acceder a sus propiedades con event o definirle un nombre en los paréntesis y usarlo con ese nombre (lo más normal es usar la abreviación "e")
  console.log(event.target) // -> Elemento que generó el evento
  console.log(event.type) // -> Tipo de evento
  console.log("Tipo de evento con el nombre e: ", e.type)
})

// ---------------------------------------------------------------------------------

// Clase #2 - Pasar parámetros a una callback de un evento y remover eventos (desabilitarlos)

const $eventoParametros = document.getElementById("evento-parametros")

function saludarNombre(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`)
  console.log(event)
}

// A pesar de no haber definido un parámetro, la callback siempre va a recibir un único parámetro, el evento en sí. Es por eso que la función imprimirá el nombre del evento
$eventoParametros.addEventListener("click", saludarNombre)

// Para poder definir parámetros no hay que colocar la función que recibe el parámetro como el event Handler sino como una función que ejecutará el Event Handler

$eventoParametros.addEventListener("click", (e) => {
  saludarNombre() // -> Aquí si ejecutará correctamente el "Hola Desconocid@" porque al no ser el event Handler no recibe como único parámetro el evento, sino que los parámetros que nosotros definamos en está función
  saludarNombre(e) // -> Aquí imprimirá el evento porque forzadamente lo pasamos como parámetro 
  saludarNombre("Alan")
})

// Para remover un evento y evitar que el Event Handler se ejecuté continuamente existe el método removeEventListener que recibe como parámetros el evento y el Event Handler de dicho evento

// Recuerda que el segundo parámetro recibe el Event Handler que se va eliminar, pero no hay forma de definir que se elimine el event Handler en el que se está en este preciso momento. Por lo que no funcionará al nio existir dicho parámetro 
// $eventoParametros.addEventListener("click", (e) => {
//   alert("El evento se 'sobrecargó')?. Autoeliminación")
//  //   $eventoParametros.removeEventListener("click")
// })

// Para hacer que tenga "sentido", debes definir el Event Handler con anterioridad (no puede ser anónimo ni Arrow Function). Y de forma recursiva, borrar el Event Handler dentro del mismo (muy fumado la verdad)

const $eventoRemove = document.getElementById("evento-remove")
function eliminarHandler() {
  saludarNombre()
  alert("El evento se 'sobrecargó')?. Autoeliminación")
  $eventoRemove.removeEventListener("click", eliminarHandler)
}

// Al ejecutar el eliminarHandler, se elimina internamente el event handler de forma recursiva
$eventoRemove.addEventListener("click", eliminarHandler)
