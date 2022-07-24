function Person(name) {
    this.name = name
}
var p2 = new Person('king');




console.log(p2.__proto__) // Person.prototype
console.log(p2.__proto__.__proto__) // Function.prototype
console.log(p2.__proto__.__proto__.__proto__) // Object.prototype
console.log(p2.__proto__.__proto__.__proto__.__proto__) // null
console.log(p2.__proto__.__proto__.__proto__.__proto__.__proto__) // null
console.log(p2.constructor) // Person
console.log(p2.prototype) // Person.prototype
console.log(Person.constructor) // Person
console.log(Person.prototype) // 打印Person的prototype
console.log(Person.prototype.constructor) // Person
console.log(Person.prototype.__proto__) // Object.prototype
console.log(Person.__proto__) // Function.prototype
console.log(Function.prototype.__proto__) // Object.prototype
console.log(Function.__proto__) // Function.prototype
console.log(Object.__proto__) // Function.prototype
console.log(Object.prototype.__proto__) // null
















console.log(p2.__proto__) // Person.prototype
console.log(p2.__proto__.__proto__) //  Function.prototype X Object.prototype
console.log(p2.__proto__.__proto__.__proto__) // Object.prototype X null
console.log(p2.__proto__.__proto__.__proto__.__proto__) // null X null后面没有了，报错
console.log(p2.__proto__.__proto__.__proto__.__proto__.__proto__) // null X null后面没有了，报错
console.log(p2.constructor) // Person
console.log(p2.prototype) // Person.prototype X undefined p2是实例，没有prototype属性
console.log(Person.constructor) // Person
console.log(Person.prototype) // Function X 打印出Person.prototype这个对象里所有的方法和属性
console.log(Person.prototype.constructor) // Function X Person
console.log(Person.prototype.__proto__) // Object.prototype
console.log(Person.__proto__) // Function.prototype
console.log(Function.prototype.__proto__) // null X Object.prototype
console.log(Function.__proto__) // Object.prototype X Function.prototype
console.log(Object.__proto__) // null X Function.prototype
console.log(Object.prototype.__proto__) // null
