// Puntos Practicos
// 1. Escribir un programa con JavaScript que resuelva el siguiente problema: 
// Dada una lista (o array) de números enteros, encontrar el número más grande 
// de la lista y mostrarlo en consola. No se debe usar la función Math.max(), ni .forEach().

function encontrarMaximo(lista) {
    let maximo = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];
        }
    }
    console.log('Punto 1.');
    console.log('El número más grande es:', maximo);
}
encontrarMaximo([4, 2, 8, 1, 5]);

// 2. Escribir una función en JavaScript que tome dos números como argumentos y devuelva su suma. 
// Luego, escribir la misma función utilizando una función flecha (arrow function) y comparar 
// ambas declaraciones. Llamar a ambas funciones con valores de ejemplo y mostrar los resultados
// en la consola del navegador.

function sumaTradicional(a, b) {
    return a + b;
}
const sumaFlecha = (a, b) => a + b;

function mostrarSumas() {
    console.log('Punto 2.');
    console.log('Funcion tradicional ->', sumaTradicional(3, 7));
    console.log('Funcion Flecha ->', sumaFlecha(3, 7));
}
mostrarSumas();

// 3. Escribir una función en JavaScript que reciba un array de números como argumento y utilizar 
// la función de array para calcular la suma de todos los números pares en el array. Luego, llamar
// a la función con un array de ejemplo y mostrar el resultado en la consola del navegador.

function sumaPares(array) {
    return array.filter(numero => numero % 2 === 0).reduce((acumulador, numero) => acumulador + numero, 0);
}

function mostrarSumaPares() {
    const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Punto 3.');
    console.log('La suma de los números pares es:', sumaPares(numerosEjemplo));
}
mostrarSumaPares();