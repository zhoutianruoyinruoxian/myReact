
class MathApi {
  constructor() {

  }

  /**
   * @desc 判断是否为奇数
   * @param {number|string} number
   * @return {Boolean} true is odd false is even
   */
  isOdd = (number) => {
    if (typeof number !== 'number') return new TypeError('number must be a number');
    return (number & 1) === 1;
  }
}


export default (() => new MathApi())();
