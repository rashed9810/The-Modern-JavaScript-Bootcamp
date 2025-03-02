//OOP 
// classes, objects, inheritance, encapsulation, polymorphism, and abstraction

//classes and object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    greet() {
        console.log(` Hello, My name is ${this.name}`);

    }
}
const Rashed = new Person ('Rashed', 26);
Rashed.greet();

//
