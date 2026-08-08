// Datos de los contenedores con los temazos

const musica = [
  {
    name: "Boys Dont Cry",
    author: "The Cure",
    pathImg: "img/boys_dont_cry.jpg",
    link: "https://youtu.be/9GkVhgIeGJQ?si=5K2KYQ0BcvsLOvE-",
  },
  {
    name: "My Iron Lung",
    author: "Radiohead",
    pathImg: "img/iron_lung.jpg",
    link: "https://youtu.be/pRU-6vaKaf4?si=L15sdlVQrVcLyEA3",
  },
  {
    name: "Jane",
    author: "The Long Faces",
    pathImg: "img/jane.jpg",
    link: "https://youtu.be/HydkjjDNTmY?si=uBhznHZd0lAP3hWe",
  },
  {
    name: "Jigsaw Falling Into PLace",
    author: "Radiohead",
    pathImg: "img/jigsaw_falling.jpg",
    link: "https://youtu.be/GoLJJRIWCLU?si=lZY4f8W2XoOmrTBf",
  },
  {
    name: "Termonuclear",
    author: "Perfecto Miserable",
    pathImg: "img/termonuclear.jpg",
    link: "https://youtu.be/_AhT4W8pEww?si=VR-VSboJyPy1p9VQ",
  },
  {
    name: "The Love I Lost",
    author: "Fried by Fluoride",
    pathImg: "img/love_lost.jpg",
    link: "https://youtu.be/hNDco3XaFY0?si=56rvHZ39H5HHT2pC"
  },
]

// Atrapamos el contenedor, el template y creamos el fragmento.
const $containerMusica = document.getElementById("container-music");
const $template = document.getElementById("template-music").content;
const fragment = document.createDocumentFragment();

musica.forEach(musica => {
  // Modificamos los elementos del template en base al array
  $template.querySelector("div").classList.add("card")
  $template.querySelector("img").setAttribute("src", musica.pathImg);

  $template.querySelector("img").classList.add("portada");

  $template.querySelector("h3").textContent = musica.name;

  $template.querySelector("#card").style.backgroundColor = "#fff"

  $template.querySelector("h4").textContent = musica.author;
  //Creamos la copia del template la vamos a insertar en el fragmento
  const copyTemplate = document.importNode($template, true)
  fragment.appendChild(copyTemplate)
})

$containerMusica.appendChild(fragment)

