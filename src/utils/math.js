import match from './regExp/match.js';


/**
 * @desc 判断是否为奇数
 * @param {number|string} number
 * @return {Boolean} true is odd false is even
 */
export function isOdd(number) {
  if (typeof number !== 'number') throw new TypeError('number must be a number');
  return (number & 1) === 1;
}

/**
 * @desc 将数字转换为千分制
 */
export function toLocaleString(number) {
  return number.toString().replace(match.toLocaleString, '$&,');
}

