// PROGRAMACIÓN ORIENTADA A OBJETOS (POO) en Javascript 
// def: Podemos definir un objeto como una forma ordenada de agrupar datos (Propiedad ó Atributo) y operaciones (métodos).

// TERMINOLOGÍA: 
// - Clase: Plantilla/Fábrica que define las características del 0
// - Instancia: Proceso de la creación del objeto
// - Propiedad ó Atributo: Características del objeto
// - Método: Una capacidad ó acción del objeto
// - Constructor: Método especial. Se llama automáticamente en la instancia de una clase. Generalmente se utiliza para inicializar las propiedades del objeto.
// - Herencia: Una clase creada mediante una herencia (subclase ó clase hija) hereda todas las propiedades y métodos de la clase padre (superclase ó clase padre)
// - Encapsulamiento: 
// - Abstracción:
// - Polimorfismo: 

// En JS, podemos definir un objeto sin tener una instancia a una clase (Objeto literal)
// var yo = { nombre: "Armand", edad: 40, estatura: 180 };
var yo = { 
    nombre: "Armand", 
    edad: 40, 
    estatura: 180 
};
console.log(yo); // imprimimos todo el objeto
console.log(yo.estatura); // imprimimos SÓLO la propiedad "estatura"
console.log(yo.nombre + " mide " + yo.estatura + "cm");
// ---------------------------------------------------------------------- 
// Creación de un objeto (oinstancia) usando "new"
var persona = new Object();
persona.nombre = "María";
persona.apellido = "González";
persona.edad = 40;
persona.estatura = 180;
console.log(persona); // imprimimos todo el objeto
console.log(persona.estatura); // imprimimos SÓLO la propiedad "estatura"
console.log(persona.nombre + " tiene " + persona.edad + " años");
// ----------------------------------------------------------------------  
// Clases predefinidas en JS  
// Array 
var coches = new Array("Seat", "Fiat", "BMW", "KIA"); 
console.log(coches); // imprimimos todo el objeto 
console.log(coches.length);  // imprimimos la longitud del ARRAY (PROPIEDAD) 
coches.push("Renault"); // añadimos un valor al ARRAY (MÉTODO)
console.log(coches);
// String 
var texto = new String("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quod molestiae minima quia aliquam quos suscipit voluptatem quidem porro, vero molestias autem perspiciatis, doloribus aut cum officia neque nisi. Magni!");
console.log(texto); // imprimimos todo el objeto 
console.log(texto.length);  // imprimimos la cantidad de caracteres del STRING (PROPIEDAD) 
console.log(texto.search("ipsum"));

















