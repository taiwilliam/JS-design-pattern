// 世界上有10種人，一種是懂二進位的人，以及不懂二進位的人 

function log(fun, name, number) {
    return fun(name, number)
}

function whatIsInBinary(name, number) {
    return `${name} 說這是 ${Number('0b' + number)}`
}

function whatIs(name, number) {
    return `${name} 說這是 ${number}`
}

const arr = [{
    fun: whatIsInBinary,
    name: 'william'
},
{
    fun: whatIs,
    name: 'kayen'
}]

arr.forEach(item => {
    console.log(log(item.fun, item.name, 10))
});


// 這就是改為 函數式的寫法，當然也有更多方法
// 但這取決於 團隊喜歡用甚麼樣的模式開發
// 通常來說 混和模式會較為難以管理
// 所以不會用上一版的寫法，而是會在物件導向設計與函數式設計中
// 選擇一種設計模式 來進行邏輯開發