// Clase #1 - Crear elementos del DOM desde JS.

const $cards = document.querySelector(".cards") // -> Elemento section del HTML

// El método createElement permite crear elementos HTML y en este caso guardarlas en variables
const $figure = document.createElement("figure")
const $figcaption = document.createElement("figcaption")
const $img = document.createElement("img")

$figcaption.textContent = "Animals"
$img.setAttribute("src", "https://picsum.photos/id/1084/400/400")

// appendChild permite añadir elementos HTML hijos dentro de otros elementos HTML.
$figure.appendChild($img) // --> Añade el elemento img al figure
$figure.appendChild($figcaption) // --> Añade el elemento figcaption al figure

$figure.classList.add("card") // -> Añade la clase card al figure

$cards.appendChild($figure) // --> Añade el elemento figure al section .cards

// -------------------------------------------------------------------------------

// Crear fragmentos.

const paises = ["Venezuela", "México", "Argentina", "Colombia", "Guatemala", "Perú", "Brazil"].sort()

document.write(`<h3>Países del mundo</h3>`)

// Crea elemento ul.
const $ul = document.createElement("ul")

// Recorre el arreglo paises y los añade uno por uno al elemento ul.
paises.forEach(pais => {
  const $li = document.createElement("li")
  $li.textContent = pais
  $ul.appendChild($li)
})

// Añade el elemento ul al body.
document.body.appendChild($ul)

// El usar varias insercciones en el DOM causa mucho lag, es mejor usar un fragmento HTML que se utilice como contenedor de cada elemento que se va a añadir al DOM, y posteriormente es este fragmento el que se va a ingresar.

const juegos = ["Undertale", "Geometry Dash", "Minecraft", "Ultrakill", "Isaac"]

document.write(`<h3>Buenos Juegos</h3>`)

const $ul2 = document.createElement("ul")
const $fragmento = document.createDocumentFragment() // --> Creamos el fragmento que va a almacenar temporalmente los elementos HTML creados a partir del array Juegos

juegos.forEach(juego => {
  const $li = document.createElement("li")
  $li.textContent = juego
  $fragmento.appendChild($li) // -> Se añade el elemento li al fragmento
})

$ul2.appendChild($fragmento) // --> Añadimos el fragmento (que contiene los elementos li) al ul
document.body.appendChild($ul2) //--> Añadimos el ul al body

// -------------------------------------------------------------------------

// Clase #2 - Templates HTML

// Creamos un arreglo con personajes de Jojos deidad
const jojos = [
  {
    name: "Jonathan Joestar",
    img: "img/jonathan.jpeg"
  },
  {
    name: "Jotaro Kujo",
    img: "img/jotaro.jpeg"
  },
  {
    name: "Giorno Giovanna",
    img: "img/giorno.jpeg"
  },
  {
    name: "Jolyne Kujo",
    img: "img/jolyne.jpeg"
  },
]

// Tomamos el template creado en HTML. Un template es como una estructura formada por etiquetas HTML que no se visualiza en el DOM. Se usa como molde para crear otros elementos. En este caso obtenemos el template con el ID "jojos-template", pero solo el contenido, no nos importa toda la etiqueta template.
const $template = document.getElementById("jojos-template").content;
const $fragment2 = document.createDocumentFragment()

jojos.forEach(jojo => {
  $template.querySelector("img").setAttribute("src", jojo.img); // --> Modificamos la imagen que tiene el template (atributo src)
  $template.querySelector("img").setAttribute("alt", jojo.name) // --> Modificamos la imagen que tiene el template (atributo alt)
  $template.querySelector("figcaption").textContent = jojo.name; // --> Modificamos el contenido de texto del figcaption que contienen el template
  const copy = document.importNode($template, true) // --> Creamos una copia del contenido del template para más adelante reutilizarlo 
  $fragment2.appendChild(copy) // --> Añadimos la copia al fragmento creado
})

// Añadimos el fragmento con todas las etiquetas figure en el body.

document.body.appendChild($fragment2)

// --------------------------------------------------------------

// Clase #3 - Crear elementos (Old Style)

$newCard = document.createElement("figure")
$newCard.innerHTML = `
  <img src="https://picsum.photos/seed/picsum/400/400">
  <figcaption>Ambiente</figcaption>
`
$newCard.classList.add("card")

// El método replace reemplaza un elemento hijo por otro.
// $cards.replaceChild($newCard, $cards.children[2])

// El método insertBefore toma como referencia un hijo del elemento padre y posiciona el nuevo elemento antes de este.
$cards.insertBefore($newCard, $cards.firstElementChild)

// El método removeChild elimina un elemento hijo del elemento padre.
$cards.removeChild($cards.lastElementChild)

// El método cloneNode clona el nodo correspondiente. Usa el parámetro true para validar si se desea clonar el contenido o no.
const $cloneCard = $cards.cloneNode(true)
document.body.appendChild($cloneCard)

// ----------------------------------------------------------------------

// Clase #4 - Crear elementos (Cool Style)

const $newCard2 = document.createElement("figure")
const contentHTML = `
  <img src="https://picsum.photos/seed/picsum/200/300">
  <figcaption></figcaption>
`
$newCard2.classList.add("card")

// Existen los métodos insertAdjacent... que permiten insertar distinto elementos en 4 posibles posiciones:
// Tipos de elementos: Texto (insertAdjacentText), Elemento (insertAdjacentElement), HTML (insertAdjacentHTML)
// Posiciones:
// -> beforebegin (Como hermano anterior)
// -> afterbegin (Como primer hijo)
// -> beforeend (Como último hijo)
// -> afterend (Como hermano siguiente)

// Inserta a $newCard2 un nuevo elemento HTML como primer hijo.
$newCard2.insertAdjacentHTML("afterbegin", contentHTML)

// Inserta al figcaption de $newCard2 un texto como primer hijo.
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Paisaje 200x300")

// Inserta a $cards un nuevo elemento ($newCard2) como primer hijo. 
$cards.insertAdjacentElement("afterbegin", $newCard2)

