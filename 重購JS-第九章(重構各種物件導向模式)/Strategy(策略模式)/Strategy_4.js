class Person {
    constructor(name) {
        this.name = name
        this._strategy = null
    }

    log(number) {
        return this._strategy.whatIs(this.name, number)
    }

    setWhatIs(whatIsClass) {
        if (!whatIsClass instanceof BinaryStrategy) {
            throw new Error("This is not binary strategy");
        }
        this._strategy = whatIsClass
    }
}

class BinaryStrategy { }

// Strategy 物件
class binaryKnower extends BinaryStrategy {
    whatIs(name, number) {
        return `${name} 說這是 ${Number('0b' + number)}`
    }
}
class binaryOblivious extends BinaryStrategy {
    whatIs(name, number) {
        return `${name} 說這是 ${number}`
    }
}

// 二進位策略MAP
const BINARY_MAP = {
    binaryKnower,
    binaryOblivious,
}

const personOne = new Person('molly')
const personTwo = new Person('shelly')

personOne.setWhatIs(new BINARY_MAP['binaryKnower'])
personTwo.setWhatIs(new BINARY_MAP['binaryOblivious'])

const arr = [personOne, personTwo]

arr.forEach(person => {
    // console.log(person)
    console.log(person.log(10))
});






// 以上這個例子 也成功解將判斷式抹除
// 並且讓策略抽離出來能獨立引用
// 這是書上的最終優化，但顯然這裏我們還是看到很多不夠嚴謹的地方
// 1. 像是我們仍然混和了函數進入物件 只是將函數包裝成一個MAPPING obj
// 2. whatIs 可以被物件自行定義了沒錯，但自由度有點太高了，你今天讓whatIs = () => console.log('大笨蛋!!') 也是可以的喔
// 3. 以上兩件事情 是互相有影響的 為甚麼函數盡量不要與物件導向開發混用，除了抽象的說法"設計混亂"外
// 函數與物件最大的差別就是型別的判定，只要whatIs可以直接被任何函數賦值，那第二點的高自由度就無法解決