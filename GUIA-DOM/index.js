// 1. Escribir una función en JavaScript que tome un botón en el DOM y, al hacer click en él, cambie el color de fondo de un elemento específico en la página. Luego, agregar el botón y el elemento objetivo en el DOM y asociar la función al evento “click”.

function cambiarColor() {
    let elementoObjetivo = document.getElementById('elemento-objetivo');
    elementoObjetivo.style.backgroundColor = getRandomColor();
}

let botonCambiarColor = document.getElementById('boton-cambiar-color');

botonCambiarColor.addEventListener('click', cambiarColor);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 2. Crear una lista no ordenada de elementos (por ejemplo, elementos de lista) en el DOM. Implementar la delegación de eventos (event delegation) para que, al hacer clic en cualquier elemento de la lista, se muestre un mensaje en la consola que indique qué elemento de la lista se ha hecho clic.

let lista = document.getElementById('lista');
lista.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Elemento clicado:', event.target.textContent);
    }
});

// 3. Agregar un formulario a tu página web con un campo de entrada y un botón "Enviar". Implementar una función que sea llamada al enviar el formulario y que valide el campo de entrada (por ejemplo, si está vacío), muestre un mensaje de error accesible si es necesario y en caso de que el formulario esté correctamente diligenciado muestre en consola un objeto con el dato que ha ingresado el usuario en el campo de entrada y un alert con el siguiente mensaje: “Formulario correctamente diligenciado”.

let formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let valorCampo = document.getElementById('campoEntrada').value;
    if (valorCampo.trim() === '') {
        alert('Por favor, complete el campo de entrada.');
    } else {
        console.log({ campoEntrada: valorCampo });
        alert('Formulario correctamente diligenciado');
    }
});