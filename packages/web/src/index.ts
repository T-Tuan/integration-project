
export enum BrowserType {
  IE = 'IE',
  Edge = 'Edge',
  Chrome = 'Chrome',
  Firefox = 'Firefox',
  Safari = 'Safari'
}

/**
 * 检测浏览器类型和版本
 * @param targetBrowser 指定的浏览器名称，可选参数
 * @returns 如果指定了 targetBrowser 参数，则返回一个布尔值，表示当前浏览器是否为指定浏览器，否则返回一个包含浏览器类型和版本的对象
 */
export function detectBrowser(targetBrowser?: BrowserType): boolean | { name: string, version: string } {
  const userAgent = navigator.userAgent;
  let browserName = '';
  let browserVersion = '';

  // 检测浏览器类型
  if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    browserName = 'Opera';
  } else if (userAgent.indexOf('Edg') > -1) {
    browserName = 'Microsoft Edge';
  } else if (userAgent.indexOf('Chrome') > -1) {
    browserName = 'Google Chrome';
  } else if (userAgent.indexOf('Safari') > -1) {
    browserName = 'Safari';
  } else if (userAgent.indexOf('Firefox') > -1) {
    browserName = 'Mozilla Firefox';
  } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident/') > -1) {
    browserName = 'Microsoft Internet Explorer';
  }

  // 检测浏览器版本
  const regExp = new RegExp(`${browserName}[/\\s](\\d+(?:\\.\\d+)?)`);
  const matches = userAgent.match(regExp);
  if (matches != null && matches.length > 1) {
    browserVersion = matches[1];
  }

  // 判断是否为指定浏览器
  if (targetBrowser) {
    return browserName.toLowerCase() === targetBrowser.toLowerCase();
  }

  // 返回浏览器类型和版本信息
  return { name: browserName, version: browserVersion };
}