import match from './regExp/match.js';

class CheckType {
  constructor(content) {
    this.type = Object.prototype.toString.call(content);
    return this.getType();
  }

  getType() {
    const getType = this.type.match(match.checkType);
    return getType ? getType[0].toLowerCase() : this.type;
  }

  isObject() {

  }

}

export default (content) => new CheckType(content);
