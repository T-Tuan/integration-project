export const isIos = () => {
  //是否ios
  const u = navigator.userAgent
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
  const u = navigator.userAgent
  const agents = [`Android`, `iPhone`, `SymbianOs`, `Windows Phone`, `iPad`, `iPod`]
  let flag = true

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
  const userAgent = navigator.userAgent,
    isOpera = userAgent.indexOf(`Opera`) > -1, //取得浏览器的userAgent字符串
    isIE = userAgent.indexOf(`compatible`) > -1 && userAgent.indexOf(`MSIE`) > -1 && !isOpera, //判断是否ie浏览器
    isEdge = userAgent.indexOf(`Edge`) > -1, //判断是否为IE的Edge浏览器
    isFF = userAgent.indexOf(`Firefox`) > -1, //判断是否为Firefox浏览器
    isSafari = userAgent.indexOf(`Safari`) > -1 && userAgent.indexOf(`Chrome`) == -1, //判断是否Safari浏览器
    isChrome = userAgent.indexOf(`Chrome`) > -1 && userAgent.indexOf(`Safari`) > -1 //判断是否Chrome浏览
  if (isIE) {
    const reIE = new RegExp(`MSIE (\\d+\\.\\d+);`)
    reIE.test(userAgent)
    const fIEVersion = parseFloat(RegExp[`$1`])
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
}

const ua = navigator.userAgent

// 判断用户使用的浏览器
// ie浏览器
export const isIE = () => {
  return /ie/i.test(ua.toLowerCase())
}
// Edge浏览器
export const isEdge = () => {
  return /edge/i.test(ua.toLowerCase())
}
// firefox浏览器
export const isFirefox = () => {
  return /firefox/i.test(ua.toLowerCase())
}
// 谷歌chrome浏览器
export const isChrome = () => {
  return /chrome/i.test(ua.toLowerCase())
}
// opera浏览器
export const isOpera = () => {
  return /opera/i.test(ua.toLowerCase())
}
// safari浏览器
export const isSafari = () => {
  return /safari/i.test(ua.toLowerCase())
}
// 微信浏览器
export const isWechatBrowers = () => {
  return /micromessenger/i.test(ua.toLowerCase())
}
// UC浏览器
export const isUC = () => {
  return /ucweb/i.test(ua.toLowerCase())
}
