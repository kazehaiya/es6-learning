import { adone, aHelloWorld } from './a.mjs';

export let bdone = false;

console.log(`在 b 中 adone 的值为：${adone}`);
aHelloWorld();

bdone = true;
