export const isString = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `String`
}

export const isNumber = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Number`
}

export const isObj = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Object`
}

export const isArray = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Array`
}

export const isDate = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Date`
}

export const isBoolean = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Boolean`
}

export const isFunction = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Function`
}

export const isNull = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Null`
}

export const isUndefined = <T>(o: T): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === `Undefined`
}

export const isIos = () => {
  //是否ios
  var u = navigator.userAgent
  if (u.indexOf(`Android`) > -1 || u.indexOf(`Linux`) > -1) {
    //安卓手机
    return false
  } else if (u.indexOf(`iPhone`) > -1) {
    //苹果手机
    return true
  } else if (u.indexOf(`iPad`) > -1) {
    //iPad
    return false
  } else if (u.indexOf(`Windows Phone`) > -1) {
    //winPhone手机
    return false
  } else {
    return false
  }
}

export const isPc = () => {
  //是否为pc端
  var u = navigator.userAgent
  var agents = [
    `Android`,
    `iPhone`,
    `SymbianOs`,
    `Windows Phone`,
    `iPad`,
    `iPod`,
  ]
  var flag = true

  for (let v = 0; v < agents.length; v++) {
    if (u.indexOf(agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export const browserType = () => {
  //浏览器类型
  var userAgent = navigator.userAgent,
    isOpera = userAgent.indexOf(`Opera`) > -1, //取得浏览器的userAgent字符串
    isIE =
      userAgent.indexOf(`compatible`) > -1 &&
      userAgent.indexOf(`MSIE`) > -1 &&
      !isOpera, //判断是否ie浏览器
    isEdge = userAgent.indexOf(`Edge`) > -1, //判断是否为IE的Edge浏览器
    isFF = userAgent.indexOf(`Firefox`) > -1, //判断是否为Firefox浏览器
    isSafari =
      userAgent.indexOf(`Safari`) > -1 && userAgent.indexOf(`Chrome`) == -1, //判断是否Safari浏览器
    isChrome =
      userAgent.indexOf(`Chrome`) > -1 && userAgent.indexOf(`Safari`) > -1 //判断是否Chrome浏览
  if (isIE) {
    var reIE = new RegExp(`MSIE (\\d+\\.\\d+);`)
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp[`$1`])
    if (fIEVersion == 7) {
      return `IE7`
    } else if (fIEVersion == 8) {
      return `IE8`
    } else if (fIEVersion == 9) {
      return `IE9`
    } else if (fIEVersion == 10) {
      return `IE10`
    } else if (fIEVersion == 11) {
      return `IE11`
    } else {
      return `IE7以下`
    }
  }

  if (isFF) {
    return `FF`
  }
  if (isOpera) {
    return `Opera`
  }
  if (isEdge) {
    return `Edge`
  }
  if (isSafari) {
    return `Safari`
  }
  if (isChrome) {
    return `Chrome`
  }

  return ``
}

const checkStrRegMap = {
  phone: [/^1[3|4|5|7|8][0-9]{9}$/],
  tel: [/^(0d{2,3}-d{7,8})(-d{1,4})?$/],
  card: [/^d{15}|d{18}$/],
  pwd: [/^[a-zA-Z]w{5,17}$/],
  postal: [/[1-9]d{5}(?!d)/],
  QQ: [/^[1-9][0-9]{4,9}$/],
  email: [/^[w-]+(.[w-]+)*@[w-]+(.[w-]+)+$/],
  money: [/^d*(?:.d{0,2})?$/],
  URL: [
    /(http|ftp|https):\/\/[w-_]+(.[w-_]+)+([w-.,@?^=%&:/~+#]*[w-@?^=%&/~+#])?/,
  ],
  IP: [
    /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  ],
  date: [
    /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/,
    /^(\d{4})-(\d{2})-(\d{2})$/,
  ],
  number: [/^[0-9]$/],
  english: [/^[a-zA-Z]+$/],
  chinese: [/^[\u4E00-\u9FA5]+$/],
  lower: [/^[a-z]+$/],
  upper: [/^[A-Z]+$/],
  HTML: [/<("[^"]*"|'[^']*'|[^'">])*>/],
} as const

export const checkStr = (str: string, type: keyof typeof checkStrRegMap) => {
  for (const keys in checkStrRegMap) {
    if (keys === type) {
      for (const reg of checkStrRegMap[keys]) {
        if (reg.test(str)) {
          return true
        }
      }
    }
  }
  return false
}
