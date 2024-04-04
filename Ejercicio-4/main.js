
// Ejercicio 4

function elElegido() {


const input = document.getElementById('inputValue')
const mensaje = document.getElementById('mensajePantalla')
const imagen = document.getElementById('imagenTransporte')


const transporteElegido = input.value.toLowerCase();

if ( transporteElegido === 'barco'){
    mensaje.textContent = 'Espero no marees'
    imagen.src = '/img/barco.jpg'
    colorFondo('blue')
} else if (transporteElegido === 'bicicleta') {
    mensaje.textContent = 'Ánimo Indurain!'
    imagen.src = '/img/bike.jpg'
    colorFondo('gray')
} else if (transporteElegido === 'locomotora') {
    mensaje.textContent = 'Al anden 9 3/4 Harry!'
    imagen.src = '/img/train.jpg'
    colorFondo('red')
} else {
    mensaje.textContent = 'Pues nos vamos caminando'
    imagen.src = '/img/otros.jpg'
    colorFondo('green')
}


function colorFondo(color) {
    document.body.style.backgroundColor = color;
}
}