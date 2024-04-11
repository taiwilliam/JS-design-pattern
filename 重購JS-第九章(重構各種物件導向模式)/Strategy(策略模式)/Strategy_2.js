class Person {
    constructor(name, whatIs) {
        this.name = name
        this.whatIs = whatIs
    }

    log(number) {
        return this.whatIs(number)
    }

    static binaryKnower(number) {
        return `${this.name} 說這是 ${Number('0b' + number)}`
    }

    static binaryOblivious(number) {
        return `${this.name} 說這是 ${number}`
    }
}

const personOne = new Person('molly', Person.binaryKnower)
const personTwo = new Person('shelly', Person.binaryOblivious)

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(person.log(10))
});