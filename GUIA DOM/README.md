
# **Taller de Nivelación Curso Desarrollo Web Frontend**

El presente taller tiene el propósito de evaluar la comprensión y aplicación de conceptos fundamentales del desarrollo web Frontend desde los conceptos de lógica de programación, HTML, CSS, JavaScript, React Js, los diferentes tipos de Hooks, su uso adecuado y cómo utilizar React Router DOM v6 para la navegación en una aplicación React. Se busca nivelar y asegurar la apropiación de los conceptos vistos hasta el momento en el curso de desarrollo web frontend, la implementación de ReactJS y sus tecnologías asociadas.


## **MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM**

### **1. ¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación web?**

El DOM, o Modelo de Objeto de Documento, es una representación programática de la estructura de un documento HTML/XML. En el contexto de la programación web, el DOM permite a los desarrolladores acceder, modificar y manipular dinámicamente el contenido, la estructura y el estilo de una página web mediante lenguajes de programación como JavaScript.

### **2. ¿Cuál es la diferencia entre el DOM y el HTML en una página web?**

HTML (Lenguaje de Marcado de Hipertexto) es un lenguaje de marcado utilizado para estructurar el contenido de una página web. El DOM, por otro lado, es la representación en memoria de esa estructura HTML, creada por el navegador. Mientras que HTML describe la estructura estática de una página, el DOM proporciona una interfaz dinámica para interactuar con esa estructura a través de la programación.

### **3. ¿Por qué es importante entender y manipular el DOM en el desarrollo web Frontend?**

Entender y manipular el DOM es esencial para el desarrollo web Frontend porque permite crear experiencias interactivas y dinámicas para los usuarios. Al manipular el DOM, los desarrolladores pueden actualizar el contenido de una página en respuesta a acciones del usuario, como clics o entradas, sin necesidad de recargar la página completa.

### **4. ¿Qué son los eventos del DOM y cuál es su función en una página web?**

Los eventos del DOM son acciones o sucesos que ocurren en la página web, como clics de ratón, pulsaciones de teclas, cambios de tamaño de ventana, etc. Los eventos permiten la interactividad en la web al desencadenar acciones o funciones específicas en respuesta a las acciones del usuario.

### **5. Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o DOMContentLoaded”.**

1. Click:

Descripción: Se dispara cuando un elemento HTML es clicado.

Ejemplo:
```bash
document.getElementById('miBoton').addEventListener('click', function() {
  alert('Botón clicado');
});
```

2. Submit:

Descripción: Se dispara cuando se envía un formulario.

Ejemplo:
```bash
<form id="miFormulario">
  <input type="text" name="usuario">
  <input type="submit" value="Enviar">
</form>

<script>
  document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
  });
</script>
```

3. Load:

Descripción: Se dispara cuando un recurso y sus dependencias han terminado de cargarse.

Ejemplo:

```bash
window.addEventListener('load', function() {
  alert('Página completamente cargada');
});
```

4. DOMContentLoaded:

Descripción: Se dispara cuando el documento HTML ha sido completamente cargado y parseado, sin esperar a que las imágenes y hojas de estilo estén completamente cargadas.

Ejemplo:

```bash
document.addEventListener('DOMContentLoaded', function() {
  alert('Contenido DOM completamente cargado');
});
```

### **6. ¿Por qué es importante manejar eventos en la interacción usuario-web y cómo se añaden controladores de eventos a los elementos del DOM?**

Manejar eventos es crucial para crear interactividad en las páginas web, ya que permite responder a las acciones del usuario. Los controladores de eventos son funciones que se ejecutan en respuesta a un evento específico. Se añaden a los elementos del DOM utilizando métodos como addEventListener en JavaScript.

### **7. Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript.**

- getElementById: Selecciona un elemento por su ID.
- getElementsByClassName: Selecciona elementos por su clase.
- getElementsByTagName: Selecciona elementos por su etiqueta.

### **8. ¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript?**

Puedes crear un nuevo elemento usando document.createElement y luego agregarlo al DOM utilizando métodos como appendChild o insertBefore. Ejemplo:

```bash
let nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "¡Hola, mundo!";
document.body.appendChild(nuevoElemento);
```

### **9. ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web dinámicas e interactivas?**

La manipulación del DOM es fundamental para crear aplicaciones web dinámicas e interactivas, ya que permite a los desarrolladores actualizar y cambiar el contenido de la página en tiempo real, proporcionando una experiencia de usuario más rica y fluida sin necesidad de recargar la página completa.

### **10. Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto de eventos del DOM.**

- Event Bubbling: Es un comportamiento por defecto en el que un evento se propaga desde el elemento objetivo hacia arriba en la jerarquía del DOM. Los eventos suben desde el elemento más específico hacia el más general.

- Event Delegation: Es una técnica donde un único controlador de eventos se coloca en un ancestro común de varios elementos. Este controlador puede gestionar eventos de varios elementos hijos. Ayuda a mejorar el rendimiento y facilita la gestión de eventos en elementos dinámicos.

### **11. ¿Por qué son relevantes los conceptos “event bubbling” y “event delegation” en la gestión de eventos en páginas web con múltiples elementos interactivos?**

Estos conceptos son relevantes en entornos con múltiples elementos interactivos porque ayudan a optimizar y simplificar la gestión de eventos. El event bubbling permite capturar eventos en un ancestro común, facilitando la escritura de código más eficiente. Event delegation, por otro lado, reduce la necesidad de adjuntar controladores de eventos a cada elemento individual, lo que es beneficioso en situaciones donde se agregan o eliminan elementos dinámicamente. Ambos conceptos contribuyen a un código más limpio y eficiente en aplicaciones web complejas.
