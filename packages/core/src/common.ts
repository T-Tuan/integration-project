import { isArray,isString,isObject,isNull,isUndefined } from './typeMethods';

/**
 * 检查一个值是否为 null 或 undefined。
 *
 * @param value 要检查的值。
 * @returns 如果值为 null 或 undefined，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/**
 * 检查一个值是否为空值。
 *
 * @param value 要检查的值。
 * @returns 如果值为 null、undefined 或空字符串，则返回 true，否则返回 false。
 * @category 类型检查方法
 * @enum
 */
export function isEmpty(value: unknown): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }
  if (isString(value)) {
    return value.trim() === "";
  }
  if (isArray(value)) {
    return value.length === 0;
  }
  if (isObject(value)) {
    return isObjectEmpty(value);
  }
  return false;
}

/**
 * 判断一个数组是否为空
 * @param arr 要判断的数组
 * @returns 返回一个布尔值，表示数组是否为空
 */
export function isArrayEmpty<T>(arr: T[]): boolean {
  return arr.length === 0;
}

/**
 * 判断一个对象是否为空对象
 * @param obj 要判断的对象
 * @returns 返回一个布尔值，表示对象是否为空对象
 */
export function isObjectEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * 将驼峰字符串转换为短横线字符串
 * @param str 待转换的驼峰字符串
 * @returns 转换后的短横线字符串
 */
export function camelToDash(str: string): string {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

/**
 * 将短横线字符串转换为驼峰字符串
 * @param str 待转换的短横线字符串
 * @returns 转换后的驼峰字符串
 */
export function dashToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}


/**
 * 对象数组去重
 * @param {any[]} arr 需要去重的数组
 * @param {string} uniId 对象组数中需要去重的指定属性
 * @returns {Array} 返回去重后的新数组
 */
export function setArray(arr: any[], uniId?: string) {
  const res = new Map();
  return arr.filter((item, idx) => {
    const attr = uniId ?? idx;
    return !res.has(item[attr]) && res.set(item[attr], 1);
  });
}

/**
 * 生成指定长度的随机字符串
 * 使用当前时间戳作为随机种子
 * @param length 生成的字符串长度，默认为 8
 * @returns 生成的随机字符串
 */
export function generateRandomString(length: number = 8): string {
  const timestamp = Date.now().toString();
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * timestamp.length);
    randomString += timestamp[randomIndex];
  }
  return randomString;
}




