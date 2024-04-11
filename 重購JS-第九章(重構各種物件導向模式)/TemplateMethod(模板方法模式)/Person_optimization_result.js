// 世界上有10種人，一種是懂二進位的人，以及不懂二進位的人 
// there are 10 types of people

// 將Person物件分離出來
class Person {
    constructor(name) {
        this.name = name
    }

    log(number) {
        return this.whatIs(number)
    }

    whatIs(number) {
        return `${this.name} 說這是 ${number}`
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


const personOne = new BinaryKnower('molly')
const personTwo = new BinaryOblivious('kayen')

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(person.log(10))
});


// 其實答案很簡單就是在父類預先實作whatIs函數
// 但這充其量只能保證 log不會抱錯
// 若是有其他人實作不同的子類 並且未定義whatIs 那這些人就會預設不懂二進制
// 