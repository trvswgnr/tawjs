export class Events {}

Events.prototype.on = ((() => {
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


Events.prototype.off = ((() => {
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
