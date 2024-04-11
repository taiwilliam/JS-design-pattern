// 世界上有10種人，一種是懂二進位的人，以及不懂二進位的人 
// there are 10 types of people

// 將Person物件分離出來
class Person {
    constructor(name) {
        this.name = name
    }
}

// 定義子類 繼承Person
class BinaryKnower extends Person {
    constructor(name) {
        super(name)
    }

    whatIs(number) {
        return `${this.name} 說這是 ${Number('0b' + number)}`
    }
}

class BinaryOblivious extends Person {
    constructor(name) {
        super(name)
    }

    whatIs(number) {
        return `${this.name} 說這是 ${number}`
    }
}

function log(person, number) {
    return person.whatIs(number)
}


const personOne = new BinaryKnower('molly')
const personTwo = new BinaryOblivious('kayen')

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(log(person, 10))
});