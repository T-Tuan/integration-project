export const checkStr = (str, type) => {
    //校验
    switch (type) {
      case "phone": //手机号码
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str)
        break
      case "tel": //座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
        break
      case "card": //身份证
        return /^\d{15}|\d{18}$/.test(str)
        break
      case "pwd": //密码以字母开头，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str)
        break
      case "postal": //邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str)
        break
      case "QQ": //QQ号
        return /^[1-9][0-9]{4,9}$/.test(str)
        break
      case "email": //邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
        break
      case "money": //金钱(小数点两位)
        return /^\d*(?:\.\d{0,2})?$/.test(str)
        break
      case "URL": //网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
          str
        )
        break
      case "IP": //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
          str
        )
        break
      case "date": //日期时间
        return (
          /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
            str
          ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        )
        break
      case "number": //数字
        return /^[0-9]$/.test(str)
        break
      case "english": //英文
        return /^[a-zA-Z]+$/.test(str)
        break
      case "chinese": //中文
        return /^[\u4E00-\u9FA5]+$/.test(str)
        break
      case "lower": //小写
        return /^[a-z]+$/.test(str)
        break
      case "upper": //大写
        return /^[A-Z]+$/.test(str)
        break
      case "HTML": //HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
        break
      default:
        return true
    }
  }