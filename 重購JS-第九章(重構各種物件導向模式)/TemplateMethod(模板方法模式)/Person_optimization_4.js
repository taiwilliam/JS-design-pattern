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


// 最直覺的想法，就是將子類共同方法抽取到父類
// 唯一的缺點就是子類必須同時定義一個抽象方法 whatIs 並且命名需要一樣
// 這讓我們撰寫子類的時候 再次違反最小知識原則
// 但這本書並沒有寫 持續的優化方式 大家可以回家想想 再找我對答案喔