let x = 0;
let start = Date.now();
let timeTaken = Date.now() - start;

let fib = (num) => {
    let a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

while (fib(x) < Infinity) { x++; }

console.log('limit found: ' + x);
console.log('est. number: ' + fib(x - 1));
console.log('time: ' + timeTaken + ' milliseconds');