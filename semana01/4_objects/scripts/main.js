function isObject(a) {
    return typeof a == "object" ? "You input an Objetct!" : "NaO (Not an Object)"
}
console.log("isObject() if we input ({}), should return  'You input an Objetct!'", isObject({}))
console.log("isObject() if we input ([]), should return  'You input an Objetct!'", isObject([]))
console.log("isObject() if we input (null), should return  'You input an Objetct!'", isObject(null))


//Object --> espiritu santo
//Padre
function Car(brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color
}
Car.prototype.toStringCar = function toStringCar() {
    return `My ${this.color} ${this.brand} ${this.model} is great!`
}
//Hijo
function Ferrari(model, color) {
   Car.call(this, "Ferrari", model, color)
   //Estamos utilizando el Constructor de Car, dentro del Objeto Ferrari
}
//
Ferrari.prototype = new Car("Ferrari");

var myCar = new Car("Renault", "Clio", "Red")
var myFerrari = new Ferrari("Fxx", "Black")
console.log("myCar.toStringCar should show a message -->", myCar.toStringCar())
console.log("myCar.toStringCar should show a message -->", myFerrari.toStringCar())