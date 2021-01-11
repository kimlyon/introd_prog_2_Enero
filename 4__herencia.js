// Ejemplo de una clase "Vehículo" (superclase)
class Vehiculo {
    // constructor 
    constructor(marca, color, any) {
        this.marca = marca;
        this.color = color;
        this.any = any;
    }
    // método que devuelve la antigüedad del vehiculo
    edad__vehiculo() {
        var fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
}
// Ejemplo de una clase "Coche" (subclase) que hereda de "Vehículo" (superclase) 
class Coche extends Vehiculo {
    // constructor 
    constructor(marca, color, any, num_puertas){
        // super: hereda las props de la superclase "Vehículo "
        super(marca, color, any);
        this.num_puertas = num_puertas;
    }
    // método específico de esta clase 
    abrir__maletero(){
        return "Has abierto el maletero!";
    }
}
// Instancias a la clase "Coche"
var coche1 = new Coche("Seat","verde", 2019, 5);
// llamada al método propio 
console.log(coche1.abrir__maletero());
console.log(coche1.edad__vehiculo());


