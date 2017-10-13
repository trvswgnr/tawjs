import classes from './functions/merge-classes';

export class Utilities {
  forEach(callback) {
    this.map(callback);
    return this;
  }

  map(callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
      results.push(callback.call(this, this[i], i));
    }
    return results; //.length > 1 ? results : results[0];
  }

  mapOne(callback) {
    const m = this.map(callback);
    return m.length > 1 ? m : m[0];
  }

  mergeClasses(baseClass, ...mixins) {
    return classes(baseClass, mixins);
  }

}
