export const ieArrayPoly = (function () {
  if (typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function (item) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === item) {
          return i;
        }
      }
      return -1;
    };
  }
}());
