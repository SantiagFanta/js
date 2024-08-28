// Selecciona el rectángulo por su ID
const rectangulo = document.getElementById('rectangulo');

// Posición inicial del rectángulo
let posicion = 0;
let down = true;

// Función para mover el rectángulo hacia abajo
function moverRectangulo() {
    if (down) {
        posicion += 5; // Incrementa la posición en 5 píxeles
    } else {
        posicion -= 5;
    }
    
    rectangulo.style.top = posicion + 'px'; // Aplica la nueva posición

    // Repite la animación
    requestAnimationFrame(moverRectangulo);
}

// Inicia el movimiento del rectángulo
moverRectangulo();

// Cambiar dirección al hacer clic derecho
rectangulo.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Evita que aparezca el menú contextual
    down = !down; // Cambia el sentido de la dirección vertical
});
