import { Init } from './modules/init';
import { methods } from './modules/methods';
import global from './modules/global';

// initialize library
const tawJS = (x) => new Init(x);

// add all functions from methods file to library
for (let method in methods) {
  tawJS[method] = methods[method];
}

// common name for library
const taw = tawJS;
let num = 500;

console.log(num.formatCurrency());
