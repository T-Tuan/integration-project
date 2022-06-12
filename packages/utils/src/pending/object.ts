/**
 * 判断是否对象
 *
 */
export function isObject(obj: any) {
  const valueType = typeof obj
  return obj !== null && (valueType === `object` || valueType === `function`)
}

/**
 * 深拷贝
 */
export function deepClone(originValue: any, map = new WeakMap()) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }

  // 判断是否是一个Map类型
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判断如果是Symbol的value, 那么创建一个新的Symbol
  // if (typeof originValue === 'symbol') {
  //     return Symbol(originValue.description);
  // }

  // 判断如果是函数类型, 那么直接使用同一个函数
  if (typeof originValue === `function`) {
    return originValue
  }

  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue
  }
  if (map.has(originValue)) {
    return map.get(originValue)
  }

  // 判断传入的对象是数组, 还是对象
  const newObject: any = Array.isArray(originValue) ? [] : {}
  map.set(originValue, newObject)
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key], map)
  }

  // 对Symbol的key进行特殊的处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const sKey of symbolKeys) {
    // const newSKey = Symbol(sKey.description)
    newObject[sKey] = deepClone(originValue[sKey], map)
  }

  return newObject
}

/**
 * 属性是否为null，undefined，''， {}
 */
export function isNull(value: any) {
  const type = Object.prototype.toString.call(value)
  return (
    type === `[object Null]` ||
    type === `[object Undefined]` ||
    value === `` ||
    JSON.stringify(value) === `{}`
  )
}

/**
 * 删除对象中属性的空值
 */
export function deleteNullValue(obj: any) {
  const newObj: any = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!isNull(obj[key])) {
        if (Object.prototype.toString.call(obj[key]) === `[object Object]`) {
          newObj[key] = deleteNullValue(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }
  }
  return newObj
}
