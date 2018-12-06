export default {
  checkType: /(?<=^\[object\s).+(?=\]$)/g, //判断类型
  toLocaleString: /\d{1,3}(?=(\d{3})+$)/g, //将数字转换成千分制
};
