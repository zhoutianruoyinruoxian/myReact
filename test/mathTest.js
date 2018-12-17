import { toLocaleString, isOdd } from '../src/utils/math.js';
import chai from 'chai';
const assert = chai.assert;

describe('工具math', function () {
  describe('toLocaleString测试', function () {
    it('千分制', function () {
      assert.equal(toLocaleString(1234567890), '1,234,567,890');
    });
  });
  describe('isOdd测试', function () {
    it('isOdd', function () {
      assert.equal(isOdd(-1), true);
    });

    it('isOdd', function () {
      assert.equal(isOdd(2), false);
    });

    it('isOdd', function () {
      assert.equal(isOdd(3), true);
    });
  });
});
