// Selecciona el rectángulo por su ID
const rectangulo = document.getElementById('rectangulo');

// Posición inicial del rectángulo
let posicion = 0;
let moverHaciaAbajo = true


function moverRectangulo() {
    
    if (moverHaciaAbajo){
        posicion += 5; // Incrementa la posición en 5 píxeles
    }
    else{
        posicion -= 5;
    }
    
    rectangulo.style.top = posicion + 'px'; // Aplica la nueva posición

    // Repite la animación cada 20ms
    requestAnimationFrame(moverRectangulo);
}

// Inicia el movimiento del rectángulo
moverRectangulo();

function changeDirection(){
    if (moverHaciaAbajo===true){
        moverHaciaAbajo=false;
    }
    else{
        moverHaciaAbajo=true;
    }
}

