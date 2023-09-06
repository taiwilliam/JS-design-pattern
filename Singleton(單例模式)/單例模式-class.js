class Singleton {
  static instance = null // 靜態變數

  constructor (name){
      if(Singleton.instance){
          return Singleton.instance
      }
      this.name = name
      return Singleton.instance = this
  }

  getName(){
    return this.name
  }
}

let a = new Singleton('william')
let b = new Singleton('tina')

// 驗證
console.log(a.getName()) // william
console.log(b.getName()) // william
console.log(a === b) // true
