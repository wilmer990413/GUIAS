// 1.	En una sección de la página web construida en los módulos anteriores, permitir a un usuario almacenar y recuperar datos utilizando localStorage y sessionStorage. Demostrar cómo se puede guardar y recuperar datos de estas áreas de almacenamiento del navegador.
function guardarMensaje() {
    let mensaje = document.getElementById('mensaje').value;
    localStorage.setItem('mensaje', mensaje);
    sessionStorage.setItem('mensaje', mensaje);
    mostrarMensajeLocalStorage();
    mostrarMensajeSessionStorage();
}
function mostrarMensajeLocalStorage() {
    let mensajeLocalStorage = localStorage.getItem('mensaje');
    document.getElementById('mensajeLocalStorage').textContent = mensajeLocalStorage || 'No hay mensaje almacenado en localStorage.';
}
function mostrarMensajeSessionStorage() {
    let mensajeSessionStorage = sessionStorage.getItem('mensaje');
    document.getElementById('mensajeSessionStorage').textContent = mensajeSessionStorage || 'No hay mensaje almacenado en sessionStorage.';
}
mostrarMensajeLocalStorage();
mostrarMensajeSessionStorage();

// 2.	Escribir una función que utilice una promesa para simular una operación asincrónica, como, por ejemplo, una solicitud de datos. Luego, mostrar los resultados de la promesa en una sección en la página web.
function operacionAsincronica() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve('¡Operación asincrónica completada exitosamente!');
            } else {
                reject('¡Hubo un error en la operación asincrónica!');
            }
            }, 2000);
    });
}

function realizarOperacionAsincronica() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';
    resultadoElemento.textContent = 'Realizando operación asincrónica...';
        operacionAsincronica()
            .then((resultado) => {
                resultadoElemento.textContent = resultado;
            })
            .catch((error) => {
                resultadoElemento.textContent = error;
            });
}

// 3.	Crear una API falsa con JSON Server y realizar una solicitud GET y POST con Fetch o Axios y mostrar los resultados en una sección de la página web.
async function obtenerUsuarios() {
    try {
        const response = await axios.get('https://guiasbackend.onrender.com/usuarios');
        const usuarios = response.data;
        mostrarUsuarios('Datos de Usuarios Registrados:', usuarios);
    } catch (error) {
        console.error('Error al realizar la solicitud GET:', error);
    }
}

function mostrarUsuarios(titulo, datos) {
    const resultadosElemento = document.getElementById('usuarios');
    resultadosElemento.innerHTML += `<p><strong>${titulo}</strong></p><pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

function infoFormulario(){
    const username = document.getElementById('username').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    return {
        username: username,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        password: password
    };
}

function mostrarRegistrado(titulo, datos) {
    const resultadosElemento = document.getElementById('registrado');
    resultadosElemento.innerHTML = `<p><strong>${titulo}</strong></p><pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

async function enviarFormulario() {
    try {
        const data = infoFormulario();
        const response = await axios.post('https://guiasbackend.onrender.com/usuarios', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const nuevoUsuario = response.data;
        mostrarRegistrado('Usuario registrado:', nuevoUsuario);
    } catch (error) {
        alert('Error al registrar usuario:', error);
        console.error('Error al registrar usuario:', error);
    }
}

obtenerUsuarios();