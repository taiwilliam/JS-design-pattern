import required from './strategies/required.js'
import min from './strategies/min.js'
import isPhone from './strategies/isPhone.js'

// 策略物件方法的枚舉
const STRATEGY_VALIDATION_FN_ENUM = {
  required: required,
  min: min,
  isPhone: isPhone
}

// 驗證物件
class validation {
  constructor() {
    this._cache = [];
  }

  // 註冊驗證器
  // dom: 要驗證的dom元素
  // rules: array包裝的驗證規則
  // [
  //   {
  //     rule: rule(string)
  //     errorMsg: errorMsg(string)
  //   }
  // ]
  register(dom ,rules) {
    this._cache.push({
      dom: dom,
      name: dom.name,
      value: dom.value,
      rules: rules
    });
  }

  // 驗證開始
  start() {
    const result = []

    // 開始驗證
    // 遍歷所有註冊的單位
    this._cache.forEach(item => {
      // 遍歷每個單位需要的驗證規則
      for(let i = 0; i < item.rules.length; i++){
        const rule = item.rules[i]
        const strategy = rule.rule.split(':')[0]
        const parameter = rule.rule.split(':')[1]
        const parameter_arr = parameter ? [item.value, parameter, rule.errorMsg] : [item.value, rule.errorMsg]
        let errorMsg = ''
        
        // 調用策略物件方法
        errorMsg = STRATEGY_VALIDATION_FN_ENUM[strategy](...parameter_arr)

        // 若有錯誤訊息則加入回傳值，並結束迴圈
        if(errorMsg){
          result.push({
            [item.name]: errorMsg
          })
          break
        }
      }
    })

    return result
  }
}


export default validation