// Ejemplo de una clase "Coche"
class Coche{
    // las propiedades las define e inicializa el "constructor"
    constructor (marca, any, color) {
        this.marca = marca;
        this.any = any;
        this.color = color;
    }
    // método que devuelve la antigüedad del coche
    edad__coche(){
        var fecha = new Date(); 
        return fecha.getFullYear() - this.any;
    }
}
// Instancia a la clase "Coche"
// Añadimos dentro de los parentesis de la clase, los datos que incializa el constructor 
var coche1 = new Coche("Seat", 2018, "rojo");
var coche2 = new Coche("Fiat", 2003, "azul");
var coche3 = new Coche("Renault", 2020, "verde");
var coche4 = new Coche("KIA", 2015, "amarillo");
var coche5 = new Coche("BMW", 2010, "naranja");
// llamada al método 
console.log("El coche " + coche1.marca + " tiene " + coche1.edad__coche() + " años y es de color " + coche1.color);
console.log("El coche " + coche2.marca + " tiene " + coche2.edad__coche() + " años y es de color " + coche2.color);
// ----------------------------------------------------------- 
// Ejemplo de una clase "Usuario"
class Usuario {
    // constructor que inicializa 2 propiedades 
    constructor (nick, email){
        this.nick = nick;
        this.email = email;
    }
    // método "SETTER" que asigna el valor del password a la propiedad 
    set_Pass(pass){
        this.pass = pass;
    }
    // método "GETTER" que devuelve el valor de la propiedad "nick"
    get_Nick(){
        return this.nick;
    }
    // login 
    login() {
        return "Has iniciado sesión!";
    }
    logout() {
        return "Has cerrado sesión!";
    }
}
// crea una instancia (objeto) a la clase Usuario, enviando dos datos que recoje el "constructor"
var usuario = new Usuario("armand","armand@gmail.com");
// llamada al método SETTER que asigna un password al objeto creado anteriormente 
usuario.set_Pass("a1234a");
// llamada al método GETTER que devuelve la propiedad "nick" e imprimimos por consola 
console.log(usuario.get_Nick());
// acceso e impresión por consola de la propiedad "pass"  
console.log(usuario.pass);
// llamada a otros métodos  
console.log(usuario.login());
console.log(usuario.logout());



