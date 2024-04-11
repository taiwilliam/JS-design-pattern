// 世界上有10種人，一種是懂二進位的人，以及不懂二進位的人 
// there are 10 types of people

class Person {
    constructor(name, binaryKnower) {
        this.name = name
        this.binaryKnower = binaryKnower
    }

    whatIs(number) { return `${this.name} 說這是 ${number}` }
    whatIsInBinary(number) { return `${this.name} 說這是 ${Number('0b' + number)}` }
}

const personOne = new Person('tyson', false)
const personTwo = new Person('yumy', true)

const arr = [personOne, personTwo]

arr.forEach(person => {
    if (person.binaryKnower) {
        console.log(person.whatIsInBinary(10))
    } else {
        console.log(person.whatIs(10))
    }
});

// 以上這個例子好嗎?
// 我們最終只是想要知道這個人是不是懂得二進位
// 但卻要先確認一件事 他是否是懂二進位的人 binaryKnower
// 在這裡我們多了一個但判斷式 且我們需要了解 binaryKnower的型別才有辦法知道撰寫這個判斷式
// 不但不符合最少知識原則，多一個判斷式也讓我們的複雜度增加了
// 那我們該如何應該優化他呢?