// url重定向
export const urlRedirect = (url, param) => {
    let _param = '';
    if (param) {
        for (let item of Object.keys(param)) {
            _param += `${item}=${param[item]}&`;
        }
        _param = _param.substr(0, _param.length - 1);
        window.location.href = url + '?' + _param;
    } else {
        window.location.href = url;
    }
}

// 获取url参数值
// key: 需要获取的key
export function urlLocalParam(key, url) {
    let _params = window.location.search;
    if (url) {
        _params = url.split('?')[1];
    }
    if (!_params) {
        return '';
    }
    const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    const obj = _params.substr(1).match(reg);
    if (obj != null) {
        return decodeURIComponent(obj[2]);
    }
    return '';
}

// 获取url的文件全称
const fileName = (url) => {
    const _urlArr = url.split('/');
    return _urlArr[_urlArr.length - 1];
}
// 返回url文件名称
// isSuffix 是否存在后缀
export const urlFileName = (url, isSuffix = true) => {
    const _file = fileName(url);
    if (isSuffix) {
        return _file;
    }
    return _file.split('.')[0];
}

// 返回url文件名后缀
export const urlFileSuffix = (url) => {
    const _file = fileName(url);
    const _fileArr = _file.split('.');
    return _fileArr[_fileArr.length - 1];
}

/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
	let prefix = isPrefix ? '?' : ''
	let _result = []
	if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
	for (let key in data) {
		let value = data[key]
		// 去掉为空的参数
		if (['', undefined, null].indexOf(value) >= 0) {
			continue;
		}
		// 如果值为数组，另行处理
		if (value.constructor === Array) {
			// e.g. {ids: [1, 2, 3]}
			switch (arrayFormat) {
				case 'indices':
					// 结果: ids[0]=1&ids[1]=2&ids[2]=3
					for (let i = 0; i < value.length; i++) {
						_result.push(key + '[' + i + ']=' + value[i])
					}
					break;
				case 'brackets':
					// 结果: ids[]=1&ids[]=2&ids[]=3
					value.forEach(_value => {
						_result.push(key + '[]=' + _value)
					})
					break;
				case 'repeat':
					// 结果: ids=1&ids=2&ids=3
					value.forEach(_value => {
						_result.push(key + '=' + _value)
					})
					break;
				case 'comma':
					// 结果: ids=1,2,3
					let commaStr = "";
					value.forEach(_value => {
						commaStr += (commaStr ? "," : "") + _value;
					})
					_result.push(key + '=' + commaStr)
					break;
				default:
					value.forEach(_value => {
						_result.push(key + '[]=' + _value)
					})
			}
		} else {
			_result.push(key + '=' + value)
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}

