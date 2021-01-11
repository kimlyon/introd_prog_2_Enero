// Ejemplo de un objeto literal (Usuario) con sus propiedades/atributos y sus métodos 
var Usuario = {
    // propiedades 
    nombre: "Antonio",
    apellido: "Fernández",
    email: "antonio@gmail.com",
    password: "a1234a",
    // métodos 
    login: function() {
        return "Login correcto!";
    },
    get_nombre_completo: function(){
        // "this": variable que hace referencia al propio objeto
        return this.nombre + " " + this.apellido
    }
}
// Interacción con el objeto  
console.log(Usuario); // imprime el objeto entero 
console.log(Usuario.email); // imprime la propiedad "email"
console.log(Usuario.login());// llamada al método "login"
console.log(Usuario.get_nombre_completo());// llamada al método "get_nombre_completo"
// Acceso y actualización a propiedades del objeto (password) 
Usuario.password = "a1234b";
console.log(Usuario);


