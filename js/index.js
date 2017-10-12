import { ieArrayPoly } from './modules/poly';
import { Modules } from './modules/modules';

class Taw extends Modules {}

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

taw('#block').on('click',function(){
  console.log('clicked');
});
