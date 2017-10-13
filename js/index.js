import { Init } from './modules/init';
import { methods } from './modules/methods';

// initialize library
const tawJS = (x) => new Init(x);

// add all functions from methods file to library
for (let method in methods) {
  tawJS[method] = methods[method];
}

// common name for library
const taw = tawJS;

console.log();
