import { bdone } from './b.mjs';

export var adone = true;
// export let adone = true;

export function aHelloWorld() {
  console.log('hello world in a');
}

console.log(`在 a 中 'bdone' 的值为：${bdone}`);

adone = false;
