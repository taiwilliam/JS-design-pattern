class Person {
    constructor(name, whatIs) {
        this.name = name
        this.whatIs = whatIs
    }

    log(number) {
        return this.whatIs(number)
    }
}

// 二進位策略
const binaryStrategy = {
    binaryKnower,
    binaryOblivious
}

// 將邏輯抽離 令他可被復用
function binaryKnower(number) {
    return `${this.name} 說這是 ${Number('0b' + number)}`
}

// 將邏輯抽離 令他可被復用
function binaryOblivious(number) {
    return `${this.name} 說這是 ${number}`
}

const personOne = new Person('molly', binaryStrategy.binaryKnower)
const personTwo = new Person('shelly', binaryStrategy.binaryOblivious)

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(person.log(10))
});






// 以上這個例子 也成功解將判斷式抹除
// 並且將函數定義再Person之內成為方法
// 但可擴展性差，若是Person未來不是只要判斷二進位呢?
// 若是今天判斷二進未 換成驗證呢? 驗證數字、驗證電話、驗證字串
// 所有的擴展將會與Person高度耦合，但這些方法卻又可能在更多地方用到而不是僅有Person