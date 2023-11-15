
# **Taller de Nivelación Curso Desarrollo Web Frontend**

El presente taller tiene el propósito de evaluar la comprensión y aplicación de conceptos fundamentales del desarrollo web Frontend desde los conceptos de lógica de programación, HTML, CSS, JavaScript, React Js, los diferentes tipos de Hooks, su uso adecuado y cómo utilizar React Router DOM v6 para la navegación en una aplicación React. Se busca nivelar y asegurar la apropiación de los conceptos vistos hasta el momento en el curso de desarrollo web frontend, la implementación de ReactJS y sus tecnologías asociadas.


## **MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN**

### **1. ¿Qué significa HTML y cuál es su función en el desarrollo web?**

HTML significa "HyperText Markup Language" y es un lenguaje de marcado utilizado para estructurar contenido en la web. Su función principal es definir la estructura y el significado del contenido, utilizando etiquetas para organizar elementos como encabezados, párrafos, enlaces, imágenes, entre otros.

### **2. ¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas esenciales.**
```bash
<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido de la página -->
</body>
</html>
```
- '<!DOCTYPE html>': Define la versión de HTML que se está utilizando.

- '<html>': Contenedor principal de todo el contenido de la página.

- '<head>': Contiene metadatos y enlaces a archivos externos.

- '<title>': Define el título de la página que se muestra en la pestaña del navegador.

- '<body>': Contiene el contenido visible de la página.

### **3. ¿Qué es CSS y cuál es su propósito en el desarrollo web?**

CSS significa "Cascading Style Sheets" y se utiliza para dar estilo y formato al contenido HTML. Su propósito es separar la estructura del contenido (HTML) de su presentación visual, permitiendo controlar la apariencia de la página, como colores, fuentes, márgenes y diseño.

### **4. ¿Qué son selectores CSS, cuáles son los principales tipos de selectores y por qué es importante entender la especificidad en el contexto de las hojas de estilo en cascada (CSS)? Describir al menos tres tipos de selectores CSS y cómo la especificidad afecta a la aplicación de estilos en un proyecto de desarrollo web Frontend. Proporcionar ejemplos de situaciones en las que se utiliza la especificidad de selectores para resolver conflictos de estilos.**

Los selectores CSS son patrones que se utilizan para seleccionar y aplicar estilos a elementos HTML en una página web. La especificidad es un concepto crucial en CSS y determina qué reglas de estilo se aplicarán cuando hay conflictos.

**Principales Tipos de Selectores:**

- Selector de Tipo:

Selecciona todos los elementos de un tipo específico.
Ejemplo: p { color: blue; } aplicará el estilo a todos los párrafos.

- Selector de Clase:

Selecciona elementos que tienen un atributo de clase específico.
Ejemplo: .destacado { font-weight: bold; } aplicará el estilo a elementos con la clase "destacado".

- Selector de ID:

Selecciona un elemento específico con un ID único.
Ejemplo: #encabezado { font-size: 24px; } aplicará el estilo al elemento con el ID "encabezado".

**Especificidad en CSS:**

La especificidad es un valor que determina qué conjunto de reglas CSS es aplicado a un elemento en caso de conflictos. Se mide en términos de cuánto peso tiene un selector en relación con otros.

**Especificidad baja a alta:**

1. Selector de tipo o pseudo-elemento.
2. Selector de clase, atributo o pseudo-clase.
3. Selector de ID.

**Regla !important:**

Anula cualquier regla normal, pero no es una buena práctica y debe usarse con precaución.

**Ejemplos de Situaciones con Especificidad:**

1. Conflicto entre Selector de Tipo y Selector de Clase:
```bash
p { color: red; }
.destacado { color: blue; }
```
En este caso, los elementos con la clase "destacado" tendrán el color azul, ya que la especificidad de la clase es mayor que la del selector de tipo.

2. Conflicto entre Selector de Clase y Selector de ID:
```bash
.contenido { background-color: yellow; }
#seccion-principal { background-color: green; }
```
Aquí, la especificidad del selector de ID es mayor, por lo que los elementos con el ID "seccion-principal" tendrán un fondo verde.

3. Conflicto con !important:
```bash
.texto { font-size: 16px !important; }
#encabezado { font-size: 24px; }
```
En este caso, la regla font-size: 16px será aplicada a cualquier elemento con la clase "texto", incluso si tiene un ID. La regla con !important tiene una especificidad más alta.

### **5. Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y estilos externos (external) en CSS. Indicar cuál de los tres estilos es el recomendado usar y por qué.**

**Estilos en línea:** Se aplican directamente a un elemento usando el atributo style dentro de la etiqueta HTML.

```bash
<p style="color: blue;">Texto azul</p>
```

**Estilos internos:** Se definen en la sección `<style>` dentro del `<head>` del documento HTML.

```bash
<head>
    <style>
        p { color: red; }
    </style>
</head>
```

**Estilos externos:** Se definen en un archivo CSS separado y se enlazan con el documento HTML.

```bash
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
```

Se recomienda el uso de estilos externos porque promueve la separación de preocupaciones, facilita el mantenimiento y mejora la reutilización del código.

### **6. ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?**

Flexbox es un modelo de diseño en CSS que facilita el diseño de elementos en una fila o columna, permitiendo un flujo dinámico y controlable de espacio entre los elementos, incluso cuando tienen tamaños desconocidos o dinámicos.

### **7. Explicar cómo se emplean las propiedades flexbox y explicar la función de las principales propiedades en la creación de diseños flexibles.**

**1. Contenedor Flex (flex container):**

``display: flex``; o ``display: inline-flex;``: Define un contenedor como un contenedor flex o en línea (en línea flex).

**2. Dirección del eje principal:**

``flex-direction: row`` | ``row-reverse`` | ``column`` | ``column-reverse;``: Establece la dirección principal de los elementos flexibles, ya sea en filas o columnas.

**3. Alineación de elementos en el eje principal:**

``justify-content: flex-start`` | ``flex-end`` | ``center`` | ``space-between`` | ``space-around`` | ``space-evenly;``: Controla la alineación de los elementos flexibles a lo largo del eje principal.

**4. Alineación de elementos en el eje secundario:**

``align-items: stretch`` | ``flex-start`` | ``flex-end`` | ``center`` | ``baseline;``: Alinea los elementos flexibles a lo largo del eje secundario (perpendicular al eje principal).`

**5. Alineación de elementos en ambas direcciones:**

``align-content: flex-start`` | ``flex-end`` | ``center`` | ``space-between`` | ``space-around`` | ``stretch;``: Alinea las líneas de contenido en el contenedor cuando hay espacio extra en el eje secundario.

**6. Orden de visualización:**

``order: <integer>;``: Define el orden de visualización de un elemento flexible dentro del contenedor.

**7. Crecimiento, encogimiento y tamaño inicial:**

- ``flex-grow: <number>;``: Controla la capacidad de un elemento flexible para crecer en relación con otros elementos flexibles en el contenedor.
- ``flex-shrink: <number>;``: Define la capacidad de un elemento flexible para contraerse si es necesario.
- ``flex-basis: <length>`` | ``auto;``: Establece el tamaño inicial de un elemento flexible antes de que comience a crecer o contraerse.

**8. Alineación de elementos individuales:**

``align-self: auto`` | ``flex-start`` | ``flex-end`` | ``center`` | ``baseline`` | ``stretch;``: Anula la alineación de elementos predeterminada definida por align-items para un elemento flexible individual.

### **8. ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?**

CSS Grid Layout es otro modelo de diseño en CSS que permite crear diseños de cuadrícula bidimensionales, proporcionando un control más preciso sobre filas y columnas. La diferencia es que Flexbox se utiliza para diseño unidimensional (fila o columna), mientras que Grid se utiliza para diseño bidimensional (filas y columnas).

### **9. Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.**

```bash
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}
```
Esto crea una cuadrícula con tres columnas de igual tamaño y un espacio de 10px entre ellas.

### **10. ¿Qué significa el diseño responsivo en el contexto del desarrollo web?**

El diseño responsivo se refiere a la capacidad de una página web para adaptarse y proporcionar una experiencia de usuario óptima en diferentes dispositivos y tamaños de pantalla, como computadoras, tabletas y teléfonos móviles.

### **11. Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño responsivo en una página web.**

- Media Queries: Utilizadas para aplicar estilos específicos según el tamaño de la pantalla.
- Unidades relativas (por ejemplo, %, em, rem): Permiten que los elementos se escalen en relación con el tamaño de su contenedor o el tamaño de la fuente.
- Imágenes flexibles o imágenes con ancho máximo: Evitan que las imágenes se desborden en pantallas más pequeñas.