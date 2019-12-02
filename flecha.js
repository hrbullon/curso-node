//Función tradicional
function sumar(a, b){
    return a + b;
}

//Función de flecha tradicional
let restar = (a, b) => {
    return a - b;
}

//Función de flecha abreviada
let multiplicar = (a, b) => a * b;


//Ejercicio de función de flecha
let saludar = (nombre) => `Hola ${nombre}`;

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    } 
}

console.log(deadpool.getNombre());