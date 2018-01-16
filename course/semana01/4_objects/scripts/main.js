function isObject(a) {
    return typeof a == "object" ? "You input an Objetct!" : "NaO (Not an Object)"
}
console.log("isObject() if we input ({}), should return  'You input an Objetct!'", isObject({}))
console.log("isObject() if we input ([]), should return  'You input an Objetct!'", isObject([]))
console.log("isObject() if we input (null), should return  'You input an Objetct!'", isObject(null))

function Car(brand, model, color) {
    this.brand = brand
    this.model = model
    this.color = color
}
Car.prototype.toStringCar = function toStringCar() {
    return `My ${this.color} ${this.brand} ${this.model} is great!`
}

var myCar = new Car("Renault", "Clio", "Red")

console.log("myCar.toStringCar should show a message -->", myCar.toStringCar())