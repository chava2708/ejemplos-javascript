//var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');
var caja = document.getElementById("primera");

caja.textContent = 'Primera caja'

//cajas[0].textContent = 'Hola mundo'
//cajas[1].innerHTML = '<b>Hola javaScript</b>'

//No se recomienda agregar elementos con el metodo write
//document.write('<div class="caja"> Nuevo elemento </div>')

//5 Pasos para agregar un nuevo elemento
//1)	Crear el elemento (createElement())
var elementoNuevo = document.createElement('div')

//2)	Crear el contenido (createTextNode())
var nodoContenido = document.createTextNode('Nuevo elemento')

//3)	Añadir el contenido al elemento (appendChild())
elementoNuevo.appendChild(nodoContenido)

//4)	Agregar atributos (setAttribute())
elementoNuevo.setAttribute('class','caja colorcoral')


//5)	Agregar el nuevo elemento al documento (appendChild())

//Agrega el elemento al final
//var contenedor = document.getElementById('contenedor')
//contenedor.appendChild(elementoNuevo)

//Agrega el nuevo elemento al princio
var contenedor = document.getElementById('contenedor')
var segunda = document.getElementById('segunda')
contenedor.insertBefore(elementoNuevo, segunda)

var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)


