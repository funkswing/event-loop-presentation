

console.log("Log 1")
Promise.resolve().then(() => console.log('Promise 1 resolved'));
Promise.resolve().then(() => console.log('Promise 2 resolved'));
setTimeout(() => console.log('set timeout'), 0);
Promise.resolve().then(() => {
    console.log('Promise 3 resolved');
    Promise.resolve().then(() => { console.log('Promise resolve inside promise resolve handler') });
});
Promise.resolve().then(() => console.log('Promise 4 resolved'));
Promise.resolve().then(() => console.log('Promise 5 resolved'));

setTimeout(() => console.log('set timeout'), 0);



console.log("Log 2")
Promise.resolve().then(() => console.log('Promise 1 resolved'));
Promise.resolve().then(() => console.log('Promise 2 resolved'));
setTimeout(() => console.log('set timeout'), 0);
Promise.resolve().then(() => {
    console.log('Promise 3 resolved');
    Promise.resolve().then(() => { console.log('Promise resolve inside promise resolve handler') });
});
Promise.resolve().then(() => console.log('Promise 4 resolved'));
Promise.resolve().then(() => console.log('Promise 5 resolved'));

setTimeout(() => console.log('set timeout'), 0);
