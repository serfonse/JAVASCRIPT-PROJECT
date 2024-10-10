// Módulo 1: Fundamentos de JavaScript (Nivel Básico)

// Uso de la etiqueta <script>
let nombre = "Juan"; // Variable de tipo string
const PI = 3.14; // Constante

// Tipos de Datos y Operadores
let x = 10;
let y = 5;
let suma = x + y; // 15

// Condicionales
let edad = 18;
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

// Bucles (Loops)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Funciones
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("María"));

// Módulo 2: Interactuando con el DOM (Nivel Intermedio)

// Cambiar el título
document.getElementById('cambiarTitulo').addEventListener('click', function() {
    document.getElementById('titulo').textContent = 'Título Modificado';
});

// Validación de formularios
document.getElementById('registro').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombreInput = document.getElementById('nombre').value;
    const lista = document.getElementById('listaResultados');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreInput;
    lista.appendChild(nuevoElemento);
});

// Módulo 3: Funcionalidades Avanzadas (Nivel Intermedio)

// Arrays y Métodos de Arrays
let numeros = [1, 2, 3, 4, 5];
document.getElementById('doblarNumeros').addEventListener('click', function() {
    let dobles = numeros.map(num => num * 2);
    document.getElementById('resultadoDobles').textContent = `Números doblados: ${dobles.join(', ')}`;
});

// Objetos en JavaScript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("¡Guau!");
    }
}

// Crear un perro
document.getElementById('crearAnimal').addEventListener('click', function() {
    const miPerro = new Perro("Firulais");
    miPerro.ladrar(); // Salida: ¡Guau!
});

// Módulo 4: Programación Asíncrona (Nivel Avanzado)

// Uso de async/await
async function obtenerDatos() {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        let datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
obtenerDatos();
