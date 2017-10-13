import { Modules } from './modules';

export class Lib extends Modules {}

export class Init {
  constructor(selector) {
    let els;
    if (typeof selector === 'string') {
      els = document.querySelectorAll(selector);
    } else if (typeof selector === 'undefined') {
      return;
    } else if (selector.length) {
      els = selector;
    } else {
      els = [selector];
    }
    return new Lib(els);
  }
  create(tagName, attrs) {
    const el = new Lib([document.createElement(tagName)]);
    if (attrs) {
      if (attrs.className) {
        el.addClass(attrs.className);
        delete attrs.className;
      }
      if (attrs.text) {
        el.text(attrs.text);
        delete attrs.text;
      }
      for (const key in attrs) {
        if (attrs.hasOwnProperty(key)) {
          el.attr(key, attrs[key]);
        }
      }
    }
    return el;
  }
}
