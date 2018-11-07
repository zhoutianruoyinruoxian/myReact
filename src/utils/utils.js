/**
 * @desc 将url的查询参数转为对象
 * @param {string} location location对象
 * @param {boolean} toNumber 是否把参数转为数字类型(例：'1' => 1),无法转为数字的不动（默认值false）
 */
const urlParse = (location, toNumber = false) => {
  if (typeof location.search !== 'string') throw new TypeError('location.search must be a string');
  const query = location.search.slice(1);
  let paramsList = [];
  let params = {};
  if (!query) return params;
  paramsList = query.split('&');
  paramsList.forEach(item => {
    let [key, value] = item.split('=');
    toNumber && !isNaN(Number(value)) && (value = Number(value));
    params[key] = value;
  });
  return params;
};

/**
 * @desc 获取Dom样式
 * @param {object} element Dom节点
 * @param {string} attr 样式名称
 */
const getStyle = (element, attr) => {
  if (element.currentStyle) {
    return Number(element.currentStyle[attr].replace(/px/, ''));
  }
  else {
    return Number(document.defaultView.getComputedStyle(element, null)[attr].replace(/px/, ''));
  }
};

/**
 * @desc 获取doom节点高度
 * @param {string} element Dom节点
 * @param {boolean} includePadding 获取高度是否要包含padding（默认值false）
 */
const getHeight = (element, includePadding = false) => {
  const dom = element;
  try {
    if (includePadding) {
      return dom.clientHeight + getStyle(dom, 'marginBottom') + getStyle(dom, 'marginTop');
    } else {
      return dom.clientHeight + getStyle(dom, 'marginBottom') + getStyle(dom, 'marginTop') - getStyle(dom, 'paddingTop') - getStyle(dom, 'paddingBottom');
    }
  } catch (err) {
    throw new Error(err);
    // return 0;
  }
};



const utf8_to_b64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)));
};

const b64_to_utf8 = (str) => {
  return decodeURIComponent(escape(window.atob(str)));
};
//在js引擎内部,encodeURIComponent(str)相当于escape(unicodeToUTF8(str))
//所以可以推导出unicodeToUTF8(str)等同于unescape(encodeURIComponent(str))




export default {
  urlParse,
  getStyle,
  getHeight,
  utf8_to_b64,
  b64_to_utf8,
};
