//Person
function Person (firstName, lastName, age, gender, interests){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.interests = interests
}
Person.prototype.greeting = function () {
    return `Hi i'm ${this.firstName}`
}
Person.prototype.farewell = function () {
    return `${this.firstName} has left the building.
    Bye for now!`
}
Person.prototype.bio = function () {
    return `${this.firstName} ${this.lastName}is ${this.age} years old. ${(this.gender == 'famel') ? "She" : "He"} likes ${this.interests.join(", ")}`;
}
//Student
function Student(firstName, lastName, age, gender, interests) {
    Person.call(this,firstName, lastName, age, gender, interests)
}
Student.prototype = new Person()
Student.prototype.greeting = function () {
    return `Yo i'm ${this.firstName}`
}
    
var p1 = new Person("Victor", "Gamez", 15, "male", ["sports", "programing", "games", "fun"])
var s1 = new Student("Victor", "Gamez", 15, "male", ["sports", "programing", "games", "fun"])
