import { ieArrayPoly } from './modules/poly';
import { Modules } from './modules/modules';

class Taw extends Modules {}

Taw.prototype.on = ((() => {
  if (document.addEventListener) {
    return function (evt, fn) {
      return this.forEach(el => {
        el.addEventListener(evt, fn, false);
      });
    };
  } else if (document.attachEvent) {
    return function (evt, fn) {
      return this.forEach(el => {
        el.attachEvent(`on${evt}`, fn);
      });
    };
  } else {
    return function (evt, fn) {
      return this.forEach(el => {
        el[`on${evt}`] = fn;
      });
    };
  }
})());

Taw.prototype.off = ((() => {
  if (document.removeEventListener) {
    return function (evt, fn) {
      return this.forEach(el => {
        el.removeEventListener(evt, fn, false);
      });
    };
  } else if (document.detachEvent) {
    return function (evt, fn) {
      return this.forEach(el => {
        el.detachEvent(`on${evt}`, fn);
      });
    };
  } else {
    return function (evt, fn) {
      return this.forEach(el => {
        el[`on${evt}`] = null;
      });
    };
  }
})());

const TAW_LIBRARY = (function () {
  const x = {
    get(selector) {
      let els;
      if (typeof selector === 'string') {
        els = document.querySelectorAll(selector);
      } else if (selector.length) {
        els = selector;
      } else {
        els = [selector];
      }
      return new Taw(els);
    },
    create(tagName, attrs) {
      const el = new Taw([document.createElement(tagName)]);
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
  };
  return x;
}());

if (!window.hasOwnProperty( "taw" )) {
  var taw = TAW_LIBRARY.get;
}


