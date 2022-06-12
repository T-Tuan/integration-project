// 数字转中文
function transform(tranvalue) {
  try {
    var i = 1
    var dw2 = [``, `万`, `亿`] //大单位
    var dw1 = [`拾`, `佰`, `仟`] //小单位
    var dw = [`零`, `壹`, `贰`, `叁`, `肆`, `伍`, `陆`, `柒`, `捌`, `玖`]
    //整数部分用
    //以下是小写转换成大写显示在合计大写的文本框中
    //分离整数与小数
    var source = splits(tranvalue)
    var num = source[0]
    var dig = source[1]
    //转换整数部分
    var k1 = 0 //计小单位
    var k2 = 0 //计大单位
    var sum = 0
    var str = ``
    var len = source[0].length //整数的长度
    for (i = 1; i <= len; i++) {
      var n = source[0].charAt(len - i) //取得某个位数上的数字
      var bn = 0
      if (len - i - 1 >= 0) {
        bn = source[0].charAt(len - i - 1) //取得某个位数前一位上的数字
      }
      sum = sum + Number(n)
      if (sum != 0) {
        str = dw[Number(n)].concat(str) //取得该数字对应的大写数字，并插入到str字符串的前面
        if (n == `0`) {
          sum = 0
        }
      }
      if (len - i - 1 >= 0) {
        //在数字范围内
        if (k1 != 3) {
          //加小单位
          if (bn != 0) {
            str = dw1[k1].concat(str)
          }
          k1++
        } else {
          //不加小单位，加大单位
          k1 = 0
          var temp = str.charAt(0)
          if (temp == `万` || temp == `亿`) {
            //若大单位前没有数字则舍去大单位
            str = str.substr(1, str.length - 1)
          }
          str = dw2[k2].concat(str)
          sum = 0
        }
      }
      if (k1 == 3) {
        //小单位到千则大单位进一
        k2++
      }
    }
    //转换小数部分
    var strdig = ``
    if (dig != ``) {
      var n = dig.charAt(0)
      if (n != 0) {
        strdig += dw[Number(n)] + `角` //加数字
      }
      var n = dig.charAt(1)
      if (n != 0) {
        strdig += dw[Number(n)] + `分` //加数字
      }
    }
    str += `元` + strdig
  } catch (e) {
    return `0元`
  }
  return str
}

//拆分整数与小数
function splits(tranvalue) {
  var value = [``, ``],
    temp = tranvalue.split(`.`)
  for (var i = 0; i < temp.length; i++) {
    value = temp
  }
  return value
}

/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier)
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid(len = 32, firstU = true, radix = null) {
  const chars = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`.split(``)
  const uuid = []
  radix = radix || chars.length

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (let i = 0; i < len; i++) {
      uuid[i] = chars[0 | (Math.random() * radix)]
    }
  } else {
    let r
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = `-`
    uuid[14] = `4`

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift()
    return `u` + uuid.join(``)
  } else {
    return uuid.join(``)
  }
}
