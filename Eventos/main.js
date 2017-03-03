function saludar() {
    alert('hola')
}

function saludar2() {
    document.write('Hola Documento')
}

var btnSaluda = document.getElementById('btn-saluda')
var btnSaluda2 = document.getElementById('btn-saluda-v2')

btnSaluda.onclick = saludar
btnSaluda2.addEventListener('click', saludar)
btnSaluda2.addEventListener('click', saludar2)