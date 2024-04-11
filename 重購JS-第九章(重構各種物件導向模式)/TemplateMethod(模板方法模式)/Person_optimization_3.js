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

    whatIsInBinary(number) {
        return `${this.name} 說這是 ${Number('0b' + number)}`
    }

    log(number) {
        return this.whatIsInBinary(number)
    }
}

class BinaryOblivious extends Person {
    constructor(name) {
        super(name)
    }

    whatIs(number) {
        return `${this.name} 說這是 ${number}`
    }

    log(number) {
        return this.whatIs(number)
    }
}


const personOne = new BinaryKnower('ovis')
const personTwo = new BinaryOblivious('william')

const arr = [personOne, personTwo]

arr.forEach(person => {
    console.log(person.log(10))
});

// 透過以上例子 我們成功的讓程式碼更多行了
// 是不是看起來越來越專業了呢!!
// 必須承認 我更願意寫上面這樣的程式碼 因為看起來更高級一些
// 這裡我們不再利用一個變數binaryKnower 來判斷這個物件是否知道二進位
// 而是利用繼承來除去所有條件
// 但這裡我們還發現了一些小毛病，BinaryOblivious、BinaryKnower 中的log 基本上邏輯是一樣的
// 違反了DRY原則
// 而這裡 兩個繼承於相同父類的子類中 有相同的邏輯函數時 我們如何優化呢?