// Ejemplo1 
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    // método GETTER 
    area() {
        return this.ancho * this.alto
    }
}
// instancias 
var cuadrado = new Rectangulo(10, 10);
console.log("El área del cuadrado es " + cuadrado.area());
var rectangulo = new Rectangulo(20, 50);
console.log("El área del rectangulo es " + rectangulo.area());
console.log("========================================");
// Ejemplo 2
class Factura {
    // constructor
    constructor(numero, cliente, divisa, subtotal, iva) {
        this.numero = numero;
        this.cliente = cliente;
        this.divisa = divisa;
        this.subtotal = subtotal;
        this.iva = iva;
    }
    // método estático: Podemos llamar a este método sin necesidad de crear instancia 
    static instrucciones() {
        console.log("Para generar una factura, indique el número de cliente, el nombre de cliente, la divisa, el subtotal y el % de iva aplicado");
    }
    // método que aplica descuento 
    descuento(porcentaje) {
        this.subtotal -= this.subtotal / 100 * porcentaje;
    }
}
// llamada al método estático 
Factura.instrucciones();
// instancias 
var factura1 = new Factura(001, "Barcelona Activa", "euros", 250, 21);
var factura2 = new Factura(002, "Cibernarium", "euros", 150, 10);
// interacción con props de los objetos 
console.log("La factura " + factura1.numero + " está en divisa: " + factura1.divisa);
console.log("La factura " + factura2.numero + " está en divisa: " + factura2.divisa);
factura2.divisa = "dólares";
console.log("La factura " + factura2.numero + " está ahora en divisa: " + factura2.divisa);
// llamada a métodos 
factura1.descuento(10);
console.log("El subtotal de la factura " + factura1.numero + " con descuento de 10% es de: " + factura1.subtotal);
console.log("========================================");
// Ejemplo 3 
// superclase 
class Suma {
    constructor() {
        console.log("Soy el constructor de la clase 'Suma'");
    }
    // método GETTER
    getSuma() {
        // let: declaración de una variable que sólo existe en su bloque de código 
        let resultado = this.valor_a + this.valor_b;
        console.log("La suma de " + this.valor_a + " + " + this.valor_b + " es " + resultado);
    }
}
// subclase 
class Calculadora extends Suma {
    constructor(){
        console.log("Se ha generado una instancia de la clase 'Calculadora'");
        // invocamos al constructor de la clase "Suma"
        super();
        this.valor_a = 0;
        this.valor_b = 0;
    }
    // método SETTER
    setValores(a, b){
        this.valor_a = a;
        this.valor_b = b;
        console.log("El valor de a es " + this.valor_a);
        console.log("El valor de b es " + this.valor_b);
    }

}
// instancias 
var calculadora = new Calculadora();
// llamada a métodos 
calculadora.setValores(10, 10)
calculadora.getSuma();
console.log("========================================");
// Ejemplo 4
// superclase 
class Usuario_Netflix {
    // props privadas
    #email = '';
    #password = ''; 
    constructor(nombre, mes_alta) {
        this.nombre = nombre;
        this.mes_alta = mes_alta;
        this.premium = false;
    }
    // método SETTER que asigna los datos a las props privadas 
    setEmailPass(email, pass){
        this.#email = email;
        this.#password = pass;
    }
    // método 
    ver_catálogo(mes_actual){
        if (mes_actual - this.mes_alta < 0){
            console.log("No puedes ver el catálogo");     
        }else {
            console.log("Listado de películas y series de Netflix");
        }
    }
}
// subclases
class Usuario_Premium_Netflix extends Usuario_Netflix{
    constructor(){
        super();
    }
}
// instancias 
// USUARIO NORMAL 
var usuario1 = new Usuario_Netflix("armand", 0);
// comprobacion de encapsulamiento 
//usuario1.#email = "armand@gmail.com"; Error: Private field '#email' must be declared in an enclosing class
// método setter para las props privadas 
usuario1.setEmailPass("armand@gmail.com","a1234a");
console.log(usuario1); // no nos muestra info privada (props)
var fecha = new Date();
var mes = fecha.getMonth();
// console.log(mes); 0: Enero
usuario1.ver_catálogo(mes);
// USUARIO PREMIUM 














