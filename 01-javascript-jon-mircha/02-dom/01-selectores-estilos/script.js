// ------- MANEJO DEL DOM --------

// // ------------ OBSOLETOS ----------------
// // --> Devuelve elementos por nombre de etiqueta
//
// console.log(document.getElementsByTagName("li"))
// // --> Devuelve elementos por nombre de clase 
// console.log(document.getElementsByClassName("card"))
//
// // --> Devuelve elementos por nombre del name
// console.log(document.getElementsByName("nombre"))
//
// // ------------ REEMPLAZOS DE LOS ANTERIORES -----------------
//
// // --> Selecciona un elemento en base a un selector (solo trae el primero) - Devuelve Node List
// console.log(document.querySelector("#menu"))
//
// // --> Selecciona un elemento en base a un selector (trae todos) - Devuelve Node List
// console.log(document.querySelectorAll("li"))
//
// // --> Se puede aplicar el método forEach para las Node List
// document.querySelectorAll("li").forEach(element => console.log(element))
//
// // --> Los node list son iterables y se puede acceder a sus elementos como un array
// console.log(document.querySelectorAll(".card")[1])
//
// console.log(document.querySelector("#menu li")) // (Se pueden anidar los selectores)
//
// // --> Selecciona por IDs
// console.log(document.getElementById("menu"))


// // --------------- MANEJO DE ATRIBUTOS -----------------
//
// // --> Acceder al atributo lang de la etiqueta HTML
// console.log(document.documentElement.lang)
//
// // --> Trae exactamente el contenido del atributo
// console.log(document.documentElement.getAttribute("lang"))
//
// // --> Cambia el valor del atributo
// document.documentElement.setAttribute("lang", "es-MX")
// console.log(document.documentElement.lang)
//
// // --> Puedes guardar elementos en variables
// const $linkDOM = document.querySelector(".link-dom")
//
// // --> Cambiar o crear atributos
// $linkDOM.setAttribute("target", "_blank")
//
// $linkDOM.setAttribute("href", "dom.html")
//
// // --> Eliminar atributos de los elementos
// $linkDOM.removeAttribute("target")
//
// // --> Comprobar si existe un atributo
// console.log($linkDOM.hasAttribute("href"))
// console.log($linkDOM.hasAttribute("data-description"))
//
// console.log($linkDOM.dataset.description)
//
// $linkDOM.setAttribute("data-description", "Nueva descripcion mediante SetAttribute")
// console.log($linkDOM.getAttribute("data-description"))
//
// console.log($linkDOM.hasAttribute("data-description"))
// console.log($linkDOM)


// // ------------- ESTILOS Y VARIABLES ---------------
//
// const $linkDOM = document.querySelector(".link-dom")
//
// // --> Accede al contenido del atributo style
// console.log($linkDOM.getAttribute("style"))
//
// // --> Accede a la propiedad style del elemento (debes especificar el estilo)
// console.log($linkDOM.style.color)
//
// // --> Muestra la interpretación del navegador con respecto a las propiedades del elemento
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"))
//
// // --> Puedes usar setProperty para cambiar propiedades
// $linkDOM.style.setProperty("text-decoration", "none")
// $linkDOM.style.setProperty("display", "block")
//
// // --> Usar directamente la propiedad style y modificar las distintas propiedades CSS
// $linkDOM.style.width = "50%"
// $linkDOM.style.textAlign = "center"
// $linkDOM.style.marginLeft = "auto"
// $linkDOM.style.marginRight = "auto"
// $linkDOM.style.padding = "1rem"
// $linkDOM.style.borderRadius = "0.5rem"
//
//
// const $html = document.documentElement
// $body = document.body
//
// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-text")
// let yellowJS = getComputedStyle($html).getPropertyValue("--yellow-js")
//
// console.log(varDarkColor, yellowJS)
//
// $body.style.backgroundColor = varDarkColor
// $body.style.color = yellowJS
//
// $html.style.setProperty("--dark-text", "black")
//
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-text")
//
// $body.style.setProperty("background-color", varDarkColor)


// // -------------- CLASES CSS -----------------
//
// const $card = document.querySelector(".card")
//
// console.log($card)
//
// // --> Devuelve una lista con todas las clases del elemento $card
// console.log($card.classList)
//
// // --> Devuelve el contenido del atributo class
// console.log($card.className)
//
// // --> Devuelve un boolean si existe o no la clase
// console.log($card.classList.contains("rotate-45"))
//
// // --> Añade una clase al elemento
// $card.classList.add("rotate-45")
//
// console.log($card.classList.contains("rotate-45")) // --> Devuelve true
//
// // --> Elimina una clase del elemento
// $card.classList.remove("rotate-45")
// console.log($card.classList.contains("rotate-45")) // --> Devuelve false
//
// // --> Añade o elimina la clase de forma dinámica
// $card.classList.toggle("rotate-45") // --> SI no la tiene se la pone
// console.log($card.classList.contains("rotate-45"))
//
// $card.classList.toggle("rotate-45") // --> Si la tiene, la elimina
// console.log($card.classList.contains("rotate-45"))
//
// $card.classList.toggle("rotate-45")
//
// // --> Reemplaza la clase especificada (primer parámetro), por otra (segundo parámetro)
// $card.classList.replace("rotate-45", "rotate-135")
//
// // --> Puedes agregar varias clases a la vez
// $card.classList.add("opacity-80", "sepia")
//
// // --> Puedes eliminar varias clases a la vez
// $card.classList.remove("opacity-80", "sepia")
//
// // --> Puedes usar el toogle en varias clases
// $card.classList.toggle("opacity-80", "sepia")


// // ------------------- TEXTO EN DOM -------------------
//
// const $textoDOM = document.getElementById("que-es")
// let texto = `El DOM (Document Object Model o Modelo de Objetos del Documento) es una representación en memoria que hace el navegador web de una página HTML. Convierte cada etiqueta en un objeto o nodo con forma de árbol, permitiendo que lenguajes como JavaScript lean, creen, cambien o borren contenido en tiempo real.Qué hace el DOMRepresenta la estructura: Toma el código HTML y lo organiza como un árbol genealógico de padres e hijos.Conecta con lenguajes: Permite que programas externos (como JavaScript) interactúen con la página web.Actualiza la pantall`
//
// let textoHTML = `<h1>¿Qué es el DOM?</h1>
//
// <p>
//   El <strong>DOM</strong> (<em>Document Object Model</em> o Modelo de Objetos del Documento) es una representación en memoria que hace el navegador web de una página HTML. Convierte cada etiqueta en un objeto o nodo con forma de árbol, permitiendo que lenguajes como <code>JavaScript</code> lean, creen, cambien o borren contenido en tiempo real.
// </p>
//
// <h2>¿Qué hace el DOM?</h2>
//
// <ul>
//   <li><strong>Representa la estructura:</strong> Toma el código HTML y lo organiza como un árbol genealógico de padres e hijos.</li>
//   <li><strong>Conecta con lenguajes:</strong> Permite que programas externos (como <code>JavaScript</code>) interactúen con la página web.</li>
//   <li><strong>Actualiza la pantalla:</strong> Deja ver cambios dinámicos sin necesidad de recargar el sitio completo.</li>
// </ul>
//
// <h2>¿Para qué sirve?</h2>
//
// <ul>
//   <li><strong>Modificar textos:</strong> Cambiar el contenido de un título o párrafo.</li>
//   <li><strong>Editar estilos:</strong> Cambiar colores, tamaños o diseños en línea.</li>
//   <li><strong>Manejar eventos:</strong> Reaccionar cuando el usuario hace clic en un botón.</li>
//   <li><strong>Añadir o quitar elementos:</strong> Poner nuevas imágenes o borrar bloques enteros de la página.</li>
// </ul>`
// // --> Desactualizado (inserta el texto en el elemento)
// $textoDOM.innerText = texto
//
// // --> El estándar (inserta el texto en el elemento)
// $textoDOM.textContent = texto
//
// // --> Inserta HTML en el elemento
// $textoDOM.innerHTML = textoHTML
//
// // --> Reemplaza el elemento por el nuevo
// $textoDOM.outerHTML = textoHTML


// // ------------- DOM Traversing (elementos o etiquetas del DOM) ----------------
//
// const $cards = document.querySelector(".cards")
// console.log($cards)
//
// // --> Imprime los elementos HTML hijos del elemento Cards
// console.log($cards.children)
//
// // --> Imprime el elemento HTML hijo en la posición 2 en la lista de elementos hijos de Cards
// console.log($cards.children[2])
//
// // --> Imprime el elemento padre de Cards
// console.log($cards.parentElement)
//
// // --> Imprime el primer elemento hijo de Cards
// console.log($cards.firstElementChild)
//
// // --> Imprime el último elemento hijo de Cards
// console.log($cards.lastElementChild)
//
// // --> Imprime el anterior elemento o hermano de Cards
// console.log($cards.previousElementSibling)
//
// // --> Imprime el siguiente elemento o hermano de Cards
// console.log($cards.nextElementSibling)
//
// // --> Imprime el próximo elemento "body" padre de Cards
// // closest() imprime el padre más cercano del tipo de elemento que le especifiques como parámetro
// console.log($cards.closest("body"))
//
// // --> Se pueden anidar los métodos
// // En este caso busca primero el elemento hijo en la posicion 2 de Cards para posteriormente con closest() buscar el elemento padre más cercano del tipo section para el children[2] (el elemento Cards)
// console.log($cards.children[2].closest("section"))
