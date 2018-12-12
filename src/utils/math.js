import match from './regExp/match.js';

'use strict';

class MathApi {
  constructor() {

  }

  /**
   * @desc 判断是否为奇数
   * @param {number|string} number
   * @return {Boolean} true is odd false is even
   */
  isOdd(number) {
    if (typeof number !== 'number') throw new TypeError('number must be a number');
    return (number & 1) === 1;
  }

  /**
   * @desc 将数字转换为千分制
   */
  toLocaleString(number) {
    return number.replace(match.toLocaleString, '$&,');
  }

}


export default () => new MathApi();
