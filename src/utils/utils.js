/**
 * @desc 将url的查询参数转为对象
 * @param {object|string} location|url location对象或者url字符串
 * @param {boolean} toNumber 是否把参数转为数字类型(例：'1' => 1),无法转为数字的不动（默认值false）
 */
const urlParse = (location, toNumber = false) => {
  const type = Object.prototype.toString.call(location);
  let query = null;
  if (type === '[object Location]') {
    query = location.search.slice(1);
  } else if (type === '[object String]' && !~location.indexOf('?')) {
    const index = location.indexOf('?');
    query = location.slice(index);
  } else {
    return location;
  }
  let paramsList = [];
  let params = {};
  if (!query) return params;
  paramsList = query.split('&');
  paramsList.forEach(item => {
    let [key, value] = item.split('=');
    toNumber && !isNaN(Number(value)) && !isNaN(parseInt(value)) && (value = parseInt(value));
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


const uploadFile = (file, option, callback) => {
  const defaultOption = {
    file: '',
    fileName: '',
    senData: {},
  };
  const formData = new FormData();
  for (let i of option) {
    formData.set(i, option[i]);
  }

};

const downLoadFile = () => {
  formData.set('purchaseId', '采购单号');
  formData.set('searchKeyword', '关键词');

  axios.get(api._config.exportDevicesByPurchaseId, formData, { responseType: 'blob' }).then((res) => {
    let blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }); //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
    let downloadElement = document.createElement('a');
    let href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = fileName + '_失败标记表.xls'; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
  });
}

// const isEmpty


export default {
  urlParse,
  getStyle,
  getHeight,
  utf8_to_b64,
  b64_to_utf8,
};
