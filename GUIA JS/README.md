
# **Taller de Nivelación Curso Desarrollo Web Frontend**

El presente taller tiene el propósito de evaluar la comprensión y aplicación de conceptos fundamentales del desarrollo web Frontend desde los conceptos de lógica de programación, HTML, CSS, JavaScript, React Js, los diferentes tipos de Hooks, su uso adecuado y cómo utilizar React Router DOM v6 para la navegación en una aplicación React. Se busca nivelar y asegurar la apropiación de los conceptos vistos hasta el momento en el curso de desarrollo web frontend, la implementación de ReactJS y sus tecnologías asociadas.


## **MÓDULO SOBRE LÓGICA, LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CON JAVASCRIPT**

### **1. ¿Qué es la lógica en el contexto de la programación? Y explique por qué es importante para el desarrollo web front-end.**

La lógica en programación se refiere a la capacidad de estructurar instrucciones de forma coherente para lograr un resultado concreto. En el desarrollo web front-end, la lógica es esencial para crear interactividad, gestionar eventos y controlar el flujo de ejecución de un programa en el navegador del usuario.

### **2. Defina el término "algoritmo" y ponga un ejemplo sencillo de un algoritmo en el contexto de la lógica de programación.**

Un algoritmo es un conjunto finito de pasos o reglas definidas para resolver un problema o ejecutar una tarea. Ejemplo: un algoritmo para sumar dos números:

```bash
  Inicio
  1. Leer el primer número (A)
  2. Leer el segundo número (B)
  3. Calcular la suma: suma = A + B
  4. Mostrar la suma
  Fin
```

### **3 ¿Qué son las estructuras de control en programación, qué tipos de estructuras de control existen y cuáles son las estructuras más comunes de cada tipo?**

Las estructuras de control son bloques de código que controlan el flujo de ejecución de un programa. Existen los siguientes tipos:

- Secuenciales: Ejecutan sentencias en orden.
- Condicionales: ejecutan sentencias en función de condiciones.
- Cíclicas o bucles: repiten instrucciones hasta que se cumple una condición.

Las estructuras más comunes son:

1.	La estructura de control for se utiliza para repetir un bloque de código un número determinado de veces.
```bash
    for (let i = 1; i <= 5; i++) {
  		console.log(i);
	}
```
		

2.	Estructura de control condicional if-else Esta estructura permite ejecutar diferentes bloques de código en función de si una condición es verdadera o falsa.

```bash
    const edad = 18;
    if (edad >= 18) {
  		console.log("Eres mayor de edad.");
	} else {
  		console.log("Eres menor de edad.");
	}
```

### **4.	Describir cómo se declaraban variables y constantes en JavaScript antes de la introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de variables y constantes, y mencionar los problemas que esta mejora resuelve en el desarrollo web Frontend.**

-	Antes de la introducción de ECMAScript 6 (ES6), en JavaScript se utilizaban dos palabras clave para declarar variables: var para variables y const para constantes. Sin embargo, existían restricciones y problemas en relación con estas declaraciones.

**Declaración de variables y constantes antes de ES6:**

1.	var para variables: Las variables declaradas con var tienen un ámbito de función en lugar de un ámbito de bloque. Esto significa que son accesibles en toda la función en la que se declaran. No hay restricciones para volver a declarar una variable con var, lo que puede dar lugar a errores difíciles de corregir.

2.	const para constantes: const se utilizaba para declarar constantes, pero sólo garantizaba que el valor de la variable no sería reasignado. No garantizaba que los objetos o arrays referenciados fueran inmutables.

**Mejoras introducidas con ES6:**

ECMAScript 6 (ES6) introdujo nuevas palabras clave para declarar variables y constantes que eliminan las limitaciones anteriores:

1.	let y const para variables y constantes:

•	let se utiliza para declarar variables y tiene un ámbito de bloque, lo que significa que sólo son accesibles dentro del bloque en el que se declaran.
•	const se utiliza para declarar constantes y, al igual que let, tiene un ámbito de bloque. También impide que las variables se reasignen.

**Problemas resueltos por ES6 en el desarrollo web frontend:**

1.	Se resuelve el problema de tener variables con ámbito de función, lo que facilita escribir código más claro y menos propenso a errores.

2.	Redefinición no deseada: const garantiza que las constantes no se redefinan, lo que resulta útil para declarar valores que no deben modificarse. Esto mejora la seguridad y la legibilidad del código.

3.	Inmutabilidad de objetos y tablas: ES6 permite declarar objetos y tablas inmutables mediante const, lo que resulta útil para garantizar que determinados datos no se modifican accidentalmente.

### **5. ¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una declaración de función, una expresión de función y una función de flecha (arrow function)? Proporcionar ejemplos de cada una.**

En JavaScript, hay tres formas comunes de declarar funciones: declaración de función, expresión de función y función de flecha (arrow function).

1.	Declaración de función: Se crean utilizando la palabra clave function, seguida del nombre de la función y un conjunto de paréntesis que puede contener los parámetros de la función. Luego, se abre un bloque de código con llaves {} donde se define el cuerpo de la función.
Ejemplo:
```bash
    function suma(a, b) {
  		return a + b;
	}
	console.log(suma(2, 3)); 
```

2.	Expresión de función: Las expresiones de función son similares a las declaraciones de función, pero se definen como una expresión dentro de una variable. Estas funciones pueden ser anónimas (sin nombre) o tener un nombre. Se utilizan cuando necesitas asignar una función a una variable o como argumento en otra función.

Ejemplo:
```bash
    const resta = function(a, b) {
  		return a - b;
	};
	console.log(resta(5, 2)); 
```

3.	Función de flecha (Arrow function): Se definen utilizando una sintaxis de flecha =>. Son especialmente útiles para funciones simples y suelen tener un contexto léxico, lo que significa que heredan el valor this del contexto en el que se crearon.  

Ejemplo:
```bash
    const multiplicar = (a, b) => a * b;
	console.log(multiplicar(4, 3)); 
```
**Diferencias clave:**  
- Declaraciones de función y expresiones de función:
1. Pueden ser nombradas y utilizadas para recursión.
2.	Tienen su propio valor this.
- Funciones de flecha:
1.	Siempre son anónimas.
2.	Heredan el valor this del contexto circundante.
3.	Suelen ser más concisas y adecuadas para funciones simples.

### **6. ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones.**

-	Reutilización de código: Las funciones pueden utilizarse para encapsular fragmentos de código que realizan tareas específicas y esto facilita la reutilización del código en múltiples lugares de la aplicación.

```bash
    function suma(a, b) {
		return a + b;
    }
    function imprimirSuma(){
		console.log( suma(1, 1) );
    } 
```

-	Manejo de eventos y respuestas del usuario: Las funciones son cruciales para manejar eventos del usuario, como hacer clic en un botón, enviar un formulario o mover el mouse.

```bash
    const boton = document.getElementById('miBoton');
	boton.addEventListener('click', function() {
  		console.log(“Hola”);
    });; 
```
-	Organización y mantenibilidad del código: Las funciones ayudan a organizar el código de manera modular y estructurada. Esto facilita la comprensión del código y su mantenimiento a medida que el proyecto crece.

```bash
    function resta(a, b) {
		return a - b;
    }
    function imprimirResta(){
		console.log( resta(1, 1) );
    } 
```
### **7. ¿Cuál es la diferencia entre parámetro y argumento?**

La diferencia es que un parámetro es una variable en la declaración de una función y un argumento es el valor real pasado a la función cuando se invoca.

### **8. Definir el concepto de Callback y proporcionar un ejemplo práctico.**

Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha terminado. Ejemplo:

```bash
  function operacionAsync(a, b, callback) {
      const resultado = a + b;
      callback(resultado);
  }
  operacionAsync(3, 4, function(resultado) {
      console.log(resultado);
  });
```

### **9. ¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones? Proporcionar ejemplos de hoisting en declaraciones de variables y funciones.**

El hoisting es el comportamiento de JavaScript de mover las declaraciones de variables y funciones hacia la parte superior de su ámbito antes de la ejecución del código.

Ejemplo de hoisting en variables:
```bash
  console.log(x); // Undefined
  let x = 5;
```

### **10. Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre este concepto. Indicar, también cómo se declaran estas estructuras de datos.**

Un objeto en JavaScript es una estructura de datos que puede contener propiedades y métodos. Se declaran con la sintaxis de llaves {}. 

Ejemplo:
```bash
  let persona = {
    nombre: 'Juan',
    edad: 25,
    saludar: function() {
      console.log('Hola');
    }
  };
```
### **11. ¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en un objeto?**

Las propiedades son valores asociados a un objeto. La diferencia es que las propiedades son valores asociados a un objeto, mientras que los métodos son funciones asociadas a un objeto que realizan alguna acción específica.

### **12. Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.**
**Notación de punto (objeto.propiedad):** Se utiliza cuando se conoce el nombre de la propiedad de antemano.  

**Situaciones en las que es conveniente:**

Cuando el nombre de la propiedad es conocido y es un identificador válido en JavaScript.
En la mayoría de los casos, especialmente para propiedades estáticas y bien definidas.

**Notación de corchetes (objeto['propiedad']):** Se utiliza cuando el nombre de la propiedad es dinámico o cuando contiene caracteres especiales.

**Situaciones en las que es conveniente:**

Cuando necesitas acceder a propiedades de forma dinámica, por ejemplo, basándote en la entrada del usuario o en datos dinámicos.
Para propiedades cuyos nombres no son identificadores válidos en JavaScript o contienen caracteres especiales.

### **13. ¿Existe alguna forma de recorrer las propiedades de un objeto? En caso negativo, explicar por qué no es posible y en caso positivo proporcionar un ejemplo. Mencionar una situación en la cual sea muy útil recorrer las propiedades de un objeto.**

Sí, se puede recorrer las propiedades de un objeto utilizando un bucle for...in. Este bucle itera sobre todas las propiedades enumerables de un objeto.

```bash
  for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
  }
```

### **14. ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden almacenar?**

Los objetos son útiles porque permiten organizar y estructurar datos de manera más compleja. Pueden almacenar cualquier tipo de dato, incluyendo números, cadenas, booleanos, arreglos, funciones, e incluso otros objetos, lo que los hace versátiles para representar entidades y relaciones en una aplicación web.

### **15. ¿Qué es un array en JavaScript y por qué son esenciales?**

Un array en JavaScript es una estructura de datos que permite almacenar varios valores en una sola variable. Son esenciales porque proporcionan una forma eficiente de organizar y acceder a conjuntos de datos relacionados, facilitando operaciones como la iteración y la manipulación de datos.

### **16. ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo.**

Se accede a un elemento del array mediante su índice. El índice en JavaScript comienza en cero. 

Ejemplo:

```bash
  let frutas = ['manzana', 'banana', 'uva'];
  console.log(frutas[1]);
```

### **17. Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web.**

- map(): Crea un nuevo array aplicando una función a cada elemento del array original. Útil para transformar datos.
- filter(): Crea un nuevo array con los elementos que cumplen una condición específica. Útil para filtrar datos.
- reduce(): Reduce los elementos de un array a un solo valor aplicando una función acumuladora. Útil para realizar operaciones acumulativas.

### **18. Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y filtrar datos en un array.**

```bash
  let numeros = [1, 2, 3, 4, 5];
  let cuadradosPares = numeros
    .filter(numero => numero % 2 === 0)
    .map(numero => numero ** 2);
  console.log(cuadradosPares);

```