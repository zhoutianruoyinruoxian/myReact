export default {
  sixSecondsNumber: {
    pattern: /^(([1-5]?\d{1})|60)$/,
    message: '请填写60以内的数字',
  },
  hundredNumber: {
    pattern: /^(([1-9]?\d{1})|100)$/,
    message: '请填写0~100间的数字',
  },
  moreThanZeroNumber: {
    pattern: /^[1-9][0-9]*$/,
    message: '请填写大于0的数字',
  },
  httpCode: {
    pattern: /^\d{3}$/,
    message: '请填写正确的状态码',
  },
  httpUrl: {
    pattern: /^(http:\/\/|https:\/\/)?(\w+\.){2,}\w+(:\d{4})?(\/\w*)*$/,
    message: '请填写正确的跳转路径',
  },
  url: {
    pattern: /^(\/?\w*)+$/,
    message: '请填写正确的URL',
  },
};
