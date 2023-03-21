/**
 * 检查一个值是否为 null。
 *
 * @param value 要检查的值。
 * @returns 如果值为 null，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * 检查一个值是否为 undefined。
 *
 * @param value 要检查的值。
 * @returns 如果值为 undefined，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

/**
 * 检查一个值是否为字符串类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为字符串类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * 检查一个值是否为数字类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为数字类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

/**
 * 检查一个值是否为布尔类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为布尔类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

/**
 * 检查一个值是否为数组类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为数组类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}

/**
 * 检查一个值是否为对象类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为对象类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/**
 * 检查一个值是否为函数类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为函数类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

/**
 * 检查一个值是否为日期类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为日期类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

/**
 * 检查一个值是否为正则表达式类型。
 *
 * @param value 要检查的值。
 * @returns 如果值为正则表达式类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/**
 * 检查一个值是否为错误类型。
 *
 * @param {unknown} value - 要检查的值。
 * @returns {boolean} - 如果值为错误类型，则返回 true，否则返回 false。
 * @category 类型检查方法
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}