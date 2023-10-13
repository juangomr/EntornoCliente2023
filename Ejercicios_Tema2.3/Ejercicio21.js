function cambiaColor() {
    let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let color = "rgb(" + r + "," + g + "," + b + ")";
    return color;
}

function cambiarPosicionT() {
    let t = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
    let top = t + "px";
    return top;
}

function cambiarPosicionL() {
    let l = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
    let left = l + "px";
    return left;
}

function crearCuadrado() {

    var cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    cuadrado.style.backgroundColor = cambiaColor();
    cuadrado.style.top = cambiarPosicionT();
    cuadrado.style.left = cambiarPosicionL();
    document.body.appendChild(cuadrado);
}

for (let index = 0; index <= 2000; index++) {
    crearCuadrado();
}

