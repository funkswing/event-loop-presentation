// Run code to see the order the Event Loop resolves these
// Bluebird.JS resolves Promises using `setImmediate()`
// Native Promises resolve using a "micro queue" that occurs right after `process.nextTick()`

const Bluebird = require("bluebird")

Promise.resolve().then(() => console.log('Promise 1 resolved'));
Bluebird.resolve().then(() => console.log('Bluebird 1 resolved'));
Promise.resolve().then(() => console.log('Promise 2 resolved'));
Bluebird.resolve().then(() => console.log('Bluebird 2 resolved'));
Promise.resolve().then(() => {
    console.log('Promise 3 resolved');
    process.nextTick(() => console.log('Next Tick inside promise resolve handler'));
});
Promise.resolve().then(() => console.log('Promise 4 resolved'));
Promise.resolve().then(() => console.log('Promise 5 resolved'));
setImmediate(() => console.log('Set Immediate1'));
setImmediate(() => console.log('Set Immediate2'));

process.nextTick(() => console.log('Next Tick1'));
process.nextTick(() => console.log('Next Tick2'));
process.nextTick(() => console.log('Next Tick3'));

setTimeout(() => console.log('set timeout'), 0);
setImmediate(() => console.log('Set Immediate3'));
setImmediate(() => console.log('Set Immediate4'));
