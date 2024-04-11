// 世界上有10種人，一種是懂二進位的人，以及不懂二進位的人 
// there are 10 types of people

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

const personOne = new Person('shelly', true)
const personTwo = new Person('bennet', false)

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(person.log(10))
});

// 跟第一個例子相比我們將判斷式封裝到Person物件內
// 讓調用者只需要調用log 就可以得到 他們對於10的解讀
// 但我們優化了使用Person物件的體驗，如果未來有人想要擴充Person物件呢?
// 一樣需要面對 這個判斷式 也就是複雜度
// 讓我們繼續將這個複雜度降低吧~