class Person {
    constructor(name) {
        this.name = name
    }

    log(number) {
        return this.whatIs(number)
    }
}

function binaryKnower(number) {
    return `${this.name} 說這是 ${Number('0b' + number)}`
}

function binaryOblivious(number) {
    return `${this.name} 說這是 ${number}`
}

const personOne = new Person('molly')
const personTwo = new Person('shelly')

personOne.whatIs = binaryKnower
personTwo.whatIs = binaryOblivious

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(person.log(10))
});










// 現在我們確實解決了判斷式問題
// 程式碼看起來也少多了
// 但首先這又是一個物件結合函數的寫法，設計理念較為混亂
// 雖然我們成功讓whatIs讓物件自己決定，但這樣聚合性顯然不強
// 我們需要兩行才能 完成這個Person
// const personOne = new Person('molly')
// personOne.whatIs = binaryKnower