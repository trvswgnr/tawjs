import classes from './functions/merge-classes';

/**
 * Add independent methods / functions here.
 */
export const methods = {
  mergeClasses(baseClass, ...mixins) {
    return classes(baseClass, ...mixins);
  }
};
