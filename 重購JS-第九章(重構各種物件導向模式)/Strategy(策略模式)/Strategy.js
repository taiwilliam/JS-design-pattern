class Person {
    constructor(name, binaryKnower) {
        this.name = name
        this.binaryKnower = binaryKnower
    }

    whatIs(number) { return `${this.name} 說這是 ${number}` }
    whatIsInBinary(number) { return `${this.name} 說這是 ${Number('0b' + number)}` }

    // 新增一個抽象方法
    log(number) {
        return this.binaryKnower ? this.whatIsInBinary(number) : this.whatIs(number)
    }
}

const personOne = new Person('ovis', true)
const personTwo = new Person('grace', false)

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(person.log(10))
});

// 重新回頭來看一開始我們想優化的Person物件