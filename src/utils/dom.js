
class DomApi {
  constructor(Dom) {
    this.Dom = Dom;
  }


  on = (element, event, selector, callback) => {
    if (!callback) {
      callback = selector;
      this.bind(element, event, callback);
    } else {
      this.delegate(element, event, selector, callback);
    }
    return this;
  };

  off = (element, event, handler) => {
    element.removeEventListener(event, handler);
    return this;
  };

  bind = (element, event, callback) => {
    event.split(/\s+/).forEach(function (event) {
      element.addEventListener(event, callback);
    });
    return this;
  };

  delegate = (element, event, selector, callback) => {
    element.addEventListener(event, function (e) {
      const delegatedTarget = e.target.closest(selector);
      if (delegatedTarget) {
        e.delegatedTarget = delegatedTarget;
        callback.call(this, e, delegatedTarget);
      }
    });
    return this;
  };

  closest = (selector, element) => {
    if (!element) return null;

    if (element.matches(selector)) {
      return element;
    }

    return this.closest(selector, element.parentNode);
  };

  attr = (element, attr, value) => {
    if (!value && typeof attr === 'string') {
      return element.getAttribute(attr);
    }

    if (typeof attr === 'object') {
      for (let key in attr) {
        this.attr(element, key, attr[key]);
      }
      return;
    }

    element.setAttribute(attr, value);
  };

  domToString(node) {
    let tmpNode = document.createElement('div');
    tmpNode.appendChild(node);
    let str = tmpNode.innerHTML;
    tmpNode = node = null; // 解除引用，以便于垃圾回收
    return str;
  }
}

const $ = (element, dom = document) => {
  // return typeof element === 'string'
  //   ? (dom || document).querySelector(element)
  //   : element || null;
  const Select = dom.querySelector(element);
  if (!Select) throw new Error('can not find dom by ' + element);
  return new DomApi(Select);
};

export default $;

