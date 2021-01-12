// Ejemplo de una clase "Coche"
class Coche {
    // las propiedades las define e inicializa el "constructor"
    constructor(marca, any, color) {
        this.marca = marca;
        this.any = any;
        this.color = color;
        // cada vez que se realiza una instancia a la clase, el depósito está vacío
        this.nivel__combustible = 0;
    }
    // método que devuelve la antigüedad del coche
    edad__coche() {
        var fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
    // método que gestiona el depósito de combustible
    repostar(litros){
        var total = this.nivel__combustible + litros;
        // si el depósito está lleno (100 litros) 
        if(total > 100) {
            this.nivel__combustible = 100;
            return "Depósito lleno!";
        }else{
            this.nivel__combustible = total;    
            return "El depósito tiene " + total + " litros";
        }
    }
}
// Instancias a la clase "Coche" 
var coche1 = new Coche("Seat",2018,"azul");
console.log("La antigüedad el coche es " + coche1.edad__coche());
// repostar 
console.log(coche1.repostar(20));  // 20 litros
console.log(coche1.repostar(20)); // 40 litros 
console.log(coche1.repostar(70)); // Depósito lleno
// El nivel de combustible se ha quedado a 100 litros 
console.log(coche1.nivel__combustible);
// --------------------------------------------------------------- 
// La prop "nivel__combustible" está expuesta en la interfaz que usamos para interactuar con nuestro objeto, puediendo modificarlo.
// Gracias a la encapsulación, podemos hacer que nuestra propiedad sea privada, es decir, que sea imposible interactuar con ella, sino es a través del objeto 
// COMPROBAR 
console.log(coche1); 
coche1.nivel__combustible = 0;
console.log(coche1); 

// Ejemplo de la clase anterior pero con la prop "nivel__combustible" privada 
class Coche_Encapsul {
    // propiedad privada 
    #nivel__combustible = 0;
    // las propiedades las define e inicializa el "constructor"
    constructor(marca, any, color) {
        this.marca = marca;
        this.any = any;
        this.color = color;
    }
    // método que devuelve la antigüedad del coche
    edad__coche() {
        var fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
    // método que gestiona el depósito de combustible
    repostar(litros) {
        var total = this.#nivel__combustible + litros;
        // si el depósito está lleno (100 litros) 
        if (total > 100) {
            this.#nivel__combustible = 100;
            return "Depósito lleno!";
        } else {
            this.#nivel__combustible = total;
            return "El depósito tiene " + total + " litros";
        }
    }
    // Método GETTER que me permite ver desde fuera de la clase el atributo privado 
    get_nivel_combustible(){
        return this.#nivel__combustible;
    }
}
console.log("--------------------------------------------------");
// Instancias a la clase "Coche" 
var coche2 = new Coche_Encapsul("Renault", 2019, "rojo");
console.log("La antigüedad el coche es " + coche2.edad__coche());
// repostar 
console.log(coche2.repostar(20));  // 20 litros
console.log(coche2.repostar(20)); // 40 litros 
console.log(coche2.repostar(70)); // Depósito lleno
// COMPROBACIÓN 
// El nivel de combustible se ha quedado a 100 litros, NO PODEMOS ACCEDER A LA PROP "#nivel__combustible" ya que es PRIVADA!
// Error: Private field '#nivel__combustible' must be declared in an enclosing class
// console.log(coche2.#nivel__combustible);
// Vaciar el depósito 
// Error: Private field '#nivel__combustible' must be declared in an enclosing class
// coche2.#nivel__combustible = 0;

// La forma de modificar a la prop. privada "#nivel__combustible", es por medio del método (SETTER) "repostar".
// La forma de acceder a la prop. privada "#nivel__combustible", es por medio del método (GETTER) "get_nivel_combustible"
console.log(coche2.get_nivel_combustible());

