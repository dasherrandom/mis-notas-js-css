```

-- Bloque, Elemento y Modificador --

```
```
Es una metodologia usada para nombrar clases en CSS.
Esta se basa en la estructura Bloque, Elemento y Modificador (BEM),
cuya sintaxis es la concatenación de las clases de los bloques independientes, 
los elementos hijos y las clases modificadoras.

-> Objeto: son aquellos bloques independientes que no dependen de otros
elementos para existir, la clase generalmente lleva el nombre o la función
de dicho bloque. Ejemplo:

-- Aquí el nav es un bloque independiente, que lleva como clase su nombre.
<nav class="nav"></nav>

-> Elemento: son todos aquellos elementos que dependen de otro elemento
para poder existir. Son los elementos hijos de los bloques. Su clase va a ser
la concatenación de la clase de su objeto padre y el nombre del elemento. Ejemplo:

-- Aquí el div es un elemento hijo del objeto nav, por lo que la clase de dicho objeto
será la concatenación de la clase del objeto (nav), y el nombre del elemento (links es el
nombre del elemento o de su función principal)

<nav class="nav">
  <div class="nav__links">
    <a class="nav__link">Inicio</a>
  </div>
</nav>

-> Modificador: son aquellas clases que se usan para eventos o situaciones específicas
que modifican los estilos default de los elementos o los objetos. El nombre de la clase va a ser
la concatenación de bloque a modificar (o el elemento) junto al nombre del modificador. Ejemplo:

<nav class="nav">
  <div class="nav__links">
    <a class="nav__link">Inicio</a>
    <a class="nav__link nav__link--active">Registro</a> -> Aquí el modificador es la clase OG + --active
  </div>
</nav>



```
