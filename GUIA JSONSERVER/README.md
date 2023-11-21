
# **Taller de Nivelación Curso Desarrollo Web Frontend**

El presente taller tiene el propósito de evaluar la comprensión y aplicación de conceptos fundamentales del desarrollo web Frontend desde los conceptos de lógica de programación, HTML, CSS, JavaScript, React Js, los diferentes tipos de Hooks, su uso adecuado y cómo utilizar React Router DOM v6 para la navegación en una aplicación React. Se busca nivelar y asegurar la apropiación de los conceptos vistos hasta el momento en el curso de desarrollo web frontend, la implementación de ReactJS y sus tecnologías asociadas.


## **MÓDULO SOBRE COMUNICACIÓN CON EL SERVIDOR (STORAGE, PROMESAS, ASINCRONÍAS Y PETICIONES HTTPS)**

### **1. Definir brevemente el concepto de localStorage y sessionStorage.**

- **localStorage:** Es un objeto de almacenamiento en el navegador que permite almacenar datos de manera persistente incluso después de cerrar la pestaña o el navegador. Los datos almacenados en localStorage no tienen una fecha de expiración y permanecen disponibles hasta que se borran manualmente o se limpian los datos del navegador.

- **sessionStorage:** Similar a localStorage, sessionStorage también es un objeto de almacenamiento en el navegador, pero los datos se almacenan solo durante la duración de la sesión del navegador. Los datos se eliminan cuando se cierra la pestaña o la ventana del navegador.

### **2. Describir las diferencias claves entre localStorage y sessionStorage.**

- La principal diferencia radica en la duración de almacenamiento: localStorage persiste más allá de las sesiones, mientras que sessionStorage es temporal y se borra al cerrar la sesión.
- Ambos tienen el mismo límite de capacidad de almacenamiento, que es mayor en comparación con las cookies, pero varía según el navegador (generalmente alrededor de 5-10 MB).

### **3. ¿Por qué son útiles para almacenar datos en el navegador y cuál es su límite de capacidad?**

- Son útiles para almacenar datos en el navegador sin necesidad de comunicación con el servidor.
- Útiles para almacenar información temporal, preferencias del usuario o datos necesarios para sesiones futuras.
- El límite de capacidad varía según el navegador, pero generalmente es de alrededor de 5-10 MB por dominio.

### **4. ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?**

Las promesas son objetos que representan la eventual finalización o el fracaso de una operación asincrónica y su valor resultante.

### **5. Explica el concepto de asincronía en programación y cómo las promesas ayudan a  manejar operaciones asincrónicas.**

La asincronía en programación implica la ejecución de tareas sin esperar su finalización antes de pasar a la siguiente.

Las promesas ayudan a manejar operaciones asincrónicas proporcionando una sintaxis más limpia y facilitando la gestión de errores.

### **6. Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación asincrónica, como una solicitud de red.**

```bash
const fetchData = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Datos recuperados correctamente");
  } else {
    reject("Error al recuperar datos");
  }
});

fetchData
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### **7. ¿Qué es JSON Server y cómo se utiliza en el desarrollo web?**

JSON Server es una herramienta que permite simular una API REST falsa a partir de un archivo JSON. Facilita el desarrollo frontend al proporcionar un punto de acceso para realizar solicitudes HTTP simuladas.

### **8. ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?**

Permite a los desarrolladores frontend trabajar con una API falsa antes de que la API real esté disponible.
Facilita la prueba y el desarrollo de la interfaz de usuario sin depender del backend.

### **9. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y las palabras claves async/await?**

- then().catch(): Utiliza métodos encadenados para manejar resultados exitosos o errores.
- async/await: Proporciona una sintaxis más limpia y se utiliza dentro de funciones marcadas con async para manejar promesas de manera más síncrona.

### **10.Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella.**

- Comando de instalación
```bash
npm install -g json-server
```
- Archivo de Base de Datos
```bash
// db.json
{
  "usuarios": [
    { "id": 1, "nombre": "Usuario 1" },
    { "id": 2, "nombre": "Usuario 2" }
  ]
}

```
- Comando para ejecutar json server
```bash
json-server --watch db.json
```
- Ejemplos de Uso
```bash
// Configuración de la URL base de la API falsa
const apiUrl = 'http://localhost:3000';

// Función para realizar solicitudes GET
async function obtenerUsuarios() {
  try {
    const response = await fetch(`${apiUrl}/usuarios`);
    const data = await response.json();
    console.log('Usuarios:', data);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

// Función para realizar solicitudes POST
async function agregarUsuario(nuevoUsuario) {
  try {
    const response = await fetch(`${apiUrl}/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoUsuario),
    });
    const data = await response.json();
    console.log('Nuevo usuario agregado:', data);
  } catch (error) {
    console.error('Error al agregar usuario:', error);
  }
}

// Función para realizar solicitudes PUT
async function actualizarUsuario(id, datosActualizados) {
  try {
    const response = await fetch(`${apiUrl}/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosActualizados),
    });
    const data = await response.json();
    console.log('Usuario actualizado:', data);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
  }
}

// Función para realizar solicitudes PATCH
async function actualizarParcialUsuario(id, datosParciales) {
  try {
    const response = await fetch(`${apiUrl}/usuarios/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosParciales),
    });
    const data = await response.json();
    console.log('Usuario actualizado parcialmente:', data);
  } catch (error) {
    console.error('Error al actualizar parcialmente usuario:', error);
  }
}

// Función para realizar solicitudes DELETE
async function eliminarUsuario(id) {
  try {
    const response = await fetch(`${apiUrl}/usuarios/${id}`, {
      method: 'DELETE',
    });
    console.log('Usuario eliminado con éxito');
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
}

// Ejemplos de uso
obtenerUsuarios();
agregarUsuario({ nombre: 'Nuevo Usuario' });
actualizarUsuario(1, { nombre: 'Usuario Actualizado' });
actualizarParcialUsuario(1, { nombre: 'Usuario Modificado' });
eliminarUsuario(1);
```

### **11.Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes HTTP en JavaScript.**

- Fetch: Es una API nativa de JavaScript para realizar solicitudes HTTP. Es más liviano y está integrado en la mayoría de los navegadores modernos.
- Axios: Es una biblioteca externa que simplifica las solicitudes HTTP con una sintaxis más limpia y manejo de errores mejorado.

### **12.¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?**

Porque las aplicaciones web modernas dependen en gran medida de las peticiones HTTP para interactuar con los servidores, recuperar datos y actualizar la interfaz de usuario.

### **13.Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y POST.**

- GET con fetch
```bash
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('GET con fetch:', data))
  .catch(error => console.error('Error en GET con fetch:', error));
```

- POST con fetch
```bash
const datosPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datosPost),
})
  .then(response => response.json())
  .then(data => console.log('POST con fetch:', data))
  .catch(error => console.error('Error en POST con fetch:', error));
```

- GET con axios
```bash
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log('GET con axios:', response.data))
  .catch(error => console.error('Error en GET con axios:', error));
```

- POST con axios
```bash
const axios = require('axios');

const datosPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

axios.post('https://jsonplaceholder.typicode.com/posts', datosPost)
  .then(response => console.log('POST con axios:', response.data))
  .catch(error => console.error('Error en POST con axios:', error));
```

### **14.Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo web.**

El manejo de errores es crucial para garantizar que las fallas en operaciones asincrónicas no afecten negativamente la aplicación, ni la experiencia del usuario.

### **15.Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.**

En las promesas de JavaScript, los errores se manejan utilizando el método .catch(). Este método se encadena a una promesa y se ejecutará si la promesa es rechazada en algún punto de su ejecución. La idea es proporcionar un lugar centralizado para manejar errores en lugar de hacerlo directamente en cada bloque then().

```bash
const miPromesa = new Promise((resolve, reject) => {
  // Simulando una operación asíncrona que falla
  setTimeout(() => {
    const exito = false;

    if (exito) {
      resolve("¡La operación fue exitosa!");
    } else {
      reject("Hubo un error en la operación");
    }
  }, 1000);
});

miPromesa
  .then((resultado) => {
    console.log(resultado); // Este bloque no se ejecutará en caso de error
  })
  .catch((error) => {
    console.error(error); // Este bloque se ejecutará si la promesa es rechazada
  });
```

### **16.¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y la estructura try/catch?**

- .then().catch(): Se utiliza para manejar errores en promesas de manera encadenada.
- try/catch: Se utiliza en funciones marcadas como async con await para manejar errores de manera más estructurada.

### **17.Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar una solicitud de red.**


```bash
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al recuperar datos:', error);
  }
}

fetchData();
```