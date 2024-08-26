// Selecciona el rectángulo por su ID
const rectangulo = document.getElementById('rectangulo');

// Posición inicial del rectángulo
let posicion = 0;
let right = true;
// Función para mover el rectángulo hacia la derecha
function moverRectangulo() {
    
    if (right){
        posicion += 5; // Incrementa la posición en 5 píxeles
    }
    else{
        posicion -= 5;
    }
    
    rectangulo.style.left = posicion + 'px'; // Aplica la nueva posición

    // Repite la animación cada 20ms
    requestAnimationFrame(moverRectangulo);
}

// Inicia el movimiento del rectángulo
moverRectangulo();

function changeDirection(){
    if (right===true){
        right=false;
    }
    else{
        right=true;
    }
}

